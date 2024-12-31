import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './paths';

// Layouts
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

// Auth pages
import Login from '../components/Login';
import Signup from '../components/Signup';
import ForgotPassword from '../components/ForgotPassword';

// App pages
import Home from '../components/Home';
import Profile from '../components/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route path={PATHS.DASHBOARD} element={<Home />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />
        {/* Add other protected routes here */}
      </Route>

      {/* Redirect root to dashboard or login based on auth status */}
      <Route path="/" element={<Navigate to={PATHS.DASHBOARD} replace />} />
      
      {/* 404 - Catch all route */}
      <Route path="*" element={<Navigate to={PATHS.DASHBOARD} replace />} />
    </Routes>
  );
}