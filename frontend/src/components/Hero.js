import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { isArabic } = useLanguage();

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-golden/20 via-transparent to-charcoal"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-golden/20 backdrop-blur-sm border border-golden/30 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < 4 ? 'text-golden' : 'text-golden/40'}>★</span>
              ))}
            </div>
            <span className="text-cream font-medium">
              4.2 {isArabic ? '(' : '('}{isArabic ? '85 تقييم' : '85 reviews'})
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold text-cream leading-tight"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {isArabic ? (
              <>
                <span className="text-golden">الطعم الأصيل</span>
                <br />
                للبروستد
              </>
            ) : (
              <>
                <span className="text-golden">Authentic Broasted</span>
                <br />
                Done Right
              </>
            )}
          </h1>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {isArabic 
              ? 'دجاج بروستد طازج ولذيذ يقدم مع مكونات عالية الجودة وأسعار منافسة'
              : 'Fresh, delicious broasted chicken served with premium ingredients and competitive prices'
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToMenu}
              className="bg-golden hover:bg-golden/90 text-charcoal font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-golden/50"
            >
              {isArabic ? 'شاهد القائمة' : 'View Menu'}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-golden text-golden hover:bg-golden hover:text-charcoal font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              {isArabic ? 'اطلب الآن' : 'Order Takeaway'}
            </Button>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 text-cream/80">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{isArabic ? 'مفتوح الآن - يغلق عند 12:00 صباحاً' : 'Open Now - Closes at 12:00 AM'}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-golden" />
        </div>
      </div>
    </section>
  );
};

export default Hero;