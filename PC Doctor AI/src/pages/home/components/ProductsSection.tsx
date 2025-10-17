
import Button from '../../../components/base/Button';

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Sistema de Gestión Empresarial',
      price: '€299/mes',
      image: 'https://readdy.ai/api/search-image?query=Modern%20business%20management%20dashboard%20interface%20on%20computer%20screen%2C%20clean%20professional%20design%20with%20charts%20and%20analytics%2C%20corporate%20office%20environment%2C%20sleek%20technology%20setup%2C%20professional%20lighting%2C%20business%20productivity%20tools%2C%20contemporary%20workspace&width=400&height=300&seq=product1&orientation=landscape',
      description: 'Plataforma integral para gestionar todos los aspectos de tu negocio desde un solo lugar.',
      features: ['Gestión de inventario', 'CRM integrado', 'Reportes avanzados', 'Soporte 24/7'],
      popular: true
    },
    {
      id: 2,
      name: 'Solución E-commerce',
      price: '€199/mes',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20platform%20interface%20showing%20online%20store%20management%2C%20product%20catalog%20display%2C%20modern%20web%20design%2C%20shopping%20cart%20functionality%2C%20clean%20business%20environment%2C%20digital%20commerce%20solution%2C%20professional%20setup&width=400&height=300&seq=product2&orientation=landscape',
      description: 'Tienda online completa con todas las herramientas necesarias para vender en línea.',
      features: ['Catálogo de productos', 'Pagos seguros', 'Gestión de pedidos', 'Marketing integrado'],
      popular: false
    },
    {
      id: 3,
      name: 'App Móvil Personalizada',
      price: '€499/mes',
      image: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20app%20development%20workspace%2C%20smartphone%20displaying%20custom%20business%20application%2C%20modern%20office%20environment%2C%20mobile%20technology%2C%20app%20design%20interface%2C%20professional%20development%20setup%2C%20clean%20contemporary%20style&width=400&height=300&seq=product3&orientation=landscape',
      description: 'Aplicación móvil diseñada específicamente para las necesidades de tu empresa.',
      features: ['Diseño personalizado', 'Multiplataforma', 'Push notifications', 'Analytics integrado'],
      popular: false
    }
  ];

  return (
    <section id="productos" className="py-20 bg-white" data-product-shop>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras soluciones digitales innovadoras diseñadas para potenciar tu negocio y mejorar tu productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative" data-product-shop>
              {product.popular && (
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Más Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-teal-600">{product.price}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-teal-600 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={product.popular ? 'primary' : 'outline'}
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
