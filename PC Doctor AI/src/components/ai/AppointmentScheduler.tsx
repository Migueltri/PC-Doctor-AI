
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppointmentSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  description: string;
}

export default function AppointmentScheduler({ isOpen, onClose }: AppointmentSchedulerProps) {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const services = [
    { id: 'diagnostico', name: 'Diagnóstico Completo', duration: '1 hora', price: '30€' },
    { id: 'reparacion', name: 'Reparación General', duration: '2-3 horas', price: '50€' },
    { id: 'virus', name: 'Eliminación de Virus', duration: '1-2 horas', price: '40€' },
    { id: 'datos', name: 'Recuperación de Datos', duration: '2-4 horas', price: '80€' },
    { id: 'instalacion', name: 'Instalación de Software', duration: '1 hora', price: '25€' },
    { id: 'mantenimiento', name: 'Mantenimiento Preventivo', duration: '1.5 horas', price: '35€' },
    { id: 'red', name: 'Configuración de Red', duration: '1-2 horas', price: '45€' },
    { id: 'hardware', name: 'Instalación de Hardware', duration: '1-2 horas', price: '40€' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitAppointment = async () => {
    setIsSubmitting(true);
    
    // Simular envío de datos
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const resetForm = () => {
    setStep(1);
    setAppointmentData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      description: ''
    });
    setIsConfirmed(false);
    onClose();
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <i className="ri-calendar-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Agendar Cita Técnica</h3>
                    <p className="text-blue-100 text-sm">Servicio presencial especializado</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-100">Paso {step} de 4</span>
                  <span className="text-sm text-blue-100">{Math.round((step / 4) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: '25%' }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    className="bg-white h-2 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {!isConfirmed ? (
                <>
                  {/* Step 1: Información Personal */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Información Personal</h4>
                        <p className="text-gray-600">Necesitamos tus datos para contactarte</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            value={appointmentData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tu nombre completo"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico *
                          </label>
                          <input
                            type="email"
                            value={appointmentData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="tu@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            value={appointmentData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="+34 600 000 000"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Seleccionar Servicio */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Tipo de Servicio</h4>
                        <p className="text-gray-600">¿Qué necesitas que revisemos?</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleInputChange('service', service.id)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              appointmentData.service === service.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <h5 className="font-semibold text-gray-800 mb-1">{service.name}</h5>
                            <p className="text-sm text-gray-600 mb-2">Duración: {service.duration}</p>
                            <p className="text-lg font-bold text-blue-600">{service.price}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Descripción del problema (opcional)
                        </label>
                        <textarea
                          value={appointmentData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          rows={3}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Describe brevemente el problema que tienes..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Fecha y Hora */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Fecha y Hora</h4>
                        <p className="text-gray-600">Selecciona cuándo te conviene</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha *
                          </label>
                          <input
                            type="date"
                            value={appointmentData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            min={getMinDate()}
                            max={getMaxDate()}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hora *
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => handleInputChange('time', time)}
                                className={`p-2 text-sm rounded-lg border transition-all ${
                                  appointmentData.time === time
                                    ? 'border-blue-500 bg-blue-500 text-white'
                                    : 'border-gray-300 hover:border-blue-300'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <i className="ri-information-line text-blue-600 mt-1 mr-3"></i>
                          <div className="text-sm text-blue-800">
                            <p className="font-semibold mb-1">Información importante:</p>
                            <ul className="space-y-1">
                              <li>• Servicio disponible de lunes a viernes</li>
                              <li>• Confirmación por email y SMS</li>
                              <li>• Posibilidad de servicio a domicilio</li>
                              <li>• Diagnóstico gratuito si contratas reparación</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Confirmación */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Confirmar Cita</h4>
                        <p className="text-gray-600">Revisa los datos antes de confirmar</p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Datos Personales</h5>
                            <p className="text-sm text-gray-600">Nombre: {appointmentData.name}</p>
                            <p className="text-sm text-gray-600">Email: {appointmentData.email}</p>
                            <p className="text-sm text-gray-600">Teléfono: {appointmentData.phone}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Cita</h5>
                            <p className="text-sm text-gray-600">
                              Servicio: {services.find(s => s.id === appointmentData.service)?.name}
                            </p>
                            <p className="text-sm text-gray-600">Fecha: {appointmentData.date}</p>
                            <p className="text-sm text-gray-600">Hora: {appointmentData.time}</p>
                          </div>
                        </div>
                        
                        {appointmentData.description && (
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Descripción</h5>
                            <p className="text-sm text-gray-600">{appointmentData.description}</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <i className="ri-shield-check-line text-blue-600 text-xl mr-3"></i>
                          <div className="text-sm text-blue-800">
                            <p className="font-semibold">Garantía de servicio</p>
                            <p>Todos nuestros servicios incluyen garantía y soporte post-reparación</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={prevStep}
                      disabled={step === 1}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <i className="ri-arrow-left-line mr-2"></i>
                      Anterior
                    </button>

                    {step < 4 ? (
                      <button
                        onClick={nextStep}
                        disabled={
                          (step === 1 && (!appointmentData.name || !appointmentData.email || !appointmentData.phone)) ||
                          (step === 2 && !appointmentData.service) ||
                          (step === 3 && (!appointmentData.date || !appointmentData.time))
                        }
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                      >
                        Siguiente
                        <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    ) : (
                      <button
                        onClick={submitAppointment}
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="ri-loader-4-line animate-spin mr-2"></i>
                            Confirmando...
                          </>
                        ) : (
                          <>
                            <i className="ri-check-line mr-2"></i>
                            Confirmar Cita
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Confirmation Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <i className="ri-check-line text-3xl text-green-600"></i>
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">¡Cita Confirmada!</h4>
                  <p className="text-gray-600 mb-6">
                    Hemos enviado los detalles de tu cita a <strong>{appointmentData.email}</strong>
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h5 className="font-semibold text-green-800 mb-3">Próximos pasos:</h5>
                    <ul className="text-sm text-green-700 space-y-2 text-left">
                      <li className="flex items-center">
                        <i className="ri-mail-line mr-2"></i>
                        Recibirás un email de confirmación
                      </li>
                      <li className="flex items-center">
                        <i className="ri-phone-line mr-2"></i>
                        Te llamaremos 1 día antes para confirmar
                      </li>
                      <li className="flex items-center">
                        <i className="ri-calendar-line mr-2"></i>
                        Puedes reagendar hasta 24h antes
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-home-line mr-2"></i>
                    Volver al inicio
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
