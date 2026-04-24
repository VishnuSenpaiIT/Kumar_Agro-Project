/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  Calendar as CalendarIcon
} from 'lucide-react';

interface AttendanceSummaryProps {
  label: string;
  count: number;
  id: string;
}

const SummaryCard: React.FC<AttendanceSummaryProps> = ({ label, count, id }) => (
  <div id={id} className="bg-white p-5 border border-border-light rounded-enterprise shadow-sm">
    <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-1">{label}</p>
    <p className="text-2xl font-bold text-text-primary">{count}</p>
  </div>
);

const Attendance: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2)); // March 2026

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') newDate.setMonth(newDate.getMonth() - 1);
    else newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Static mock data for the calendar grid
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 0; // 0 = Sunday (mocking March 2026 starting on Sunday for simplicity)

  const getStatus = (day: number) => {
    if ([7, 14, 21, 28].includes(day)) return 'holiday';
    if ([2, 5, 12, 19, 25].includes(day)) return 'present';
    if ([10, 22].includes(day)) return 'absent';
    if ([4, 18].includes(day)) return 'mis-punch';
    return 'present'; // default
  };

  const renderStatusIndicator = (status: string) => {
    switch (status) {
      case 'present':
        return <div className="w-1.5 h-1.5 rounded-full bg-olive"></div>;
      case 'absent':
        return <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>;
      case 'holiday':
        return <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>;
      case 'mis-punch':
        return <AlertCircle size={14} className="text-orange-500" />;
      default:
        return null;
    }
  };

  const getCellClasses = (status: string) => {
    let base = "relative h-24 bg-white border border-gray-100 p-3 flex flex-col justify-between transition-colors hover:bg-gray-50/50 ";
    if (status === 'mis-punch') base += "border-orange-200 border-2";
    return base;
  };

  return (
    <div id="attendance-module" className="w-full max-w-6xl">
      {/* 1. HEADER SECTION */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary mb-1">Attendance</h1>
          <p className="text-sm text-text-secondary">Monitor your daily presence and punch records.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white border border-border-light rounded-button px-4 py-2 shadow-sm">
          <button 
            onClick={() => navigateMonth('prev')}
            className="text-text-secondary hover:text-olive transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2 px-2">
            <CalendarIcon size={16} className="text-olive" />
            <span className="text-sm font-bold text-text-primary min-w-[100px] text-center">{currentMonth}</span>
          </div>
          <button 
            onClick={() => navigateMonth('next')}
            className="text-text-secondary hover:text-olive transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* 2. ATTENDANCE SUMMARY */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <SummaryCard id="summary-total" label="Total Working Days" count={22} />
        <SummaryCard id="summary-present" label="Days Present" count={18} />
        <SummaryCard id="summary-absent" label="Days Absent" count={2} />
        <SummaryCard id="summary-mispunch" label="Mis-punch Count" count={2} />
      </div>

      {/* 3. CALENDAR VIEW */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden mb-10">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/30">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="py-3 text-center">
              <span className="text-[10px] font-bold text-text-secondary tracking-widest">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {daysInMonth.map((day) => {
            const status = getStatus(day);
            return (
              <div key={day} className={getCellClasses(status)}>
                <span className={`text-sm font-bold ${status === 'holiday' ? 'text-gray-300' : 'text-text-primary'}`}>
                  {day < 10 ? `0${day}` : day}
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {renderStatusIndicator(status)}
                    <span className="text-[9px] font-bold uppercase tracking-tight text-text-secondary">
                      {status === 'mis-punch' ? 'Mis-punch' : status}
                    </span>
                  </div>
                  {status === 'present' && <CheckCircle2 size={12} className="text-olive/40" />}
                  {status === 'absent' && <XCircle size={12} className="text-red-500/40" />}
                </div>
              </div>
            );
          })}
          {/* Empty cells to fill the grid if needed */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`empty-${i}`} className="h-24 bg-gray-50/20 border border-gray-100"></div>
          ))}
        </div>
      </div>

      {/* 4. LEGEND SECTION */}
      <div className="flex flex-wrap items-center gap-8 p-6 bg-white border border-border-light rounded-enterprise shadow-sm">
        <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mr-2">Legend</h4>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-olive"></div>
          <span className="text-xs font-semibold text-text-primary">Present</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <span className="text-xs font-semibold text-text-primary">Absent</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <span className="text-xs font-semibold text-text-primary">Holiday</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-orange-50 border border-orange-100 rounded">
            <AlertCircle size={12} className="text-orange-500" />
            <span className="text-xs font-bold text-orange-700">Mis-punch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
