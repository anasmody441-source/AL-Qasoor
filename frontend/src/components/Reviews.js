import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { reviews } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-charcoal-light to-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            {isArabic ? 'آراء العملاء' : 'Customer Reviews'}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 text-xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < 4 ? 'text-golden fill-golden' : 'text-golden/40'}`}
                />
              ))}
            </div>
            <span className="text-cream font-bold">4.2</span>
            <span className="text-cream/70">
              ({isArabic ? '85 تقييم' : '85 reviews'})
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map(review => (
            <Card
              key={review.id}
              className="bg-charcoal-light border-golden/20 hover:border-golden/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6" dir={isArabic ? 'rtl' : 'ltr'}>
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-golden fill-golden' : 'text-golden/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-cream/90 mb-4 leading-relaxed">
                  {isArabic ? review.comment : review.commentEn}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-golden/20">
                  <span className="font-bold text-golden">{review.name}</span>
                  <span className="text-cream/60 text-sm">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;