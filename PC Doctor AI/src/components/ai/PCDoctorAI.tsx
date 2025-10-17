
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'image' | 'video';
  mediaUrl?: string;
}

interface PCDoctorAIProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PCDoctorAI({ isOpen, onClose }: PCDoctorAIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🤖 ¡Hola! Soy PC Doctor AI, tu técnico virtual especializado. Puedo ayudarte con diagnósticos, reparaciones y soporte técnico 24/7. ¿Qué problema tienes con tu ordenador?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const technicalResponses = {
    'virus': '🦠 **ELIMINACIÓN DE VIRUS DETECTADA**\n\n✅ **Plan de acción inmediato:**\n1. Desconecta internet temporalmente\n2. Ejecuta Windows Defender en modo offline\n3. Descarga Malwarebytes desde otro dispositivo\n4. Escanea en modo seguro\n5. Verifica programas de inicio sospechosos\n\n¿Qué síntomas específicos has notado? (lentitud, ventanas emergentes, archivos cifrados...)',
    
    'lento': '⚡ **DIAGNÓSTICO DE RENDIMIENTO**\n\n🔍 **Causas más comunes:**\n• Disco duro lleno (&gt;80%)\n• Muchos programas al inicio\n• Malware oculto\n• RAM insuficiente\n• Fragmentación del disco\n\n📋 **Solución paso a paso:**\n1. Abre Administrador de tareas (Ctrl+Shift+Esc)\n2. Ve a "Inicio" y desactiva programas innecesarios\n3. Libera espacio: Configuración &gt; Sistema &gt; Almacenamiento\n4. Ejecuta "Liberador de espacio en disco"\n\n¿Cuándo empezó la lentitud?',
    
    'wifi': '📶 **DIAGNÓSTICO DE CONECTIVIDAD**\n\n🔧 **Protocolo de reparación WiFi:**\n1. **Reinicio del router:** Desconecta 30 segundos\n2. **Olvida la red:** Configuración &gt; Red &gt; WiFi &gt; Administrar redes conocidas\n3. **Actualiza drivers:** Administrador de dispositivos &gt; Adaptadores de red\n4. **Restablece TCP/IP:** Ejecuta como admin:\n   - `ipconfig /release`\n   - `ipconfig /flushdns`\n   - `ipconfig /renew`\n\n¿Se conecta pero no navega, o no detecta redes?',
    
    'pantalla azul': '💙 **ANÁLISIS DE PANTALLA AZUL (BSOD)**\n\n⚠️ **Información crítica necesaria:**\n¿Qué código de error aparece? (ej: SYSTEM_SERVICE_EXCEPTION, MEMORY_MANAGEMENT)\n\n🛠️ **Soluciones inmediatas:**\n1. **Modo seguro:** F8 al arrancar\n2. **Verificar memoria:** Windows Memory Diagnostic\n3. **Verificar disco:** `chkdsk /f /r`\n4. **Actualizar drivers críticos**\n5. **Restaurar sistema** a punto anterior\n\n¿Ocurre al hacer algo específico o aleatoriamente?',
    
    'no arranca': '🔌 **DIAGNÓSTICO DE ARRANQUE**\n\n🔍 **Verificaciones por orden:**\n1. **Alimentación:** ¿Luces LED encendidas?\n2. **Conexiones:** Cables bien conectados\n3. **RAM:** Quita y recoloca módulos\n4. **Batería CMOS:** Puede estar agotada\n5. **Disco duro:** ¿Se escucha girar?\n\n💡 **Test rápido:**\n- Mantén presionado botón encendido 30 seg (sin batería)\n- Conecta solo lo esencial\n- Prueba con un solo módulo RAM\n\n¿Qué luces, sonidos o mensajes aparecen?',
    
    'impresora': '🖨️ **CENTRO DE REPARACIÓN DE IMPRESORAS**\n\n📋 **Diagnóstico sistemático:**\n1. **Conexión física:** USB bien conectado o WiFi activo\n2. **Spooler de impresión:** services.msc &gt; Print Spooler &gt; Reiniciar\n3. **Drivers actualizados:** Desde web del fabricante\n4. **Cola de impresión:** Eliminar trabajos pendientes\n5. **Cabezales:** Limpieza desde software de impresora\n\n🔧 **Comandos útiles:**\n- `printui /s` (interfaz de impresoras)\n- Agregar impresora manualmente con IP\n\n¿Qué marca/modelo y qué error específico muestra?',
    
    'datos': '💾 **CENTRO DE RECUPERACIÓN DE DATOS**\n\n⚠️ **PROTOCOLO DE EMERGENCIA:**\n**¡IMPORTANTE!** NO escribas más en el disco afectado\n\n🛡️ **Métodos por gravedad:**\n\n**Nivel 1 - Archivos eliminados:**\n- Recuva (gratuito)\n- PhotoRec (avanzado)\n- Restaurar desde Papelera\n\n**Nivel 2 - Disco dañado:**\n- TestDisk (reparar particiones)\n- DMDE (profesional)\n- Clonado con ddrescue\n\n**Nivel 3 - Daño físico:**\n- Servicio profesional requerido\n- NO abrir el disco\n\n¿Qué tipo de archivos y cómo se perdieron?',
    
    'drivers': '🔧 **CENTRO DE ACTUALIZACIÓN DE DRIVERS**\n\n📋 **Métodos ordenados por efectividad:**\n\n**Método 1 - Automático:**\n1. Windows Update (Configuración &gt; Actualización)\n2. Administrador de dispositivos &gt; Clic derecho &gt; Actualizar\n\n**Método 2 - Manual:**\n1. Identificar hardware: `dxdiag` o `msinfo32`\n2. Descargar desde web oficial del fabricante\n3. Instalar como administrador\n\n**Método 3 - Problemático:**\n- Modo seguro para drivers conflictivos\n- Desinstalar driver actual primero\n- Usar "Restaurar sistema" si hay problemas\n\n¿Qué dispositivo específico necesita drivers?',
    
    'red': '🌐 **LABORATORIO DE REDES**\n\n🔍 **Diagnóstico de conectividad:**\n\n**Test básico:**\n```\nping google.com\nping 8.8.8.8\nipconfig /all\n```\n\n🛠️ **Reparación por pasos:**\n1. **Reiniciar adaptador:** Desactivar/Activar en Configuración\n2. **Renovar IP:** `ipconfig /release` → `ipconfig /renew`\n3. **Cambiar DNS:** 8.8.8.8 y 8.8.4.4 (Google)\n4. **Restablecer Winsock:** `netsh winsock reset`\n5. **Verificar firewall:** Temporalmente desactivar\n\n¿Tienes internet pero no cargan páginas específicas?',
    
    'actualizar': '🔄 **CENTRO DE ACTUALIZACIONES**\n\n⚙️ **Solución de problemas de Windows Update:**\n\n**Paso 1 - Herramientas automáticas:**\n- Configuración &gt; Solucionar problemas &gt; Windows Update\n- `sfc /scannow` (reparar archivos sistema)\n\n**Paso 2 - Manual:**\n```\nnet stop wuauserv\nnet stop cryptSvc\nnet stop bits\nnet stop msiserver\n```\n\n**Paso 3 - Limpiar cache:**\n- Eliminar contenido de `C:\\Windows\\SoftwareDistribution`\n- Reiniciar servicios\n\n**Paso 4 - Última opción:**\n- Asistente de actualización de Microsoft\n\n¿Qué código de error aparece exactamente?'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'es-ES';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(technicalResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    if (message.includes('hola') || message.includes('ayuda') || message.includes('problema')) {
      return '👋 **¡Perfecto!** Estoy aquí para resolver tu problema técnico.\n\n🔧 **Puedo ayudarte con:**\n• Virus y malware\n• Problemas de rendimiento\n• Conexión WiFi/Internet\n• Pantallazos azules\n• Problemas de arranque\n• Impresoras\n• Recuperación de datos\n• Actualización de drivers\n• Configuración de redes\n• Y mucho más...\n\n**¿Cuál es tu problema específico?** Mientras más detalles me proporciones, mejor podré diagnosticar y resolver el issue.';
    }

    if (message.includes('gracias')) {
      return '🎯 **¡De nada!** Recuerda que estoy disponible 24/7 para cualquier problema técnico.\n\n💡 **Tip profesional:** Mantén tu sistema actualizado y haz copias de seguridad regulares.\n\n¿Necesitas ayuda con algo más?';
    }

    if (message.includes('cita') || message.includes('visita') || message.includes('presencial')) {
      return '📅 **SERVICIO PRESENCIAL DISPONIBLE**\n\n🏠 **Ofrecemos:**\n• Reparación a domicilio\n• Diagnóstico presencial\n• Instalación de hardware\n• Configuración de redes\n• Mantenimiento preventivo\n\n📞 **Para agendar una cita:**\nUsa el botón "Hablar con el Asistente" para programar tu visita técnica.\n\n¿Prefieres que te visite o traes el equipo?';
    }

    return '🤖 **Entiendo tu consulta.** Para darte la solución más precisa, necesito más información:\n\n❓ **Por favor, especifica:**\n• ¿Es un problema de hardware o software?\n• ¿Cuándo empezó el problema?\n• ¿Qué mensajes de error aparecen?\n• ¿Qué estabas haciendo cuando ocurrió?\n\n💬 **También puedes:**\n• Enviar una foto del error\n• Usar el micrófono para describir el problema\n• Iniciar una videollamada para diagnóstico visual\n\n¡Mientras más detalles, mejor diagnóstico!';
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      
      // Text to speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.text.replace(/[🤖💙⚡🦠📶🔌🖨️💾🔧🌐🔄👋🎯📅❓💬✅🔍📋💡🛠️⚠️🛡️]/g, ''));
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const mediaMessage: Message = {
          id: Date.now().toString(),
          text: `He enviado una imagen: ${file.name}`,
          isUser: true,
          timestamp: new Date(),
          type: 'image',
          mediaUrl: e.target?.result as string
        };
        
        setMessages(prev => [...prev, mediaMessage]);
        
        setTimeout(() => {
          const aiResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: '📸 **ANÁLISIS DE IMAGEN COMPLETADO**\n\nHe analizado tu imagen. Veo el problema en pantalla. Basándome en lo que observo:\n\n🔍 **Diagnóstico visual:**\n• Puedo identificar mensajes de error\n• Estado de hardware visible\n• Configuraciones de pantalla\n\n💡 **Para un diagnóstico más preciso:**\nDescríbeme qué problema específico estás experimentando con lo que se ve en la imagen.\n\n¿Qué síntomas has notado además de lo que muestra la foto?',
            isUser: false,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiResponse]);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleVideoCall = () => {
    setIsVideoCall(!isVideoCall);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl h-[95vh] sm:h-[700px] flex flex-col overflow-hidden"
          >
            {/* Header - Optimizado para móvil */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <motion.div 
                    animate={{ rotate: isSpeaking ? 360 : 0 }}
                    transition={{ duration: 2, repeat: isSpeaking ? Infinity : 0 }}
                    className="bg-white/20 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <img 
                        src="https://i.postimg.cc/QF2MR9S1/logo.png" 
                        alt="PC Doctor AI"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl">PC Doctor AI</h3>
                    <div className="flex items-center text-blue-100 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      En línea • Técnico Virtual 24/7
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={toggleVideoCall}
                    className={`p-2 sm:p-3 rounded-full transition-all w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center ${isVideoCall ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'}`}
                  >
                    <i className={`ri-${isVideoCall ? 'phone-line' : 'video-line'} text-base sm:text-lg`}></i>
                  </button>
                  <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white transition-colors p-2 sm:p-3 hover:bg-white/10 rounded-full w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                  >
                    <i className="ri-close-line text-lg sm:text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Video Call Panel - Oculto en móvil cuando está activo */}
              {isVideoCall && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: window.innerWidth < 768 ? '100%' : '40%' }}
                  exit={{ width: 0 }}
                  className="bg-gray-900 flex flex-col items-center justify-center border-r border-gray-200 md:relative absolute inset-0 z-10"
                >
                  <div className="text-center text-white p-4">
                    <motion.div
                      animate={{ 
                        scale: isSpeaking ? [1, 1.1, 1] : 1,
                        rotate: isSpeaking ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto"
                    >
                      <img 
                        src="https://i.postimg.cc/QF2MR9S1/logo.png" 
                        alt="PC Doctor AI"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </motion.div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">PC Doctor AI</h4>
                    <p className="text-blue-300 text-sm">Técnico Virtual Especializado</p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center text-green-400">
                        <i className="ri-mic-line mr-2"></i>
                        <span className="text-sm">Audio activo</span>
                      </div>
                      <div className="flex items-center justify-center text-blue-400">
                        <i className="ri-camera-line mr-2"></i>
                        <span className="text-sm">Diagnóstico visual</span>
                      </div>
                    </div>
                    {/* Botón para cerrar video en móvil */}
                    <button
                      onClick={toggleVideoCall}
                      className="mt-6 md:hidden bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      <i className="ri-close-line mr-2"></i>
                      Cerrar Video
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Chat Panel */}
              <div className={`flex-1 flex flex-col ${isVideoCall && window.innerWidth < 768 ? 'hidden' : ''}`}>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-2xl ${
                          message.isUser
                            ? 'bg-blue-600 text-white rounded-br-md'
                            : 'bg-white text-gray-800 rounded-bl-md shadow-md border'
                        }`}
                      >
                        {message.type === 'image' && message.mediaUrl && (
                          <img 
                            src={message.mediaUrl} 
                            alt="Uploaded" 
                            className="max-w-full h-auto rounded-lg mb-2"
                          />
                        )}
                        <div 
                          className="text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ 
                            __html: message.text
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded text-xs">$1</code>')
                          }}
                        />
                        <p className={`text-xs mt-2 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white p-3 sm:p-4 rounded-2xl rounded-bl-md shadow-md border">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600">PC Doctor AI está analizando...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area - Optimizado para móvil */}
                <div className="p-3 sm:p-6 bg-white border-t border-gray-200">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center"
                      title="Enviar imagen"
                    >
                      <i className="ri-image-line text-gray-600 text-sm sm:text-base"></i>
                    </button>
                    <button
                      onClick={startListening}
                      className={`p-2 sm:p-3 rounded-full transition-all w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center ${
                        isListening 
                          ? 'bg-red-500 text-white animate-pulse' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                      title="Reconocimiento de voz"
                    >
                      <i className="ri-mic-line text-sm sm:text-base"></i>
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Describe tu problema técnico..."
                        className="w-full border border-gray-300 rounded-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim()}
                        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
                      >
                        <i className="ri-send-plane-line text-xs sm:text-sm"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="hidden sm:block">Presiona Enter para enviar • Soporte técnico 24/7</span>
                    <span className="sm:hidden">Soporte técnico 24/7</span>
                    {isSpeaking && (
                      <div className="flex items-center text-blue-600">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="w-2 h-2 bg-blue-600 rounded-full mr-2"
                        />
                        <span className="hidden sm:block">Reproduciendo respuesta...</span>
                        <span className="sm:hidden">Hablando...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
