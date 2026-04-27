/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HireToRetireDashboard from './HireToRetireDashboard';
import AnalyticalDashboard from './AnalyticalDashboard';
import { LayoutDashboard, BarChart2 } from 'lucide-react';

const DashboardModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hire' | 'analytical'>('hire');

  return (
    <div id="dashboard-shell" className="w-full max-w-7xl mx-auto py-4">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary uppercase tracking-[0.2em] mb-2">Dashboard</h1>
        <div className="w-12 h-1.5 bg-olive rounded-full"></div>
      </div>

      {/* Tab Switch / Toggle Buttons */}
      <div className="flex items-center gap-1 bg-white p-1 rounded-enterprise border border-border-light shadow-sm mb-10 w-fit">
        <button
          onClick={() => setActiveTab('hire')}
          className={`px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all
            ${activeTab === 'hire' 
              ? 'bg-olive text-white shadow-md' 
              : 'text-gray-400 hover:text-olive hover:bg-olive-light/10'
            }
          `}
        >
          Hire to Retire
        </button>
        <button
          onClick={() => setActiveTab('analytical')}
          className={`px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all
            ${activeTab === 'analytical' 
              ? 'bg-olive text-white shadow-md' 
              : 'text-gray-400 hover:text-olive hover:bg-olive-light/10'
            }
          `}
        >
          Analytics Dashboard
        </button>
      </div>

      {/* Main Content Section */}
      <div id="dashboard-content" className="animate-in fade-in duration-500">
        {activeTab === 'hire' ? (
          <HireToRetireDashboard />
        ) : (
          <AnalyticalDashboard />
        )}
      </div>
    </div>
  );
};

export default DashboardModule;
