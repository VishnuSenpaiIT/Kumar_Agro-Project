/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  User, 
  Building2, 
  FileText, 
  MapPin, 
  Briefcase, 
  ChevronDown,
  Users,
  LayoutGrid,
  MoreVertical,
  CheckCircle2,
  Clock,
  Settings,
  UserCheck,
  UserMinus
} from 'lucide-react';

interface EmployeeResult {
  type: 'employee';
  id: string;
  name: string;
  empId: string;
  dept: string;
  designation: string;
  location: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

interface DeptResult {
  type: 'dept';
  id: string;
  name: string;
  hod: string;
  count: number;
  location: string;
}

interface DocResult {
  type: 'document';
  id: string;
  name: string;
  fileType: string;
  module: string;
  updatedAt: string;
}

type SearchResult = EmployeeResult | DeptResult | DocResult;

const Directory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('Global');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const allResults: SearchResult[] = [
    { type: 'employee', id: 'e1', name: 'Robert Fox', empId: 'EMP-10294', dept: 'Engineering', designation: 'Senior Software Engineer', location: 'New York', status: 'Active' },
    { type: 'employee', id: 'e2', name: 'Jane Cooper', empId: 'EMP-10301', dept: 'Design', designation: 'Lead UI/UX Designer', location: 'London', status: 'On Leave' },
    { type: 'employee', id: 'e3', name: 'Brooklyn Simmons', empId: 'EMP-10405', dept: 'Sales', designation: 'Account Executive', location: 'San Francisco', status: 'Active' },
    { type: 'employee', id: 'e4', name: 'John Smith', empId: 'EMP-10312', dept: 'Engineering', designation: 'Software Engineer', location: 'New York', status: 'Active' },
    { type: 'employee', id: 'e5', name: 'John Williams', empId: 'EMP-10415', dept: 'Sales', designation: 'Sales Manager', location: 'London', status: 'Active' },
    { type: 'employee', id: 'e6', name: 'Sarah Johnson', empId: 'EMP-10320', dept: 'Human Resources', designation: 'HR Manager', location: 'New York', status: 'Active' },
    { type: 'employee', id: 'e7', name: 'Michael Brown', empId: 'EMP-10330', dept: 'Engineering', designation: 'DevOps Engineer', location: 'San Francisco', status: 'Active' },
    { type: 'employee', id: 'e8', name: 'Emily Davis', empId: 'EMP-10340', dept: 'Marketing', designation: 'Marketing Specialist', location: 'London', status: 'On Leave' },
    { type: 'employee', id: 'e9', name: 'David Wilson', empId: 'EMP-10350', dept: 'Finance', designation: 'Financial Analyst', location: 'New York', status: 'Active' },
    { type: 'employee', id: 'e10', name: 'Lisa Anderson', empId: 'EMP-10360', dept: 'Design', designation: 'UI Designer', location: 'San Francisco', status: 'Inactive' },
    { type: 'dept', id: 'd1', name: 'Technology & Innovation', hod: 'Sarah Williams', count: 42, location: 'Global' },
    { type: 'dept', id: 'd2', name: 'Human Resources', hod: 'Michael Brown', count: 12, location: 'New York' },
    { type: 'dept', id: 'd3', name: 'Sales & Marketing', hod: 'John Williams', count: 28, location: 'London' },
    { type: 'document', id: 'doc1', name: 'Annual IT Policy 2025', fileType: 'PDF', module: 'Compliance', updatedAt: 'Oct 15, 2025' },
    { type: 'document', id: 'doc2', name: 'HR Handbook 2026', fileType: 'PDF', module: 'HR', updatedAt: 'Jan 01, 2026' },
    { type: 'document', id: 'doc3', name: 'Engineering Guidelines', fileType: 'DOCX', module: 'Engineering', updatedAt: 'Mar 10, 2026' },
  ];

