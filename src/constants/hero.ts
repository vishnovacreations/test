import { Users, Award, Star, Zap, Target, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Hero stats configuration
export const HERO_STATS = [
  { icon: Users, label: 'Happy Clients', value: '10+', color: 'text-blue-600' },
  { icon: Award, label: 'Projects Completed', value: '20+', color: 'text-green-600' },
  { icon: Star, label: 'Client Satisfaction', value: '9.7/10', color: 'text-purple-600' },
  { icon: Zap, label: 'Support Available', value: '24/7', color: 'text-orange-600' },
] as const

// Hero tagline
export const HERO_TAGLINE = 'Building Brands That Matter' as const

// Hero features
export interface HeroFeature {
  icon: LucideIcon
  label: string
  gradient: string
}

export const HERO_FEATURES: HeroFeature[] = [
  {
    icon: Zap,
    label: 'AI-Powered Solutions',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Target,
    label: 'Strategic Precision',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Sparkles,
    label: 'Innovative Thinking',
    gradient: 'from-purple-400 to-pink-500',
  },
] as const
