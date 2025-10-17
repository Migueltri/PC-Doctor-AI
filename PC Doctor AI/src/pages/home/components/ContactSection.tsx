
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3godn52v2m9odki6720', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          servicio: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para transformar tu negocio? Ponte en contacto con nosotros y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-map-pin-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">C. del Ferial, 48, 19002 Guadalajara</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-phone-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-mail-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@misitio.com</p>
                </div>
              </div>

              <li className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                pcdoctorai@gmail.com
              </li>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-full mr-4 flex-shrink-0">
                  <i className="ri-time-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horario</h4>
                  <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4849694327!2d-3.1639902!3d40.6319754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c8b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sC.%20del%20Ferial%2C%2048%2C%2019002%20Guadalajara!5e0!3m2!1sen!2ses!4v1234567890123"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl"
              data-readdy-form
              id="contact-form"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  disabled={isSubmitting}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="consultoria">Consultoría Estratégica</option>
                  <option value="desarrollo">Desarrollo Digital</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-vertical"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.mensaje.length}/500 caracteres
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || !formData.nombre || !formData.email || !formData.mensaje}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center">
                  ¡Mensaje enviado correctamente! Te contactaremos pronto.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
