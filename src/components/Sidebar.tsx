/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  CalendarCheck, 
  FileText, 
  Receipt,
  LayoutDashboard,
  Briefcase,
  Users,
  GraduationCap,
  Info,
  Landmark,
  ClipboardCheck
} from 'lucide-react';

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      id={`sidebar-item-${label.toLowerCase().replace(/\s+/g, '-')}`}
      className={`
        flex items-center gap-3 px-4 py-2.5 rounded-button transition-all duration-200 cursor-pointer select-none
        ${isActive 
          ? 'bg-olive text-white shadow-sm' 
          : 'text-text-secondary hover:bg-olive-light hover:text-olive'
        }
      `}
    >
      <div className="flex-shrink-0">
        {React.cloneElement(icon as React.ReactElement<any>, { 
          size: 18,
          strokeWidth: isActive ? 2.5 : 2
        })}
      </div>
      <span className="text-sm font-semibold tracking-wide">
        {label}
      </span>
    </div>
  );
};

interface SidebarProps {
  activeItem: string;
  onItemChange: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemChange }) => {
  const sidebarItems = [
    { label: 'Dashboard', icon: <LayoutDashboard /> },
    { label: 'Profile', icon: <User /> },
    { label: 'Attendance', icon: <CalendarCheck /> },
    { label: 'General Details', icon: <FileText /> },
    { label: 'Experience Details', icon: <Briefcase /> },
    { label: 'Family Details', icon: <Users /> },
    { label: 'Education Details', icon: <GraduationCap /> },
    { label: 'Additional Details', icon: <Info /> },
    { label: 'Bank Details', icon: <Landmark /> },
    { label: 'Other Details', icon: <ClipboardCheck /> },
    { label: 'Salary Slip', icon: <Receipt /> },
  ];

  return (
    <aside 
      id="left-sidebar"
      className="fixed left-0 top-[60px] w-[240px] h-[calc(100vh-60px)] bg-white border-r border-border-light z-40 overflow-y-auto"
    >
      <div className="p-4 flex flex-col gap-1.5">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.label}
            onClick={() => onItemChange(item.label)}
          />
        ))}
      </div>

      {/* Optional sidebar footer info */}
      <div className="absolute bottom-6 left-0 w-full px-6 text-[10px] text-gray-400 uppercase tracking-widest font-semibold text-center">
        Human Resources Portal
      </div>
    </aside>
  );
};

export default Sidebar;
