import React from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';

export function Layout() {
  return (
    <div>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
