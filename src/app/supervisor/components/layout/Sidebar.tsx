'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  LayoutDashboard,
  Files,
  Users,
  MapPin,
  BookOpen,
  HeadphonesIcon,
  BarChart3,
  PlaneTakeoff,
  Badge,
  Medal
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/supervisor', icon: LayoutDashboard },
  { name: 'Users', href: '/supervisor/users', icon: Users },
  { name: 'Applications', href: '/supervisor/applications', icon: Files },
  { name: 'Trainees', href: '/supervisor/trainees', icon: Users },
  { name: 'Workshops', href: '/supervisor/workshops', icon: Medal },
  { name: 'Onboarding', href: '/supervisor/Onboarding', icon: PlaneTakeoff },
  { name: 'Locations', href: '/supervisor/locations', icon: MapPin },
  { name: 'Programs', href: '/supervisor/programs', icon: BookOpen },
  { name: 'Support', href: '/supervisor/support', icon: HeadphonesIcon },
  { name: 'Reports', href: '/supervisor/reports', icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r min-h-screen p-4">
      <div className="text-xl font-semibold mb-8 text-gray-900">Supervisor Portal</div>
      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                isActive 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}