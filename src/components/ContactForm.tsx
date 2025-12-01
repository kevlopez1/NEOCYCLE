'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, BarChart3, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  phone: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', company: '', phone: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.company && formData.phone;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
    >
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
          <p className="text-gray-600">
            Nos contactaremos con usted dentro de las 48 horas para programar su auditoría gratuita.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Industria Alimentaria S.A."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                aria-required="true"
                disabled={isSubmitting}
                pattern="[+]?[0-9\s\-\(\)]+"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="+591 700 00000"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Procesando...
                </>
              ) : (
                <>
                  Auditar mi Planta
                  <ArrowRight className="ml-2" size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="mr-2 text-green-600" size={16} />
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="mr-2 text-green-600" size={16} />
                <span>Análisis en 48h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 text-green-600" size={16} />
                <span>Sin Compromiso</span>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ContactForm;