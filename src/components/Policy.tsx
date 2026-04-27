/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Calendar, 
  Scale, 
  Monitor, 
  Banknote,
  Info,
  CircleCheck,
  ChevronRight
} from 'lucide-react';

interface CategoryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Policy: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('hr');

  const categories: CategoryItem[] = [
    { id: 'hr', label: 'HR Policies', icon: <Users size={18} /> },
    { id: 'leave', label: 'Leave Policies', icon: <Calendar size={18} /> },
    { id: 'conduct', label: 'Code of Conduct', icon: <Scale size={18} /> },
    { id: 'it', label: 'IT Policies', icon: <Monitor size={18} /> },
    { id: 'payroll', label: 'Payroll Policies', icon: <Banknote size={18} /> },
  ];

  return (
    <div id="policy-page" className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-2">
          <ShieldCheck className="text-olive" />
          Company Policies
        </h1>
        <p className="text-text-secondary text-sm">Access and review official organizational guidelines and procedural documents.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 1. Policy Categories Sidebar */}
        <aside className="lg:col-span-1 space-y-2">
          <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-4">Categories</h2>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-button transition-all duration-200 cursor-pointer text-sm font-semibold
                ${activeCategory === cat.id 
                  ? 'bg-olive text-white shadow-sm' 
                  : 'text-text-secondary hover:bg-olive-light hover:text-olive'
                }
              `}
            >
              <div className="flex items-center gap-3">
                {cat.icon}
                {cat.label}
              </div>
              {activeCategory === cat.id && <ChevronRight size={14} />}
            </button>
          ))}
        </aside>

        {/* 2. Policy Content Display Section */}
        <main className="lg:col-span-3 space-y-6">
          <div className="enterprise-card bg-white min-h-[600px] border-border-light shadow-sm">
            {/* Document Header */}
            <div className="border-b border-gray-100 pb-6 mb-8">
              <h2 className="text-xl font-bold text-text-primary mb-1">
                {categories.find(c => c.id === activeCategory)?.label || 'Policy Document'}
              </h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Effective Date: January 01, 2026 | Document ID: POL-2026-001</p>
            </div>

            {/* Document Body */}
            <div className="space-y-8 text-text-primary leading-relaxed text-sm">
              {/* Introduction */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-olive uppercase tracking-widest border-l-2 border-olive pl-3">1. Introduction</h3>
                <p className="text-text-secondary leading-relaxed">
                  This policy outlines the fundamental principles and operational standards expected of all employees at Enterprise Systems. It serves as a framework to ensure consistency, fairness, and professional alignment across all departments. By adhering to these guidelines, we maintain a workplace environment that is inclusive, productive, and compliant with local and international labor laws.
                </p>
              </section>

              {/* Key Rules */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-olive uppercase tracking-widest border-l-2 border-olive pl-3">2. Key Rules & Regulations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-olive mt-0.5" size={16} />
                    <span>Employees are expected to maintain professional decorum and punctual attendance in all assigned work shifts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-olive mt-0.5" size={16} />
                    <span>Proprietary information and client data must be handled with strict confidentiality as per the non-disclosure agreement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-olive mt-0.5" size={16} />
                    <span>All work-related grievances must be channeled through the official HR helpdesk for formal resolution.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-olive mt-0.5" size={16} />
                    <span>Misuse of company assets for personal gain is strictly prohibited and subject to disciplinary action.</span>
                  </li>
                </ul>
              </section>

              {/* Eligibility */}
              <section className="space-y-3">
                <h3 className="text-xs font-bold text-olive uppercase tracking-widest border-l-2 border-olive pl-3">3. Eligibility</h3>
                <p className="text-text-secondary">
                  This policy applies to all full-time, part-time, and contract-based employees currently on the company payroll. Specific provisions regarding leave credits and bonus entitlements may vary based on employment grade and tenure. Employees on probation are eligible for standard statutory benefits as outlined in their appointment letters.
                </p>
              </section>

              {/* Important Notes */}
              <section className="mt-10">
                <div className="bg-olive-light/50 border border-olive/10 rounded-enterprise p-5 flex gap-4">
                  <div className="shrink-0 text-olive">
                    <Info size={20} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-olive-dark uppercase tracking-widest mb-1">Important Note</h4>
                    <p className="text-xs text-text-secondary font-medium leading-relaxed">
                      Failure to comply with any section of this policy can result in disciplinary measures ranging from a formal warning to termination of services. It is the employee's responsibility to stay updated with any policy revisions announced via the internal communication portal.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Policy;
