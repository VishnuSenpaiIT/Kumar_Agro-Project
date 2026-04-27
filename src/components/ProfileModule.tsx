/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Users, 
  Calendar, 
  Droplet, 
  UserCheck, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

interface ProfileFieldProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ label, value, icon }) => (
  <div className="flex flex-col gap-1 p-4 bg-white border border-border-light rounded-enterprise shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
    <span className="text-[10px] uppercase tracking-[0.1em] text-text-secondary font-bold flex items-center gap-1.5">
      {icon && <span className="text-olive/70">{icon}</span>}
      {label}
    </span>
    <span className="text-sm font-bold text-text-primary">{value}</span>
  </div>
);

const AttendanceCalendar = () => {
  // Simple representation of a month grid
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthName = "April 2026";

  // Mock data for attendance
  const getAttendanceData = (day: number) => {
    let status: 'present' | 'absent' | 'off' = 'present';
    if ([5, 12, 19, 26].includes(day)) status = 'off';
    else if ([3, 15, 22].includes(day)) status = 'absent';
    
    // Mis-punch can happen on present or absent days
    const hasMisPunch = [8, 15, 20].includes(day);
    
    return { status, hasMisPunch };
  };

  const statusStyles = {
    present: 'bg-present/40 text-green-800 border-present/60',
    absent: 'bg-absent/40 text-red-800 border-absent/60',
    off: 'bg-gray-100/50 text-gray-400 border-gray-200'
  };

  return (
    <div className="enterprise-card space-y-6">
      {/* Month Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <Calendar size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-[0.15em]">{monthName}</h3>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-tighter">Attendance Log</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary px-2 py-1! h-8 hover:bg-olive-light transition-colors"><ChevronLeft size={16} /></button>
          <button className="btn-secondary px-2 py-1! h-8 hover:bg-olive-light transition-colors"><ChevronRight size={16} /></button>
        </div>
      </div>

      {/* Legend - Clearly Differentiated */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 p-3 bg-gray-50/50 border border-gray-100 rounded-lg">
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase">
          <div className="w-4 h-4 bg-present/40 border border-present/60 rounded-sm"></div>
          Present
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase">
          <div className="w-4 h-4 bg-absent/40 border border-absent/60 rounded-sm"></div>
          Absent
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase">
          <div className="w-4 h-4 bg-gray-100/50 border border-gray-200 rounded-sm"></div>
          Holiday/Off
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase">
          <div className="relative w-4 h-4 bg-white border border-gray-200 rounded-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-bl-sm"></div>
          </div>
          Mis-punch (Alert)
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-7 gap-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center text-[11px] font-bold text-text-secondary uppercase pb-2 tracking-widest">{d}</div>
        ))}
        {/* Placeholder for shifting dates - assuming month starts on Wednesday */}
        {[1, 2, 3].map(i => <div key={`empty-${i}`} className="aspect-square bg-gray-50/30 rounded-md border border-dashed border-gray-100"></div>)}
        
        {days.map(day => {
          const { status, hasMisPunch } = getAttendanceData(day);
          return (
            <div 
              key={day} 
              className={`
                aspect-square border rounded-enterprise flex flex-col items-center justify-center relative transition-all group
                ${statusStyles[status]}
                ${hasMisPunch ? 'ring-1 ring-amber-400 ring-inset shadow-[inset_0_0_10px_rgba(245,158,11,0.05)]' : ''}
              `}
            >
              <span className="text-sm font-bold">{day}</span>
              
              {/* Status Indicator Dot (Subtle) */}
              {status === 'present' && <div className="absolute bottom-1.5 w-1 h-1 bg-green-600 rounded-full"></div>}
              {status === 'absent' && <div className="absolute bottom-1.5 w-1 h-1 bg-red-600 rounded-full"></div>}

              {/* Mis-punch Warning Overlay (Visually Strong) */}
              {hasMisPunch && (
                <div 
                  className="absolute top-0 right-0 w-3 h-3 bg-amber-500 rounded-bl-lg flex items-center justify-center text-white"
                  title="Mis-punch recorded"
                >
                  <AlertTriangle size={8} fill="currentColor" strokeWidth={3} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mypage' | 'attendance'>('mypage');

  const profileInfo = [
    { label: 'Destination', value: 'Senior Software Engineer', icon: <Briefcase size={10} /> },
    { label: 'Department', value: 'Technology & Innovation', icon: <Users size={10} /> },
    { label: 'Location in the factory', value: 'Building A, 4th Floor', icon: <MapPin size={10} /> },
    { label: 'Reporting manager', value: 'Johnathan Smith', icon: <User size={10} /> },
    { label: 'HOD', value: 'Dr. Michael Chen', icon: <User size={10} /> },
    { label: 'Date of join', value: '15 Jan 2022', icon: <Calendar size={10} /> },
    { label: 'Blood group', value: 'O Positive', icon: <Droplet size={10} /> },
    { label: 'Date of birth', value: '28 Aug 1992', icon: <Calendar size={10} /> },
    { label: 'Emp status', value: 'Permanent', icon: <UserCheck size={10} /> },
  ];

  return (
    <div id="profile-module" className="w-full space-y-6">
      {/* Header Info Grid */}
      <section id="profile-info-section" className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <User className="text-olive" />
          Profile Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileInfo.map((info, idx) => (
            <ProfileField 
              key={idx} 
              label={info.label}
              value={info.value}
              icon={info.icon}
            />
          ))}
        </div>
      </section>

      {/* Tabs Section */}
      <section id="profile-content-section" className="pt-4">
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab('mypage')}
            className={`pb-3 text-sm font-bold transition-all px-2 ${activeTab === 'mypage' ? 'border-b-2 border-olive text-olive' : 'text-gray-400 hover:text-gray-600'}`}
          >
            My Page
          </button>
          <button 
            onClick={() => setActiveTab('attendance')}
            className={`pb-3 text-sm font-bold transition-all px-2 ${activeTab === 'attendance' ? 'border-b-2 border-olive text-olive' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Attendance
          </button>
        </div>

        <div id="tab-content" className="min-h-[400px]">
          {activeTab === 'mypage' ? (
            <div id="my-page-content" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Group 1: Additional Personal Information */}
              <div className="enterprise-card h-full">
                <h3 className="text-sm font-bold text-text-primary mb-5 flex items-center gap-2 uppercase tracking-widest">
                  <Info className="text-olive" size={16} />
                  Additional Personal Information
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Secondary Mobile', value: '+1 (555) 987-6543' },
                    { label: 'Personal Email', value: 'john.dev.personal@gmail.com' },
                    { label: 'Permanent Address', value: '452 Enterprise Way, Tech City, CA' },
                    { label: 'Nationality', value: 'American' },
                    { label: 'Marital Status', value: 'Married' },
                    { label: 'Languages Known', value: 'English, Spanish, French' },
                  ].map((field, idx) => (
                    <div key={idx} className="flex flex-col gap-1 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{field.label}</span>
                      <span className="text-sm font-semibold text-text-primary">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 2: Additional Work Information */}
              <div className="enterprise-card h-full">
                <h3 className="text-sm font-bold text-text-primary mb-5 flex items-center gap-2 uppercase tracking-widest">
                  <Briefcase className="text-olive" size={16} />
                  Additional Work Information
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Work Shift', value: 'General Shift (9 AM - 6 PM)' },
                    { label: 'Seat Number', value: 'FL4-WS-128' },
                    { label: 'Extension Number', value: '4592' },
                    { label: 'Probation End Date', value: '15 Jul 2022' },
                    { label: 'Previous Department', value: 'Product Support' },
                    { label: 'Employment Grade', value: 'M3 - Management' },
                  ].map((field, idx) => (
                    <div key={idx} className="flex flex-col gap-1 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{field.label}</span>
                      <span className="text-sm font-semibold text-text-primary">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 3: Miscellaneous Details (Full Width on Mobile, Grid integrated) */}
              <div className="enterprise-card md:col-span-2">
                <h3 className="text-sm font-bold text-text-primary mb-5 flex items-center gap-2 uppercase tracking-widest">
                  <UserCheck className="text-olive" size={16} />
                  Miscellaneous Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                  {[
                    { label: 'Employee Referral', value: 'Sarah Jenkins (ID: 1024)' },
                    { label: 'Insurance Policy #', value: 'GHI-9981-2234-X' },
                    { label: 'Visa Status', value: 'H1-B (Valid until 2028)' },
                    { label: 'T-Shirt Size', value: 'Large' },
                    { label: 'Parking Slot', value: 'P2-S45' },
                    { label: 'Office Laptop ID', value: 'ASSET-LT-449' },
                    { label: 'Last Appraisal Date', value: '12 Mar 2026' },
                    { label: 'Training Credits', value: '45 Points' },
                    { label: 'Key Fob ID', value: 'RFID-9901-B' },
                  ].map((field, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{field.label}</span>
                      <span className="text-sm font-semibold text-text-primary">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div id="attendance-content">
              <AttendanceCalendar />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileModule;
