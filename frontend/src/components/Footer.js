import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { restaurantInfo } from '../mock';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  const { isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-golden/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div dir={isArabic ? 'rtl' : 'ltr'}>
            <h3 className="text-2xl font-bold text-golden mb-4">
              {isArabic ? restaurantInfo.nameAr : restaurantInfo.name}
            </h3>
            <p className="text-cream/70 leading-relaxed">
              {isArabic
                ? 'أفضل بروستد في المنطقة'
                : 'The Best Broasted in Town'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div dir={isArabic ? 'rtl' : 'ltr'}>
            <h4 className="text-lg font-bold text-cream mb-4">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-cream/70 hover:text-golden transition-colors">
                  {isArabic ? 'القائمة' : 'Menu'}
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream/70 hover:text-golden transition-colors">
                  {isArabic ? 'من نحن' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/70 hover:text-golden transition-colors">
                  {isArabic ? 'اتصل بنا' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div dir={isArabic ? 'rtl' : 'ltr'}>
            <h4 className="text-lg font-bold text-cream mb-4">
              {isArabic ? 'تواصل معنا' : 'Connect With Us'}
            </h4>
            <div className="flex items-center gap-2 text-cream/70 mb-4">
              <Phone className="h-4 w-4" />
              <a href={`tel:${restaurantInfo.phone}`} className="hover:text-golden transition-colors">
                {restaurantInfo.phone}
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center text-golden hover:bg-golden hover:text-charcoal transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center text-golden hover:bg-golden hover:text-charcoal transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center text-golden hover:bg-golden hover:text-charcoal transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-golden/20 text-center">
          <p className="text-cream/60">
            &copy; {currentYear} {isArabic ? restaurantInfo.nameAr : restaurantInfo.name}.{' '}
            {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;