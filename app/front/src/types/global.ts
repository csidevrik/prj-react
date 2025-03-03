export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
} 