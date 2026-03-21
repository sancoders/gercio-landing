export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <span className="font-bold text-white">Gercio</span>
            <span className="text-gray-600 text-sm">— gercio.site</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Cómo funciona
            </a>
            <a href="#precios" className="hover:text-white transition-colors">
              Precios
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href="mailto:contacto@gercio.site"
              className="hover:text-white transition-colors"
            >
              contacto@gercio.site
            </a>
          </div>

          <div className="text-sm text-gray-600">
            🇦🇷 Hecho en Argentina · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
