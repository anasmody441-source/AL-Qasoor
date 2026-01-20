import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { popularTimes, galleryImages } from '../mock';
import { Card, CardContent } from './ui/card';

const Gallery = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="gallery" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            {isArabic ? 'معرض الصور' : 'Gallery'}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Popular Times */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-charcoal-light border-golden/20">
            <CardContent className="p-8" dir={isArabic ? 'rtl' : 'ltr'}>
              <h3 className="text-2xl font-bold text-cream mb-6 text-center">
                {isArabic ? 'أوقات الذروة' : 'Popular Times'}
              </h3>
              <div className="space-y-4">
                {popularTimes.map((time, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-cream/80">
                      <span>{time.hour}</span>
                      <span>{time.busy}% {isArabic ? 'مزدحم' : 'busy'}</span>
                    </div>
                    <div className="w-full bg-charcoal rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          time.busy > 70
                            ? 'bg-red-500'
                            : time.busy > 40
                            ? 'bg-golden'
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${time.busy}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-cream/60 mt-6 text-sm">
                {isArabic
                  ? 'أوقات الذروة تتراوح عادة بين 6 مساءً و 12 صباحاً'
                  : 'Peak hours are usually between 6 PM and 12 AM'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;