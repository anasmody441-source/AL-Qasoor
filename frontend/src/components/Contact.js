import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { restaurantInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success(isArabic ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-charcoal to-charcoal-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6" dir={isArabic ? 'rtl' : 'ltr'}>
            <Card className="bg-charcoal-light border-golden/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {isArabic ? 'الهاتف' : 'Phone'}
                    </h3>
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-golden hover:text-golden/80 transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-charcoal-light border-golden/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {isArabic ? 'العنوان' : 'Address'}
                    </h3>
                    <p className="text-cream/80">
                      {isArabic ? restaurantInfo.addressAr : restaurantInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-charcoal-light border-golden/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {isArabic ? 'ساعات العمل' : 'Hours'}
                    </h3>
                    <p className="text-cream/80">
                      {isArabic ? 'يومياً حتى 12:00 صباحاً' : 'Daily until 12:00 AM'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 border-2 border-golden/20">
              <iframe
                src={restaurantInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-charcoal-light border-golden/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" dir={isArabic ? 'rtl' : 'ltr'}>
                <div>
                  <label className="block text-cream mb-2 font-medium">
                    {isArabic ? 'الاسم' : 'Name'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-golden/30 text-cream focus:border-golden"
                    placeholder={isArabic ? 'ادخل اسمك' : 'Enter your name'}
                  />
                </div>

                <div>
                  <label className="block text-cream mb-2 font-medium">
                    {isArabic ? 'رقم الهاتف' : 'Phone'}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-charcoal border-golden/30 text-cream focus:border-golden"
                    placeholder={isArabic ? 'ادخل رقم هاتفك' : 'Enter your phone'}
                  />
                </div>

                <div>
                  <label className="block text-cream mb-2 font-medium">
                    {isArabic ? 'الرسالة' : 'Message'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-charcoal border-golden/30 text-cream focus:border-golden resize-none"
                    placeholder={isArabic ? 'اكتب رسالتك' : 'Write your message'}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-golden hover:bg-golden/90 text-charcoal font-bold py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  {isArabic ? 'إرسال' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;