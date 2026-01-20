import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { menuItems, categories } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

const Menu = () => {
  const { isArabic } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            {isArabic ? 'قائمة الطعام' : 'Our Menu'}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
          <p className="text-xl text-cream/80">
            {isArabic
              ? 'اكتشف أطباقنا اللذيذة'
              : 'Discover our delicious dishes'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`
                ${selectedCategory === category.id
                  ? 'bg-golden text-charcoal hover:bg-golden/90'
                  : 'border-golden/50 text-golden hover:bg-golden/10 hover:border-golden'
                }
                transition-all duration-300
              `}
            >
              {isArabic ? category.nameAr : category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <Card
              key={item.id}
              className="bg-charcoal-light border-golden/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={isArabic ? item.nameAr : item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-golden text-charcoal border-0">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {isArabic ? 'مميز' : 'Popular'}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4" dir={isArabic ? 'rtl' : 'ltr'}>
                <h3 className="text-xl font-bold text-cream mb-2">
                  {isArabic ? item.nameAr : item.name}
                </h3>
                <p className="text-cream/70 text-sm mb-4 line-clamp-2">
                  {isArabic ? item.descriptionAr : item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-golden">
                    {item.price.toFixed(2)} {isArabic ? 'ر.س' : 'SAR'}
                  </span>
                  <Button
                    onClick={() => addToCart(item)}
                    size="sm"
                    className="bg-golden hover:bg-golden/90 text-charcoal font-bold transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {isArabic ? 'إضافة' : 'Add'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;