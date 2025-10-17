
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://readdy.ai/api/form/d3godn52v2m9odki671g', {
        method: 'POST',
        body: new URLSearchParams(formData as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
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
    <section className="py-20 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mantente Actualizado
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Suscríbete a nuestro boletín y recibe las últimas noticias, consejos y ofertas exclusivas directamente en tu bandeja de entrada.
          </p>

          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            data-readdy-form
            id="newsletter-form"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isSubmitting || !email.trim()}
                className="bg-white text-teal-600 hover:bg-gray-100"
              >
                {isSubmitting ? 'Enviando...' : 'Suscribirse'}
              </Button>
            </div>

            {submitStatus === 'success' && (
              <p className="mt-4 text-teal-100">
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-200">
                Hubo un error al procesar tu suscripción. Por favor, inténtalo de nuevo.
              </p>
            )}
          </form>

          <p className="text-sm text-teal-200 mt-4">
            No enviamos spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}
