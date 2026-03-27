import { 
  Dumbbell, 
  Users, 
  Zap, 
  Clock, 
  Heart, 
  Trophy, 
  ShieldCheck, 
  Activity,
  Flame,
  Target
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 'cardio',
    title: 'Cardio Training',
    description: 'Boost your heart health and burn calories with our high-intensity cardio equipment and classes.',
    icon: Heart,
  },
  {
    id: 'strength',
    title: 'Strength Training',
    description: 'Build muscle and increase your power with our extensive range of free weights and machines.',
    icon: Dumbbell,
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'Challenge your limits with functional movements performed at high intensity.',
    icon: Zap,
  },
  {
    id: 'yoga',
    title: 'Yoga & Pilates',
    description: 'Improve flexibility, balance, and mental clarity with our expert-led yoga sessions.',
    icon: Activity,
  },
  {
    id: 'personal',
    title: 'Personal Training',
    description: 'Get personalized attention and custom workout plans tailored to your specific goals.',
    icon: Users,
  },
  {
    id: 'kids',
    title: 'Kids Fitness',
    description: 'Fun and engaging fitness programs designed to keep children active and healthy.',
    icon: Target,
  },
];

export const TRAINERS = [
  {
    id: 1,
    name: 'Alex "The Beast" Rivera',
    specialization: 'Strength & Conditioning',
    experience: '10+ Years',
    certifications: 'NASM-CPT, CSCS',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    specialization: 'Yoga & Mindfulness',
    experience: '8 Years',
    certifications: 'RYT-500, Pilates Certified',
    image: 'https://images.unsplash.com/photo-1518611012118-2969c63b07b7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    specialization: 'CrossFit & HIIT',
    experience: '6 Years',
    certifications: 'CrossFit Level 2, Precision Nutrition',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  },
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    name: 'John Doe',
    story: 'Lost 40lbs in 6 months. FITNESS FIRST changed my life!',
    before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Emily Smith',
    story: 'Built muscle and confidence. The community here is amazing.',
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1574680077505-ef9964d3f852?auto=format&fit=crop&q=80&w=800',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Certified Trainers',
    description: 'Our team consists of industry-leading experts dedicated to your success.',
    icon: ShieldCheck,
  },
  {
    title: 'Modern Equipment',
    description: 'Train with the latest and most advanced fitness technology available.',
    icon: Flame,
  },
  {
    title: 'Flexible Timing',
    description: 'Open 24/7 to fit your busy lifestyle. No excuses.',
    icon: Clock,
  },
  {
    title: 'Personalized Plans',
    description: 'Custom nutrition and workout programs tailored to your body type.',
    icon: Target,
  },
  {
    title: 'Community Support',
    description: 'Join a family of like-minded individuals who motivate each other.',
    icon: Users,
  },
];

export const PRICING_PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: '$49',
    period: '/month',
    features: [
      'Access to all gym equipment',
      'Locker room access',
      '1 Free personal training session',
      'Standard support',
    ],
    isPopular: false,
  },
  {
    id: 'quarterly',
    name: 'Quarterly Plan',
    price: '$129',
    period: '/3 months',
    features: [
      'All Monthly Plan features',
      'Group fitness classes',
      'Nutrition consultation',
      'Priority support',
    ],
    isPopular: true,
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: '$399',
    period: '/year',
    features: [
      'All Quarterly Plan features',
      'Unlimited personal training',
      'Guest passes',
      'VIP lounge access',
    ],
    isPopular: false,
  },
];

export const CLASS_SCHEDULE = [
  { time: '06:00 AM', mon: 'Cardio', tue: 'Yoga', wed: 'CrossFit', thu: 'Cardio', fri: 'Yoga', sat: 'CrossFit' },
  { time: '08:00 AM', mon: 'Strength', tue: 'HIIT', wed: 'Strength', thu: 'HIIT', fri: 'Strength', sat: 'HIIT' },
  { time: '10:00 AM', mon: 'Yoga', tue: 'Cardio', wed: 'Yoga', thu: 'Cardio', fri: 'Yoga', sat: 'Cardio' },
  { time: '04:00 PM', mon: 'CrossFit', tue: 'Strength', wed: 'CrossFit', thu: 'Strength', fri: 'CrossFit', sat: 'Strength' },
  { time: '06:00 PM', mon: 'HIIT', tue: 'Yoga', wed: 'HIIT', thu: 'Yoga', fri: 'HIIT', sat: 'Yoga' },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1574680077505-ef9964d3f852?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
];
