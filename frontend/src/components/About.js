import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Award, Clock, DollarSign, Users } from 'lucide-react';

const About = () => {
  const { isArabic } = useLanguage();

  const features = [
    {
      icon: Award,
      title: isArabic ? 'جودة عالية' : 'Premium Quality',
      titleAr: 'جودة عالية',
      description: isArabic ? 'مكونات طازجة يومياً' : 'Fresh ingredients daily',
      descriptionAr: 'مكونات طازجة يومياً'
    },
    {
      icon: Clock,
      title: isArabic ? 'خدمة سريعة' : 'Fast Service',
      titleAr: 'خدمة سريعة',
      description: isArabic ? 'طلبك جاهز في دقائق' : 'Your order ready in minutes',
      descriptionAr: 'طلبك جاهز في دقائق'
    },
    {
      icon: DollarSign,
      title: isArabic ? 'أسعار مناسبة' : 'Great Value',
      titleAr: 'أسعار مناسبة',
      description: isArabic ? 'أسعار تنافسية للجميع' : 'Competitive prices for all',
      descriptionAr: 'أسعار تنافسية للجميع'
    },
    {
      icon: Users,
      title: isArabic ? 'عائلي' : 'Family Friendly',
      titleAr: 'عائلي',
      description: isArabic ? 'مكان مثالي للعائلات' : 'Perfect for families',
      descriptionAr: 'مكان مثالي للعائلات'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-charcoal to-charcoal-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" dir={isArabic ? 'rtl' : 'ltr'}>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
              {isArabic ? 'من نحن' : 'About Us'}
            </h2>
            <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? 'بروستد القصور هو وجهتك المفضلة للحصول على ألذ وأطيب دجاج بروستد في المنطقة. نحن نفتخر بتقديم أطباق طازجة ولذيذة مع الحفاظ على أعلى معايير الجودة والنظافة. مطعمنا المحلي المحبوب يقدم مجموعة متنوعة من الأطباق الشهية بأسعار معقولة، مما يجعله الخيار الأمثل للعائلات والأصدقاء.'
                : 'Broasted Al-Qasoor is your go-to destination for the most delicious and flavorful broasted chicken in the area. We pride ourselves on serving fresh, tasty dishes while maintaining the highest standards of quality and cleanliness. Our beloved local restaurant offers a diverse range of appetizing dishes at reasonable prices, making it the perfect choice for families and friends.'
              }
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-charcoal-light border-golden/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/20 rounded-full mb-4 group-hover:bg-golden/30 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-golden" />
                    </div>
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-cream/70">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;