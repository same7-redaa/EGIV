/**
 * Navigation related types
 */

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SidebarLink extends NavLink {
  requiresAuth?: boolean;
}

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  requiresAuth?: boolean;
  layout?: 'default' | 'auth' | 'booking';
}
