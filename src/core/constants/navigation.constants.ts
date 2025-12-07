/**
 * Navigation constants
 */

import type { NavLink, SidebarLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', href: '/home' },
  { label: 'من نحن', href: '/about' },
  { label: 'الخدمات', href: '/services' },
  { label: 'المدونة', href: '/blog' },
];

export const SIDEBAR_LINKS: SidebarLink[] = [
  { label: 'حجوزاتي', href: '/my-bookings', icon: 'fa-calendar-check', requiresAuth: true },
  { label: 'الإعدادات', href: '/account-settings', icon: 'fa-cog', requiresAuth: true },
  { label: 'المشاريع', href: '/projects', icon: 'fa-folder' },
];
