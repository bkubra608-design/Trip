export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  popularFor: string[];
  bestSeason: string;
  avgDailyBudget: string;
  rating: number;
  featuredDays: number;
}

export interface ItineraryDayActivity {
  time: string;
  title: string;
  location: string;
  description: string;
  category: 'sightseeing' | 'dining' | 'adventure' | 'relaxation' | 'logistics' | 'culture';
  costEst?: string;
  aiTip?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  highlights: string[];
  activities: ItineraryDayActivity[];
}

export interface GeneratedItinerary {
  destination: string;
  country: string;
  durationDays: number;
  totalBudgetEst: string;
  travelStyle: string;
  travelersCount: number;
  interests: string[];
  days: ItineraryDay[];
  aiSummary: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  cards?: {
    type: 'itinerary' | 'hotel' | 'flight' | 'tip';
    title: string;
    subtitle: string;
    tag?: string;
    details?: string[];
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  tripDestination: string;
}

export interface TravelUpdateCard {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  status: string;
  statusType: 'success' | 'warning' | 'info' | 'critical';
  time: string;
  description: string;
}

export interface PersonalizationItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  examples: string[];
  aiAdaptation: string;
}
