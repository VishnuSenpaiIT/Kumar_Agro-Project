/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Plus, 
  Edit3, 
  Trash2, 
  School, 
  Calendar, 
  Award, 
  Upload, 
  FileText, 
  Eye,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Globe,
  Star,
  Layers,
  ChevronRight,
  MoreVertical,
  Search
} from 'lucide-react';

const EducationDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academic' | 'certifications' | 'skills' | 'languages'>('academic');

  const tabs = [
    { id: 'academic', label: 'Academic Qualifications', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills & Competencies', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Globe },
  ] as const;

  return (
    <div id="education-details-module" className="w-full max-w-6xl animate-in fade-in duration-700">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center text-olive">
              <GraduationCap size={20} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Education & Qualifications</h1>
          </div>
          <p className="text-sm text-text-secondary">Manage your academic background, certifications, and professional skills.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-border-light shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-olive text-white shadow-md' 
                  : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'academic' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          {/* Add Education Section */}
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus size={18} className="text-olive" />
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add New Qualification</h2>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex h-2 w-2 rounded-full bg-olive animate-pulse"></span>
                <span className="text-[10px] font-bold text-olive uppercase tracking-tight">Active Session</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Degree / Qualification Name</label>
                  <div className="relative group">
                    <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. Master of Science in Data Engineering" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Field of Study / Major</label>
                  <div className="relative group">
                    <BookOpen size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. Computer Science" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Institution / School</label>
                  <div className="relative group">
                    <School size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. Indian Institute of Technology, Bombay" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">University / Board</label>
                  <div className="relative group">
                    <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. IIT Bombay (Autonomous)" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Start Date</label>
                  <div className="relative group">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">End Date (or expected)</label>
                  <div className="relative group">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Grade / CGPA</label>
                  <div className="relative group">
                    <Award size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. 9.5 / 10" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Study Mode</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-4 focus:ring-olive/5 transition-all">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Distance Learning</option>
                    <option>Executive</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-lg shadow-olive/20 hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
                    <Plus size={18} />
                    Save Qualification
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-text-secondary rounded-button font-bold text-sm hover:bg-gray-200 transition-all">
                    Discard
                  </button>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">PDF</div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">JPG</div>
                  </div>
                  <button className="text-xs font-bold text-olive hover:underline flex items-center gap-1">
                    <Upload size={14} />
                    Bulk Upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline / List */}
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-olive" />
                <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Academic History</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs focus:outline-none focus:border-olive/50 w-40 md:w-60" />
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {/* Item 1 */}
              <div className="p-6 hover:bg-gray-50/50 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-olive-light flex flex-col items-center justify-center border border-olive/10 group-hover:bg-olive group-hover:text-white transition-all">
                    <span className="text-[10px] font-bold uppercase opacity-60">Year</span>
                    <span className="text-sm font-black">2022</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-text-primary group-hover:text-olive transition-colors">Master of Computer Applications</h3>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-olive hover:border-olive transition-all"><Edit3 size={14} /></button>
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-200 transition-all"><Trash2 size={14} /></button>
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500"><MoreVertical size={14} /></button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-text-secondary">
                      <span className="flex items-center gap-1.5"><School size={14} className="text-gray-400" /> Stanford University, California</span>
                      <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-gray-400" /> Specialization: Artificial Intelligence</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-olive" /> 3.9 / 4.0 GPA</span>
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-100 flex items-center gap-1">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-text-secondary group/file cursor-pointer hover:bg-olive/10 hover:text-olive transition-all">
                        <FileText size={14} className="text-gray-400 group-hover/file:text-olive" />
                        Degree_Certificate_Final.pdf
                        <Eye size={12} className="ml-1 opacity-0 group-hover/file:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-text-secondary group/file cursor-pointer hover:bg-olive/10 hover:text-olive transition-all">
                        <FileText size={14} className="text-gray-400 group-hover/file:text-olive" />
                        Transcripts_Stanford.pdf
                        <Eye size={12} className="ml-1 opacity-0 group-hover/file:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-6 hover:bg-gray-50/50 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-gray-100 flex flex-col items-center justify-center border border-gray-200 group-hover:bg-olive group-hover:text-white group-hover:border-olive transition-all">
                    <span className="text-[10px] font-bold uppercase opacity-60">Year</span>
                    <span className="text-sm font-black">2020</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-text-primary group-hover:text-olive transition-colors">Bachelor of Technology (Computer Science)</h3>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-olive hover:border-olive transition-all"><Edit3 size={14} /></button>
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-200 transition-all"><Trash2 size={14} /></button>
                        <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500"><MoreVertical size={14} /></button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-text-secondary">
                      <span className="flex items-center gap-1.5"><School size={14} className="text-gray-400" /> Indian Institute of Technology, Delhi</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-olive" /> 9.2 CGPA</span>
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-100 flex items-center gap-1">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-text-secondary group/file cursor-pointer hover:bg-olive/10 hover:text-olive transition-all">
                        <FileText size={14} className="text-gray-400 group-hover/file:text-olive" />
                        BTech_Degree.pdf
                        <Eye size={12} className="ml-1 opacity-0 group-hover/file:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'certifications' && (
        <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6">
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Professional Certifications</h2>
                <p className="text-sm text-text-secondary">Validate your expertise with recognized credentials.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-olive text-white rounded-button font-bold text-xs shadow-md hover:bg-olive/90 transition-all">
                <Plus size={16} />
                Add Certification
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  name: 'AWS Certified Solutions Architect', 
                  org: 'Amazon Web Services', 
                  date: 'Dec 2023', 
                  id: 'AWS-SA-129384', 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                  color: 'bg-orange-50' 
                },
                { 
                  name: 'Google Professional Data Engineer', 
                  org: 'Google Cloud', 
                  date: 'Oct 2023', 
                  id: 'GCP-DE-449281', 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
                  color: 'bg-blue-50' 
                },
                { 
                  name: 'Microsoft Certified: Azure Fundamentals', 
                  org: 'Microsoft', 
                  date: 'Aug 2022', 
                  id: 'AZ-900-3321', 
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
                  color: 'bg-sky-50' 
                },
                { 
                  name: 'Certified Scrum Master (CSM)', 
                  org: 'Scrum Alliance', 
                  date: 'Jan 2022', 
                  id: 'CSM-99281', 
                  icon: 'https://www.scrumalliance.org/ScrumAlliance/media/ScrumAlliance/Badges/CSM_Badge.png',
                  color: 'bg-green-50' 
                },
              ].map((cert, i) => (
                <div key={i} className="flex gap-4 p-5 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-olive/20 transition-all group relative overflow-hidden">
                  <div className={`w-14 h-14 rounded-xl ${cert.color} flex items-center justify-center flex-shrink-0 border border-gray-50`}>
                    {cert.icon.startsWith('http') ? (
                      <img src={cert.icon} alt={cert.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <Award className="text-olive" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-text-primary mb-1 group-hover:text-olive transition-colors">{cert.name}</h3>
                    <p className="text-xs text-text-secondary mb-3">{cert.org} • {cert.date}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-500">ID: {cert.id}</span>
                      <button className="text-[10px] font-bold text-olive uppercase tracking-widest flex items-center gap-1 hover:underline">
                        <ExternalLink size={10} /> Verify
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'skills' && (activeTab === 'skills' && (
        <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6">
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm p-8">
             <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Skills & Competencies</h2>
                <p className="text-sm text-text-secondary">Highlight your technical and interpersonal strengths.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-olive text-white rounded-button font-bold text-xs shadow-md hover:bg-olive/90 transition-all">
                <Plus size={16} />
                Add Skill
              </button>
            </div>

            <div className="space-y-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-black text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-olive rounded-full"></div>
                  Technical Proficiency
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'React / Next.js', level: 90, color: 'bg-blue-500' },
                    { name: 'TypeScript', level: 85, color: 'bg-sky-600' },
                    { name: 'Node.js / Express', level: 75, color: 'bg-green-600' },
                    { name: 'Python (Data Science)', level: 80, color: 'bg-yellow-600' },
                    { name: 'PostgreSQL / MongoDB', level: 70, color: 'bg-indigo-600' },
                    { name: 'Docker & Kubernetes', level: 65, color: 'bg-blue-400' },
                  ].map((skill, i) => (
                    <div key={i} className="p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:border-olive/20 transition-all">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-text-primary">{skill.name}</span>
                        <span className="text-[10px] font-bold text-olive">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xs font-black text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-olive rounded-full"></div>
                  Tools & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Jira', 'Figma', 'AWS', 'VS Code', 'Postman', 'Slack', 'Jenkins', 'Splunk', 'Grafana'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-text-secondary hover:border-olive hover:text-olive hover:bg-olive-light transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h3 className="text-xs font-black text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-olive rounded-full"></div>
                  Professional & Soft Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Leadership', rating: 5 },
                    { name: 'Communication', rating: 5 },
                    { name: 'Problem Solving', rating: 4 },
                    { name: 'Teamwork', rating: 5 },
                    { name: 'Public Speaking', rating: 3 },
                    { name: 'Critical Thinking', rating: 4 },
                    { name: 'Time Management', rating: 5 },
                    { name: 'Mentoring', rating: 4 },
                  ].map((skill, i) => (
                    <div key={i} className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-2xl text-center">
                      <span className="text-xs font-bold text-text-primary mb-2">{skill.name}</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={10} 
                            className={`${star <= skill.rating ? 'fill-olive text-olive' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeTab === 'languages' && (
        <div className="animate-in slide-in-from-bottom-4 duration-500">
           <div className="bg-white border border-border-light rounded-enterprise shadow-sm p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Languages</h2>
                <p className="text-sm text-text-secondary">Global communication proficiency.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-olive text-white rounded-button font-bold text-xs shadow-md hover:bg-olive/90 transition-all">
                <Plus size={16} />
                Add Language
              </button>
            </div>

            <div className="overflow-hidden border border-gray-100 rounded-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Language</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Read</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Write</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Speak</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Proficiency</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: 'English', read: true, write: true, speak: true, level: 'Native / Bilingual' },
                    { name: 'Hindi', read: true, write: true, speak: true, level: 'Full Professional' },
                    { name: 'Marathi', read: true, write: true, speak: true, level: 'Professional Working' },
                    { name: 'German', read: true, write: false, speak: false, level: 'Elementary' },
                    { name: 'Spanish', read: true, write: true, speak: true, level: 'Limited Working' },
                  ].map((lang, i) => (
                    <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-text-primary">{lang.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          {lang.read ? <CheckCircle2 size={16} className="text-olive" /> : <div className="w-4 h-4 rounded-full border border-gray-200"></div>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          {lang.write ? <CheckCircle2 size={16} className="text-olive" /> : <div className="w-4 h-4 rounded-full border border-gray-200"></div>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          {lang.speak ? <CheckCircle2 size={16} className="text-olive" /> : <div className="w-4 h-4 rounded-full border border-gray-200"></div>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            lang.level.includes('Native') ? 'bg-olive text-white' : 
                            lang.level.includes('Full') ? 'bg-olive/20 text-olive' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {lang.level}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                           <button className="p-1.5 text-gray-400 hover:text-olive transition-colors"><Edit3 size={14} /></button>
                           <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationDetails;
