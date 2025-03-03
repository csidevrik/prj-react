import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy loading para mejor performance
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Facturas = lazy(() => import('../pages/Facturas'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/facturas',
    element: <Facturas />
  }
]; 