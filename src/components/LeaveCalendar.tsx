/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CalendarDays, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Info,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';

interface LeaveCalendarProps {
  onCancel?: () => void;
}

const LeaveCalendar: React.FC<LeaveCalendarProps> = ({ onCancel }) => {
  // Mock data for March 2026
  const month = "March";
  const year = "2026";
  const daysInMonth = 31;
  const startingDay = 0; // Sunday

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Mock leave events
  const leaveEvents: Record<number, { type: string, status: 'Approved' | 'Pending' | 'Rejected' }[]> = {
    10: [{ type: 'Casual Leave', status: 'Approved' }],
    11: [{ type: 'Casual Leave', status: 'Approved' }],
    12: [{ type: 'Casual Leave', status: 'Approved' }],
    15: [{ type: 'Sick Leave', status: 'Approved' }],
    25: [{ type: 'Earned Leave', status: 'Pending' }],
    26: [{ type: 'Earned Leave', status: 'Pending' }],
    5: [{ type: 'Optional Leave', status: 'Rejected' }],
  };

  const today = 23;

  const renderCells = () => {
    const cells = [];
    // Empty cells for starting day offset
    for (let i = 0; i < startingDay; i++) {
        cells.push(<div key={`empty-${i}`} className="bg-gray-50/30 border-r border-b border-gray-100 min-h-[100px]"></div>);
    }

    // Days in month
    for (let day = 1; day <= daysInMonth; day++) {
        const events = leaveEvents[day] || [];
        const isToday = day === today;

        cells.push(
            <div key={day} className={`min-h-[100px] p-2 bg-white border-r border-b border-gray-100 flex flex-col transition-all group hover:bg-gray-50/50 ${isToday ? 'relative z-10' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs font-bold ${isToday ? 'w-6 h-6 flex items-center justify-center bg-olive text-white rounded-full' : 'text-text-primary'}`}>
                        {day}
                    </span>
                    {isToday && <span className="text-[9px] font-bold text-olive uppercase tracking-tighter">Today</span>}
                </div>
                
                <div className="flex flex-col gap-1">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className={`px-1.5 py-0.5 rounded-[4px] border text-[9px] font-bold uppercase tracking-tighter truncate ${
                                event.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' :
                                event.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                'bg-red-50 text-red-600 border-red-100'
                            }`}
                        >
                            {event.type}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Fill remaining cells for 6x7 grid (42 cells)
    const totalCells = startingDay + daysInMonth;
    const remainingCells = 42 - totalCells;
    for (let i = 1; i <= remainingCells; i++) {
        cells.push(<div key={`empty-end-${i}`} className="bg-gray-50/30 border-r border-b border-gray-100 min-h-[100px]"></div>);
    }

    return cells;
  };

  return (
    <div id="leave-calendar-module" className="w-full max-w-[1100px] mx-auto py-4 flex flex-col gap-8">
      {/* 1. Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <CalendarDays size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">Leave Calendar</h1>
            <p className="text-xs text-text-secondary mt-1">View organizational leave patterns and your own schedule.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="flex items-center bg-white border border-border-light rounded-button overflow-hidden shadow-sm">
                <button className="p-2.5 hover:bg-gray-50 border-r border-gray-100 transition-colors text-gray-400 hover:text-olive">
                    <ChevronLeft size={18} />
                </button>
                <div className="px-6 py-2 text-sm font-bold text-text-primary uppercase tracking-widest min-w-[140px] text-center">
                    {month} {year}
                </div>
                <button className="p-2.5 hover:bg-gray-50 border-l border-gray-100 transition-colors text-gray-400 hover:text-olive">
                    <ChevronRight size={18} />
                </button>
            </div>
            
            <button 
                onClick={onCancel}
                className="p-2.5 bg-white border border-border-light text-gray-400 hover:text-olive hover:border-olive rounded-button transition-all shadow-sm"
            >
                <X size={18} />
            </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex-1 w-full">
            {/* 2. Calendar Grid */}
            <div className="enterprise-card bg-white p-0 shadow-sm border border-border-light rounded-enterprise overflow-hidden">
                <div className="grid grid-cols-7 bg-gray-50/50 border-b border-gray-100">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="py-3 text-center border-r border-gray-100 last:border-r-0">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                {day}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 border-l border-t border-gray-100">
                    {renderCells()}
                </div>
            </div>

            {/* 3. Legend Section */}
            <div className="mt-8 flex flex-wrap items-center gap-8 px-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-50 border border-green-100 rounded-full"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Approved Leave</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-50 border border-orange-100 rounded-full"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pending Leave</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-50 border border-red-100 rounded-full"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rejected Leave</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-olive rounded-full"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Current Date</span>
                </div>
            </div>
        </div>

        {/* Optional Sidebar / Info Panel */}
        <div className="w-full lg:w-[300px] shrink-0 space-y-6">
            <div className="enterprise-card bg-white p-6 shadow-sm border border-border-light relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <CalendarDays size={80} />
                </div>
                
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Info size={14} className="text-olive" />
                    Selected Day Details
                </h3>
                
                <div className="space-y-6">
                    <div className="pb-4 border-b border-gray-50">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Date</p>
                        <p className="text-sm font-bold text-text-primary uppercase tracking-tight">March 23, 2026</p>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50/50 rounded-enterprise border border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Today's Schedule</p>
                            <div className="flex flex-col items-center justify-center py-6 text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-200 border border-gray-100 mb-2">
                                    <Clock size={20} />
                                </div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">No leave records scheduled</p>
                            </div>
                        </div>

                        <div className="p-4 bg-olive-light/20 rounded-enterprise border border-olive/10">
                            <p className="text-[10px] font-bold text-olive uppercase tracking-widest mb-3">Upcoming Request</p>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white border border-olive/20 rounded flex items-center justify-center text-olive shrink-0">
                                    <CalendarDays size={14} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-primary tracking-tight">March 25, 2026</p>
                                    <p className="text-[10px] font-medium text-gray-500 mt-0.5">Earned Leave (Pending)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full btn-secondary py-3 text-xs font-bold uppercase tracking-[0.2em]">
                        Add Event
                    </button>
                </div>
            </div>

            <div className="enterprise-card bg-olive text-white p-6 shadow-sm border border-olive relative overflow-hidden group hover:scale-[1.01] transition-all">
                <div className="absolute -right-4 -bottom-4 p-4 opacity-10 group-hover:scale-125 transition-all">
                    <CheckCircle2 size={120} />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-80">Quick Tip</h3>
                <p className="text-xs font-medium leading-relaxed relative z-10">
                    Always apply for leaves at least 2 weeks in advance for better resource planning.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveCalendar;
