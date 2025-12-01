'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: string;
  color: 'green' | 'yellow' | 'blue' | 'red';
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  metrics,
  color,
  delay = 0 
}) => {
  const colorClasses = {
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
      gradient: 'from-green-50 to-white'
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      border: 'border-yellow-200',
      gradient: 'from-yellow-50 to-white'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-50 to-white'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      border: 'border-red-200',
      gradient: 'from-red-50 to-white'
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
    >
      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={colors.text} size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {metrics && (
        <div className={`text-sm font-medium ${colors.text}`}>
          {metrics}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;