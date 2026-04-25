/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen, Plus, Edit3, Save, X, Users, BarChart3,
  CheckCircle2, Clock, Play, Trash2, ChevronDown, ChevronUp,
  GraduationCap, Award, Target, TrendingUp
} from 'lucide-react';

interface Learner {
  id: number;
  name: string;
  department: string;
  progress: number;
  lastAccessed: string;
  status: 'In Progress' | 'Completed' | 'Not Started';
}

interface LearningModule {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  totalLessons: number;
  learners: Learner[];
}

const initialModules: LearningModule[] = [
  {
    id: 1, title: 'Workplace Safety & Compliance', description: 'Mandatory training on workplace safety protocols, fire drills, and regulatory compliance standards for all employees.',
    category: 'Compliance', duration: '4 Hours', totalLessons: 12,
    learners: [
      { id: 1, name: 'Rahul Sharma', department: 'Operations', progress: 100, lastAccessed: '2026-04-20', status: 'Completed' },
      { id: 2, name: 'Priya Patel', department: 'HR', progress: 75, lastAccessed: '2026-04-22', status: 'In Progress' },
      { id: 3, name: 'Amit Kumar', department: 'Finance', progress: 50, lastAccessed: '2026-04-18', status: 'In Progress' },
      { id: 4, name: 'Sneha Reddy', department: 'IT', progress: 0, lastAccessed: '-', status: 'Not Started' },
    ],
  },
  {
    id: 2, title: 'Leadership & Team Management', description: 'Develop essential leadership qualities, team motivation techniques, and conflict resolution strategies.',
    category: 'Soft Skills', duration: '6 Hours', totalLessons: 18,
    learners: [
      { id: 5, name: 'Vikram Singh', department: 'Sales', progress: 100, lastAccessed: '2026-04-21', status: 'Completed' },
      { id: 6, name: 'Anita Desai', department: 'Marketing', progress: 90, lastAccessed: '2026-04-23', status: 'In Progress' },
      { id: 7, name: 'Rajesh Nair', department: 'Operations', progress: 30, lastAccessed: '2026-04-15', status: 'In Progress' },
    ],
  },
  {
    id: 3, title: 'Advanced Excel & Data Analytics', description: 'Master pivot tables, VLOOKUP, macros, and data visualization techniques for business reporting.',
    category: 'Technical', duration: '8 Hours', totalLessons: 24,
    learners: [
      { id: 8, name: 'Deepika Menon', department: 'Finance', progress: 60, lastAccessed: '2026-04-22', status: 'In Progress' },
      { id: 9, name: 'Suresh Iyer', department: 'HR', progress: 100, lastAccessed: '2026-04-19', status: 'Completed' },
      { id: 10, name: 'Kavita Joshi', department: 'Admin', progress: 0, lastAccessed: '-', status: 'Not Started' },
      { id: 11, name: 'Manoj Tiwari', department: 'IT', progress: 45, lastAccessed: '2026-04-20', status: 'In Progress' },
      { id: 12, name: 'Pooja Gupta', department: 'Sales', progress: 85, lastAccessed: '2026-04-23', status: 'In Progress' },
    ],
  },
  {
    id: 4, title: 'Agricultural Best Practices', description: 'Latest techniques in sustainable farming, crop management, and agro-technology integration for field staff.',
    category: 'Domain', duration: '5 Hours', totalLessons: 15,
    learners: [
      { id: 13, name: 'Ramesh Yadav', department: 'Operations', progress: 100, lastAccessed: '2026-04-17', status: 'Completed' },
      { id: 14, name: 'Sunita Devi', department: 'Operations', progress: 100, lastAccessed: '2026-04-18', status: 'Completed' },
    ],
  },
  {
    id: 5, title: 'Cybersecurity Awareness', description: 'Protect company data with phishing prevention, password hygiene, and secure communication practices.',
    category: 'Compliance', duration: '3 Hours', totalLessons: 10,
    learners: [
      { id: 15, name: 'Arjun Mehta', department: 'IT', progress: 20, lastAccessed: '2026-04-23', status: 'In Progress' },
      { id: 16, name: 'Neha Kapoor', department: 'Finance', progress: 0, lastAccessed: '-', status: 'Not Started' },
      { id: 17, name: 'Rohit Verma', department: 'Admin', progress: 0, lastAccessed: '-', status: 'Not Started' },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Compliance: 'bg-blue-50 text-blue-600 border-blue-100',
  'Soft Skills': 'bg-purple-50 text-purple-600 border-purple-100',
  Technical: 'bg-amber-50 text-amber-600 border-amber-100',
  Domain: 'bg-green-50 text-green-600 border-green-100',
};

const statusStyles: Record<string, string> = {
  Completed: 'bg-green-50 text-green-600 border-green-100',
  'In Progress': 'bg-orange-50 text-orange-600 border-orange-100',
  'Not Started': 'bg-gray-100 text-gray-500 border-gray-200',
};

const LearningManagement: React.FC = () => {
  const [modules, setModules] = useState<LearningModule[]>(initialModules);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', category: '', duration: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newModule, setNewModule] = useState({ title: '', description: '', category: 'Technical', duration: '' });

  const totalLearners = new Set(modules.flatMap(m => m.learners.map(l => l.id))).size;
  const totalCompleted = modules.reduce((sum, m) => sum + m.learners.filter(l => l.status === 'Completed').length, 0);
  const totalEnrolled = modules.reduce((sum, m) => sum + m.learners.length, 0);
  const avgProgress = totalEnrolled > 0 ? Math.round(modules.reduce((sum, m) => sum + m.learners.reduce((s, l) => s + l.progress, 0), 0) / totalEnrolled) : 0;

  const startEdit = (mod: LearningModule) => {
    setEditingId(mod.id);
    setEditForm({ title: mod.title, description: mod.description, category: mod.category, duration: mod.duration });
  };

  const saveEdit = (id: number) => {
    setModules(prev => prev.map(m => m.id === id ? { ...m, ...editForm } : m));
    setEditingId(null);
  };

  const deleteModule = (id: number) => {
    setModules(prev => prev.filter(m => m.id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  const addModule = () => {
    if (!newModule.title.trim()) return;
    const mod: LearningModule = {
      id: Date.now(), title: newModule.title, description: newModule.description,
      category: newModule.category, duration: newModule.duration || '2 Hours',
      totalLessons: 8, learners: [],
    };
    setModules(prev => [...prev, mod]);
    setNewModule({ title: '', description: '', category: 'Technical', duration: '' });
    setShowAddForm(false);
  };

  const stats = [
    { label: 'Total Modules', value: modules.length, icon: <BookOpen />, color: 'text-olive' },
    { label: 'Unique Learners', value: totalLearners, icon: <Users />, color: 'text-blue-500' },
    { label: 'Completions', value: totalCompleted, icon: <Award />, color: 'text-green-500' },
    { label: 'Avg Progress', value: `${avgProgress}%`, icon: <TrendingUp />, color: 'text-amber-500' },
  ];

  return (
    <div id="learning-management-system" className="w-full">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-2 uppercase tracking-widest">Learning Management System</h1>
        <p className="text-text-secondary text-sm">Manage training modules, track learner progress, and monitor course completions.</p>
      </div>

      {/* Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="enterprise-card bg-white p-6 border border-border-light hover:border-olive transition-all shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{s.label}</h3>
                <div className={`p-1.5 bg-olive-light rounded ${s.color}`}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { size: 14 })}
                </div>
              </div>
              <span className="text-2xl font-bold text-text-primary">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-olive rounded-full"></div>
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em]">Training Modules</h2>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest mb-6 transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <Plus size={18} /> Add New Module
        </button>

        {/* Add Form */}
        {showAddForm && (
          <div className="enterprise-card bg-white p-6 mb-6 border-2 border-olive/30 shadow-sm">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">New Training Module</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input className="input-field" placeholder="Module Title *" value={newModule.title} onChange={e => setNewModule({ ...newModule, title: e.target.value })} />
              <select className="input-field" value={newModule.category} onChange={e => setNewModule({ ...newModule, category: e.target.value })}>
                <option>Technical</option><option>Compliance</option><option>Soft Skills</option><option>Domain</option>
              </select>
              <input className="input-field" placeholder="Duration (e.g. 4 Hours)" value={newModule.duration} onChange={e => setNewModule({ ...newModule, duration: e.target.value })} />
              <input className="input-field" placeholder="Description" value={newModule.description} onChange={e => setNewModule({ ...newModule, description: e.target.value })} />
            </div>
            <div className="flex gap-3">
              <button onClick={addModule} className="btn-primary px-5 py-2 text-xs"><Save size={14} /> Save</button>
              <button onClick={() => setShowAddForm(false)} className="btn-secondary px-5 py-2 text-xs"><X size={14} /> Cancel</button>
            </div>
          </div>
        )}

        {/* Module Cards */}
        <div className="flex flex-col gap-4">
          {modules.map(mod => {
            const isExpanded = expandedId === mod.id;
            const isEditing = editingId === mod.id;
            const completedCount = mod.learners.filter(l => l.status === 'Completed').length;
            const modAvg = mod.learners.length > 0 ? Math.round(mod.learners.reduce((s, l) => s + l.progress, 0) / mod.learners.length) : 0;

            return (
              <div key={mod.id} className="enterprise-card bg-white border border-border-light shadow-sm overflow-hidden">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 cursor-pointer" onClick={() => setExpandedId(isExpanded ? null : mod.id)}>
                      {isEditing ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                          <input className="input-field text-sm font-bold" value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} />
                          <select className="input-field text-sm" value={editForm.category} onChange={e => setEditForm({ ...editForm, category: e.target.value })}>
                            <option>Technical</option><option>Compliance</option><option>Soft Skills</option><option>Domain</option>
                          </select>
                          <input className="input-field text-sm" placeholder="Duration" value={editForm.duration} onChange={e => setEditForm({ ...editForm, duration: e.target.value })} />
                          <input className="input-field text-sm" placeholder="Description" value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} />
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-sm font-bold text-text-primary">{mod.title}</h3>
                            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[mod.category] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>{mod.category}</span>
                          </div>
                          <p className="text-xs text-text-secondary mb-3 leading-relaxed">{mod.description}</p>
                        </>
                      )}
                      <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Clock size={12} /> {mod.duration}</span>
                        <span className="flex items-center gap-1"><Target size={12} /> {mod.totalLessons} Lessons</span>
                        <span className="flex items-center gap-1"><Users size={12} /> {mod.learners.length} Learners</span>
                        <span className="flex items-center gap-1"><CheckCircle2 size={12} /> {completedCount} Completed</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isEditing ? (
                        <>
                          <button onClick={() => saveEdit(mod.id)} className="p-2 text-green-500 hover:bg-green-50 rounded transition-colors"><Save size={16} /></button>
                          <button onClick={() => setEditingId(null)} className="p-2 text-gray-400 hover:bg-gray-50 rounded transition-colors"><X size={16} /></button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEdit(mod)} className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded transition-colors"><Edit3 size={16} /></button>
                          <button onClick={() => deleteModule(mod.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"><Trash2 size={16} /></button>
                        </>
                      )}
                      <button onClick={() => setExpandedId(isExpanded ? null : mod.id)} className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded transition-colors">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg Progress</span>
                      <span className="text-[10px] font-bold text-olive">{modAvg}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-olive to-olive-hover rounded-full transition-all duration-500" style={{ width: `${modAvg}%` }} />
                    </div>
                  </div>
                </div>

                {/* Expanded Learner Table */}
                {isExpanded && (
                  <div className="border-t border-gray-100">
                    <div className="px-6 py-3 bg-gray-50/50">
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2"><Users size={12} /> Enrolled Learners</h4>
                    </div>
                    {mod.learners.length === 0 ? (
                      <div className="px-6 py-8 text-center text-xs text-gray-400">No learners enrolled yet.</div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-gray-100">
                              <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</th>
                              <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Department</th>
                              <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Progress</th>
                              <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Accessed</th>
                              <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {mod.learners.map(l => (
                              <tr key={l.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-full bg-olive-light text-olive flex items-center justify-center text-[10px] font-bold">{l.name.split(' ').map(n => n[0]).join('')}</div>
                                    <span className="text-xs font-bold text-text-primary">{l.name}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-3 text-xs text-text-secondary">{l.department}</td>
                                <td className="px-6 py-3">
                                  <div className="flex items-center gap-2 min-w-[120px]">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                      <div className={`h-full rounded-full transition-all ${l.progress === 100 ? 'bg-green-500' : l.progress > 0 ? 'bg-olive' : 'bg-gray-200'}`} style={{ width: `${l.progress}%` }} />
                                    </div>
                                    <span className="text-[10px] font-bold text-text-primary w-8 text-right">{l.progress}%</span>
                                  </div>
                                </td>
                                <td className="px-6 py-3 text-xs text-text-secondary">{l.lastAccessed}</td>
                                <td className="px-6 py-3">
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest ${statusStyles[l.status]}`}>
                                    {l.status === 'Completed' ? <CheckCircle2 size={10} /> : l.status === 'In Progress' ? <Play size={10} /> : <Clock size={10} />}
                                    {l.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default LearningManagement;