  const filteredResults = allResults.filter(result => {
    const matchesSearch = result.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (result.type === 'employee' && result.empId.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || 
                           (activeCategory === 'Employees' && result.type === 'employee') ||
                           (activeCategory === 'Departments' && result.type === 'dept') ||
                           (activeCategory === 'Documents' && result.type === 'document');
    
    const matchesLocation = locationFilter === 'Global' || 
                           (result.type !== 'document' && result.location === locationFilter);
    
    const matchesDept = deptFilter === 'All Departments' || 
                       (result.type === 'employee' && result.dept === deptFilter);
    
    const matchesStatus = statusFilter === 'All Status' || 
                         (result.type === 'employee' && result.status === statusFilter);

    return matchesSearch && matchesCategory && matchesLocation && matchesDept && matchesStatus;
  });

  return (
    <div id="directory-module" className="w-full max-w-7xl mx-auto py-4">
      {/* 1. GLOBAL SEARCH HEADER */}
      <section className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-text-primary uppercase tracking-[0.2em] mb-6">Directory</h1>
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search employees, departments, records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-enterprise border border-border-light shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all"
          />
          <button 
            onClick={() => {}} // Search button can be a trigger if needed
            className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary px-6 py-2 text-[10px] font-bold uppercase tracking-widest"
          >
            Search
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 2. FILTER PANEL */}
        <aside className="lg:col-span-1 space-y-6 sticky top-24 self-start">
          <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-gray-50">
              <Filter size={16} className="text-olive" />
              <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Apply Filters</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Category</label>
                <div className="relative">
                  <select 
                    value={activeCategory} 
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="input-field w-full py-2 text-xs appearance-none pr-10"
                  >
                    <option>All</option>
                    <option>Employees</option>
                    <option>Departments</option>
                    <option>Roles</option>
                    <option>Documents</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Location</label>
                <div className="relative">
                  <select 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="input-field w-full py-2 text-xs appearance-none pr-10"
                  >
                    <option>Global</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>San Francisco</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Department</label>
                <div className="relative">
                  <select 
                    value={deptFilter}
                    onChange={(e) => setDeptFilter(e.target.value)}
                    className="input-field w-full py-2 text-xs appearance-none pr-10"
                  >
                    <option>All Departments</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Sales</option>
                    <option>HR</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Status</label>
                <div className="relative">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="input-field w-full py-2 text-xs appearance-none pr-10"
                  >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>On Notice</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <button 
                onClick={() => alert('Filters applied to directory search.')}
                className="btn-primary w-full py-2.5 text-[10px] font-bold uppercase tracking-widest mt-2 hover:bg-olive/90"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* 4. QUICK ACCESS CATEGORIES */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Employee Directory', category: 'Employees', icon: <Users size={16} /> },
              { title: 'Department List', category: 'Departments', icon: <Building2 size={16} /> },
              { title: 'Role Mapping', category: 'Roles', icon: <Settings size={16} /> },
              { title: 'Active Employees', category: 'Employees', status: 'Active', icon: <UserCheck size={16} /> },
              { title: 'Inactive Employees', category: 'Employees', status: 'Inactive', icon: <UserMinus size={16} /> },
              { title: 'All Records', category: 'All', icon: <LayoutGrid size={16} /> },
            ].map((tile, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setActiveCategory(tile.category);
                  if (tile.status) setStatusFilter(tile.status);
                  else setStatusFilter('All Status');
                }}
                className="p-4 rounded-enterprise border border-border-light bg-white hover:border-olive hover:shadow-sm transition-all text-center flex flex-col items-center gap-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-olive-light/20 flex items-center justify-center text-olive group-hover:scale-110 transition-transform">
                  {tile.icon}
                </div>
                <span className="text-[9px] font-bold text-text-secondary uppercase tracking-tight leading-tight">{tile.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* 3. SEARCH RESULTS SECTION */}
        <main className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-4 bg-olive rounded-full"></span>
              Search Results ({filteredResults.length})
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-olive bg-olive-light/20 rounded border border-olive/10 shadow-sm"><LayoutGrid size={14} /></button>
              <button className="p-1.5 text-gray-400 hover:text-olive transition-colors"><MoreVertical size={14} /></button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredResults.map((result) => (
              <div key={result.id} className="enterprise-card bg-white p-5 border border-border-light shadow-sm hover:border-olive transition-all group">
                {result.type === 'employee' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-olive-light/30 flex items-center justify-center text-olive font-bold text-lg border-2 border-white shadow-sm ring-1 ring-gray-100">
                        {result.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">{result.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border 
                            ${result.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' : 
                              result.status === 'On Leave' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                              'bg-gray-50 text-gray-400 border-gray-100'}
                          `}>
                            {result.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <Briefcase size={10} className="text-olive/60" /> {result.designation}
                          </div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <Building2 size={10} className="text-olive/60" /> {result.dept}
                          </div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <MapPin size={10} className="text-olive/60" /> {result.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] text-gray-400/60 font-bold uppercase tracking-widest mb-1">Employee ID</p>
                       <p className="text-xs font-bold text-olive tracking-wider">{result.empId}</p>
                    </div>
                  </div>
                )}

                {result.type === 'dept' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-enterprise bg-olive flex items-center justify-center text-white shadow-sm">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">{result.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <User size={10} className="text-olive/60" /> HOD: <span className="text-text-secondary">{result.hod}</span>
                          </div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <Users size={10} className="text-olive/60" /> {result.count} Employees
                          </div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            <MapPin size={10} className="text-olive/60" /> {result.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert(`View structure for ${result.name}`)}
                      className="text-[10px] font-bold text-olive uppercase tracking-[0.2em] border border-olive/20 px-4 py-2 rounded shadow-sm hover:bg-olive hover:text-white transition-all"
                    >
                      View Structure
                    </button>
                  </div>
                )}

                {result.type === 'document' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-enterprise bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-olive group-hover:bg-olive-light/20 transition-all border border-gray-100">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">{result.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="px-1.5 py-0.5 rounded bg-gray-100 text-[8px] font-bold text-gray-500 uppercase">{result.fileType}</div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            Module: <span className="text-text-secondary">{result.module}</span>
                          </div>
                          <div className="text-gray-200">|</div>
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            Updated: {result.updatedAt}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 size={16} className="text-green-500" />
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Directory;
