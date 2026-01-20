// Mock data for Al-Qasoor Broasted Restaurant

export const menuItems = [
  {
    id: '1',
    name: 'Broasted Chicken',
    nameAr: 'دجاج بروستد',
    description: 'Golden crispy broasted chicken served with garlic sauce',
    descriptionAr: 'دجاج بروستد ذهبي مقرمش يقدم مع صلصة الثوم',
    price: 25.00,
    category: 'broasted',
    image: 'https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg',
    popular: true
  },
  {
    id: '2',
    name: 'Family Broasted Meal',
    nameAr: 'وجبة بروستد عائلية',
    description: 'Full chicken with fries, coleslaw and drinks',
    descriptionAr: 'دجاجة كاملة مع بطاطس، كول سلو ومشروبات',
    price: 45.00,
    category: 'broasted',
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
    popular: true
  },
  {
    id: '3',
    name: 'Roasted Chicken',
    nameAr: 'دجاج مشوي',
    description: 'Tender roasted chicken with herbs and spices',
    descriptionAr: 'دجاج مشوي طري بالأعشاب والتوابل',
    price: 30.00,
    category: 'roasted',
    image: 'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg',
    popular: false
  },
  {
    id: '4',
    name: 'Hummus with Yogurt',
    nameAr: 'حمص باللبن',
    description: 'Creamy hummus topped with yogurt',
    descriptionAr: 'حمص كريمي مغطى باللبن',
    price: 8.00,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/29935507/pexels-photo-29935507.jpeg',
    popular: true
  },
  {
    id: '5',
    name: 'Sausages',
    nameAr: 'نقانق',
    description: 'Grilled sausages with spices',
    descriptionAr: 'نقانق مشوية بالتوابل',
    price: 12.00,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/4181567/pexels-photo-4181567.jpeg',
    popular: false
  },
  {
    id: '6',
    name: 'Falafel',
    nameAr: 'فلافل',
    description: 'Crispy falafel served with tahini sauce',
    descriptionAr: 'فلافل مقرمشة تقدم مع صلصة الطحينة',
    price: 10.00,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    popular: true
  },
  {
    id: '7',
    name: 'Broasted Wings',
    nameAr: 'أجنحة بروستد',
    description: 'Spicy broasted chicken wings',
    descriptionAr: 'أجنحة دجاج بروستد حارة',
    price: 18.00,
    category: 'broasted',
    image: 'https://images.pexels.com/photos/32177596/pexels-photo-32177596.jpeg',
    popular: false
  },
  {
    id: '8',
    name: 'Grilled Chicken Platter',
    nameAr: 'صحن دجاج مشوي',
    description: 'Grilled chicken with rice and salad',
    descriptionAr: 'دجاج مشوي مع أرز وسلطة',
    price: 28.00,
    category: 'roasted',
    image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',
    popular: true
  }
];

export const categories = [
  { id: 'all', name: 'All Items', nameAr: 'جميع الأصناف' },
  { id: 'broasted', name: 'Broasted', nameAr: 'بروستد' },
  { id: 'roasted', name: 'Roasted', nameAr: 'مشوي' },
  { id: 'appetizers', name: 'Appetizers', nameAr: 'المقبلات' }
];

export const reviews = [
  {
    id: '1',
    name: 'أحمد محمد',
    rating: 5,
    comment: 'الطعم ممتاز والنظافة عالية، أسعار مناسبة جداً',
    commentEn: 'Excellent taste and high cleanliness, very reasonable prices',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'فاطمة علي',
    rating: 4,
    comment: 'دجاج بروستد لذيذ وخدمة سريعة',
    commentEn: 'Delicious broasted chicken and fast service',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'خالد سعيد',
    rating: 5,
    comment: 'أفضل بروستد في المنطقة بدون منافس',
    commentEn: 'Best broasted in the area without competition',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'سارة حسن',
    rating: 4,
    comment: 'مطعم نظيف وطعام طازج، ننصح به',
    commentEn: 'Clean restaurant and fresh food, highly recommended',
    date: '1 week ago'
  }
];

export const galleryImages = [
  'https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg',
  'https://images.unsplash.com/photo-1550367363-ea12860cc124',
  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.unsplash.com/photo-1502998070258-dc1338445ac2',
  'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg'
];

export const popularTimes = [
  { hour: '9 AM', busy: 20 },
  { hour: '12 PM', busy: 60 },
  { hour: '3 PM', busy: 40 },
  { hour: '6 PM', busy: 85 },
  { hour: '9 PM', busy: 95 },
  { hour: '12 AM', busy: 30 }
];

export const restaurantInfo = {
  name: 'Broasted Al-Qasoor',
  nameAr: 'بروستد القصور',
  rating: 4.2,
  reviews: 85,
  status: 'Open',
  statusAr: 'مفتوح',
  closingTime: '12:00 AM',
  closingTimeAr: '12:00 صباحاً',
  phone: '+966 12 345 6789',
  address: 'Al-Qasoor District, Riyadh, Saudi Arabia',
  addressAr: 'حي القصور، الرياض، المملكة العربية السعودية',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8583447192823!2d46.738586!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDQnMTguOSJF!5e0!3m2!1sen!2ssa!4v1234567890'
};