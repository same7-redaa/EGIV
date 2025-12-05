import React from 'react';
import { BookingCardProps, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', href: '/home' },
  { label: 'من نحن', href: '/about' },
  { label: 'الخدمات', href: '/services' },
  { label: 'المدونة', href: '/blog' },
];

export const CARDS_DATA: BookingCardProps[] = [
  {
    id: 1,
    title: 'جناح كبار الشخصيات',
    description: 'جناح خاص يوفر أجواء الصالات الأكثر تميزاً في رياضة السيارات. مصمم لما يصل إلى 8 ضيوف، مع جهازي محاكاة متطورين، وإعداد راقٍ للترفيه الحصري - حيث تلتقي الخصوصية بالهيبة.',
    price: 800,
    image: '/src/assets/images/Rectangle 23.png',
  },
  {
    id: 2,
    title: 'خليج كبار الشخصيات',
    description: 'خاص، فاخر، غامر. يوفر كل خليج VIP جهاز محاكاة شخصي وPS5 وتلفزيون بشاشة كبيرة - صالتك الخاصة للتجمع أو السباقات أو الرياضة المباشرة.',
    price: 800,
    image: '/src/assets/images/Rectangle 23.png',
  },
  {
    id: 3,
    title: 'سباق',
    description: 'حدود الدفع مع 20 أو 40 أو 60 دقيقة من السباق. مثالي للأفراد أو المجموعات - بأسعار حصرية لأكثر من 4 سائقين.',
    price: 800,
    image: '/src/assets/images/Rectangle 23.png',
  },
];

const LOGO_URL = "https://i.postimg.cc/BvDpzfrJ/098-1.png";

export const LOGO_SVG = (
  <img 
    src={LOGO_URL} 
    alt="EGIV Logo" 
    className="h-10 w-auto object-contain"
  />
);

export const HERO_LOGO_SVG = (
  <img 
    src={LOGO_URL} 
    alt="EGIV Hero Logo" 
    className="h-40 md:h-56 w-auto object-contain"
  />
);