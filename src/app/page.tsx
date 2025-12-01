'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  TrendingDown,
  Zap,
  Globe,
  CheckCircle,
  BarChart3,
  Factory,
  Leaf,
  DollarSign,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Sun,
  Package,
  CreditCard
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
// comentario
const NeoCycleLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleFormSubmit = useCallback((data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  }, []);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => [
    { href: '#soluciones', text: 'Soluciones' },
    { href: '#tecnologia', text: 'Tecnología' },
    { href: '#exportacion', text: 'Exportación' },
    { href: '#contacto', text: 'Contacto' }
  ], []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Neo<span className="text-green-600">Cycle</span></h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.text}
                </a>
              ))}
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Solicitar Auditoría Gratuita
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {item.text}
                  </a>
                ))}
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Solicitar Auditoría Gratuita
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transforme sus <span className="text-green-600">Residuos Industriales</span> en Flujo de Caja y Energía
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                El sistema operativo de logística inversa para la agroindustria boliviana.
                Gestión de residuos, eficiencia energética y acceso a mercados internacionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center">
                  Empezar Ahora
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium flex items-center justify-center">
                  Ver Cómo Funciona
                  <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Package className="text-green-600 mr-2" size={20} />
                      <span className="text-sm font-medium">Biomasa</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2,450t</div>
                    <div className="text-xs text-gray-500">Procesada</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Sun className="text-yellow-500 mr-2" size={20} />
                      <span className="text-sm font-medium">Energía</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1.2MW</div>
                    <div className="text-xs text-gray-500">Generada</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <DollarSign className="text-green-600 mr-2" size={20} />
                      <span className="text-sm font-medium">Ingresos</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">$450k</div>
                    <div className="text-xs text-gray-500">Optimizados</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Globe className="text-blue-600 mr-2" size={20} />
                      <span className="text-sm font-medium">Exportación</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-xs text-gray-500">Países</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Su Fábrica está <span className="text-red-600">Perdiendo Dinero</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identificamos tres áreas críticas donde las plantas agroindustriales bolivianas están dejando escapar valor significativo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residuos Costosos</h3>
              <p className="text-gray-600 mb-4">
                Pagar por eliminar biomasa que tiene valor real en el mercado. Sus desechos orgánicos son un activo sin explotar.
              </p>
              <div className="text-sm text-red-600 font-medium">
                Pérdida estimada: $50k - $200k/año
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ineficiencia Energética</h3>
              <p className="text-gray-600 mb-4">
                Costos de electricidad que destruyen márgenes. La volatilidad energética impacta directamente su rentabilidad.
              </p>
              <div className="text-sm text-yellow-600 font-medium">
                Sobrecosto: 30-40% sobre óptimo
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Burocracia de Exportación</h3>
              <p className="text-gray-600 mb-4">
                Falta de certificaciones y trazabilidad para vender en mercados internacionales que pagan premium.
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Oportunidad perdida: +25% valor
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section id="soluciones" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              El <span className="text-green-600">Ecosistema NeoCycle</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tres motores integrados que transforman su operación en un centro de generación de valor
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200 h-full">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Package className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Biomasa</h3>
                <p className="text-gray-600 mb-6">
                  Convertimos sus desechos orgánicos en ingresos conectándolo con compradores verificados.
                  Arbitraje de residuos con logística optimizada.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Identificación y valorización de residuos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Conexión con red de compradores industriales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Logística de recolección y transporte</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-200 h-full">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                  <Sun className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Infraestructura Solar</h3>
                <p className="text-gray-600 mb-6">
                  Reduzca su factura eléctrica sin inversión inicial. Modelo PPA (Power Purchase Agreement)
                  con garantía de ahorro.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Instalación sin costo inicial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Ahorro garantizado del 20-40%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Mantenimiento y monitoreo incluido</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 h-full">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Export & Liquidez</h3>
                <p className="text-gray-600 mb-6">
                  Pagos internacionales rápidos y certificaciones de trazabilidad para exportar a Europa
                  y mercados premium.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Certificaciones ESG y de sostenibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Trazabilidad blockchain de productos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Financiamiento de exportación y pagos</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prueba Social */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                +10,000
              </div>
              <div className="text-lg text-gray-300">
                Toneladas Gestionadas
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                35%
              </div>
              <div className="text-lg text-gray-300">
                Eficiencia Energética Garantizada
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                100%
              </div>
              <div className="text-lg text-gray-300">
                Certificación ESG
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para <span className="text-green-600">Optimizar</span> su Planta?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deje de tirar dinero a la basura. Hable con un ingeniero de soluciones hoy y
              descubra el potencial oculto en su operación.
            </p>
          </motion.div>

          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Neo<span className="text-green-400">Cycle</span></h3>
              <p className="text-gray-400">
                Sistema Operativo de Recursos para la agroindustria boliviana
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Gestión de Biomasa</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Energía Solar</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Exportación</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Certificaciones</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NeoCycle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NeoCycleLanding;