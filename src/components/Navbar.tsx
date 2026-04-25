/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Info, 
  ShieldCheck, 
  UserCog, 
  GraduationCap, 
  BarChart3, 
  Contact, 
  LayoutDashboard, 
  BookOpen 
} from 'lucide-react';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      id={`nav-item-${label.toLowerCase()}`}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-button transition-all duration-200 cursor-pointer select-none
        ${isActive 
          ? 'bg-olive text-white shadow-sm' 
          : 'text-text-secondary hover:bg-olive-light hover:text-olive'
        }
      `}
    >
      <div className="flex-shrink-0">
        {React.cloneElement(icon as React.ReactElement<any>, { 
          size: 15,
          strokeWidth: isActive ? 3 : 2
        })}
      </div>
      <span className="text-[13px] font-bold tracking-tight">
        {label}
      </span>
    </div>
  );
};

interface NavbarProps {
  activeItem: string;
  onItemChange: (label: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeItem, onItemChange }) => {
  const navItems = [
    { label: 'Home', icon: <Home /> },
    { label: 'Profile', icon: <User /> },
    { label: 'About', icon: <Info /> },
    { label: 'Policy', icon: <ShieldCheck /> },
    { label: 'ESS', icon: <UserCog /> },
    { label: 'LMS', icon: <GraduationCap /> },
    { label: 'PMS', icon: <BarChart3 /> },
    { label: 'Directory', icon: <Contact /> },
    { label: 'Dashboard', icon: <LayoutDashboard /> },
    { label: 'Knowbase', icon: <BookOpen /> },
  ];

  return (
    <nav 
      id="top-navigation"
      className="fixed top-0 left-0 w-full h-[60px] bg-white border-b border-border-light z-50 flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-10">
        {/* Placeholder for Logo */}
        <div 
          id="nav-logo" 
          className="flex items-center gap-3 mr-2 cursor-pointer group"
          onClick={() => onItemChange('Home')}
        >
          <div className="w-8 h-8 bg-olive rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-olive-hover transition-colors">
            E
          </div>
          <span className="font-bold text-base text-text-primary hidden lg:block uppercase tracking-[0.2em] pt-0.5">
            Portal
          </span>
        </div>

        {/* Navigation Items */}
        <div 
          id="nav-items-container"
          className="flex items-center gap-1.5"
        >
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              isActive={activeItem === item.label || (item.label === 'LMS' && activeItem === 'Learning Management')}
              onClick={() => onItemChange(item.label === 'LMS' ? 'Learning Management' : item.label)}
            />
          ))}
        </div>
      </div>

      {/* Right side utilities (optional, kept empty as per requirements) */}
      <div className="hidden xl:flex items-center gap-4 text-xs text-gray-400 font-medium uppercase tracking-widest">
        v1.2.0
      </div>
    </nav>
  );
};

export default Navbar;
