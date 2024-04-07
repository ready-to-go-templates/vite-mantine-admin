import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
const Admin = React.lazy(() => import('@/pages/admin'));
const Dashboard = React.lazy(() => import('@/pages/admin/dashboard'));
const Orders = React.lazy(() => import('@/pages/admin/orders'));
const Auth = React.lazy(() => import('@/pages/auth'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Admin />
          </Suspense>
        }
        children={
          <>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
          </>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Auth />
          </Suspense>
        }
      />
    </Routes>
  );
}
