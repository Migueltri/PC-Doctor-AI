
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-100">Servicio Técnico Especializado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: '"Poppins", sans-serif' }}>
              <span className="text-white">Soluciones</span>
              <span className="block text-blue-300 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Tecnológicas
              </span>
              <span className="text-white">Profesionales</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90 leading-relaxed text-blue-100">
              Especialistas en reparación, mantenimiento y optimización de equipos informáticos. Tu aliado tecnológico de confianza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <i className="ri-tools-line mr-2"></i>
                Solicitar Diagnóstico
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="ri-eye-line mr-2"></i>
                Conocer Servicios
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <i className="ri-shield-check-line text-blue-300 text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Garantía</div>
                  <div className="text-blue-200 text-sm">En todos los servicios</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-emerald-300 text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Rapidez</div>
                  <div className="text-blue-200 text-sm">Diagnóstico inmediato</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <i className="ri-user-heart-line text-purple-300 text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-semibold">Confianza</div>
                  <div className="text-blue-200 text-sm">Atención personalizada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20computer%20technician%20working%20on%20modern%20desktop%20computer%20repair%20in%20clean%20high-tech%20workshop%20environment%2C%20advanced%20diagnostic%20equipment%2C%20blue%20LED%20lighting%2C%20professional%20tools%2C%20circuit%20boards%2C%20modern%20technology%20repair%20station%2C%20expert%20hands%20working%20with%20precision%2C%20high-quality%20professional%20photography%2C%20clean%20minimalist%20background%20with%20subtle%20technology%20elements&width=600&height=700&seq=hero-tech-pro&orientation=portrait"
                alt="PC Doctor AI - Servicio Técnico Profesional"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float border border-blue-400/30">
              <i className="ri-cpu-line text-3xl text-blue-300"></i>
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float border border-emerald-400/30" style={{ animationDelay: '1s' }}>
              <i className="ri-shield-check-line text-2xl text-emerald-300"></i>
            </div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float border border-purple-400/30" style={{ animationDelay: '2s' }}>
              <i className="ri-tools-line text-xl text-purple-300"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
