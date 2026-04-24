/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MapPin, 
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  History as HistoryIcon,
  ChevronRight,
  Download,
  Plus,
  ArrowRight,
  X,
  Star,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';

interface CandidateProfileDetailProps {
  onCancel?: () => void;
}

const CandidateProfileDetail: React.FC<CandidateProfileDetailProps> = ({ onCancel }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const candidate = {
    name: 'Alice Henderson',
    position: 'Senior Java Developer',
    stage: 'Interview',
    status: 'In Progress',
    email: 'alice.henderson@example.com',
    phone: '+1 (555) 012-3456',
    experience: '8 Years',
    location: 'New York, USA',
    appliedDate: 'Oct 15, 2025',
    summary: 'Senior Java Developer with 8 years of experience in building scalable backend systems. Expert in Spring Boot, Microservices, and Cloud architecture. Proven track record of leading development teams and delivering high-quality software solutions.',
    skills: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Kubernetes', 'SQL', 'System Design']
  };

  const interviewNotes = [
    { author: 'Sarah Williams', date: 'Oct 18, 2025', text: 'Strong technical foundations. Answered all architectural questions with depth and clarity. Highly recommended for the next round.' },
    { author: 'Marcus Thorne', date: 'Oct 20, 2025', text: 'Excellent communication skills. Demonstrated great problem-solving abilities during the live coding session.' }
  ];

  const evaluations = [
    { label: 'Technical Skills', rating: 90 },
    { label: 'Communication', rating: 85 },
    { label: 'Experience Fit', rating: 95 }
  ];

  const history = [
    { event: 'Applied', date: 'Oct 15, 2025', status: 'completed' },
    { event: 'Shortlisted', date: 'Oct 16, 2025', status: 'completed' },
    { event: 'Interviewed', date: 'Oct 20, 2025', status: 'completed' },
    { event: 'Final Stage', date: 'Pending', status: 'current' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">Profile Summary</h3>
              <p className="text-sm text-text-secondary leading-relaxed bg-gray-50 p-4 rounded-enterprise border border-gray-100 italic">
                "{candidate.summary}"
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-olive-light/20 text-olive border border-olive/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Resume':
        return (
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-100 rounded-enterprise bg-gray-50/30">
            <div className="w-16 h-16 bg-white rounded-enterprise shadow-sm border border-gray-100 flex items-center justify-center mb-4 text-olive">
              <FileText size={32} />
            </div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-1">Alice_Henderson_Resume.pdf</h3>
            <p className="text-xs text-text-secondary mb-6 lowercase">Updated 2 days ago • 1.2 MB</p>
            <button className="btn-secondary flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest">
              <Download size={14} />
              Download Resume
            </button>
          </div>
        );
      case 'Interview Notes':
        return (
          <div className="space-y-4">
            {interviewNotes.map((note, index) => (
              <div key={index} className="bg-white border border-gray-100 p-4 rounded-enterprise shadow-sm hover:border-olive transition-all">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-olive-light text-olive flex items-center justify-center text-[10px] font-bold">
                      {note.author.charAt(0)}
                    </div>
                    <span className="text-[10px] font-bold text-text-primary uppercase tracking-widest">{note.author}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase">{note.date}</span>
                </div>
                <p className="text-xs text-text-secondary leading-normal">{note.text}</p>
              </div>
            ))}
            <button className="w-full py-4 border border-dashed border-gray-200 rounded-enterprise text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:border-olive hover:text-olive transition-all flex items-center justify-center gap-2">
              <Plus size={14} />
              Add New Interview Note
            </button>
          </div>
        );
      case 'Evaluation':
        return (
          <div className="space-y-8 p-4">
            {evaluations.map((evalItem, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{evalItem.label}</span>
                  <span className="text-[11px] font-bold text-olive">{evalItem.rating}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-olive rounded-full" 
                    style={{ width: `${evalItem.rating}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="bg-olive/5 p-4 rounded-enterprise border border-olive/10 text-center">
              <p className="text-[10px] font-bold text-olive uppercase tracking-widest mb-1">Overall Recommendation</p>
              <p className="text-lg font-bold text-text-primary">Strong Hire</p>
            </div>
          </div>
        );
      case 'History':
        return (
          <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
            {history.map((item, index) => (
              <div key={index} className="relative">
                <div className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${
                  item.status === 'completed' ? 'bg-olive text-white' : 'bg-gray-200'
                }`}>
                  {item.status === 'completed' && <CheckCircle2 size={12} />}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-1">{item.event}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selected': return 'bg-green-50 text-green-600 border-green-100';
      case 'In Progress': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Rejected': return 'bg-red-50 text-red-600 border-red-100';
      case 'On Hold': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div id="candidate-profile-view" className="w-full max-w-7xl mx-auto py-4">
      {/* 1. Profile Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-olive-light/20 border-4 border-white shadow-md flex items-center justify-center text-olive relative">
            <User size={48} />
            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${getStatusColor(candidate.status).split(' ')[0]}`}>
               <div className={`w-2 h-2 rounded-full ${getStatusColor(candidate.status).split(' ')[1].replace('text', 'bg')}`}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-text-primary tracking-tight">{candidate.name}</h1>
              <span className={`px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${getStatusColor(candidate.status)}`}>
                {candidate.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-text-secondary">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <Briefcase size={14} className="text-olive" />
                {candidate.position}
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-olive">
                <ChevronRight size={14} />
                {candidate.stage}
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* 2. Candidate Overview Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <Mail size={14} />, label: 'Email', value: candidate.email },
              { icon: <Phone size={14} />, label: 'Phone', value: candidate.phone },
              { icon: <Star size={14} />, label: 'Experience', value: candidate.experience },
              { icon: <MapPin size={14} />, label: 'Location', value: candidate.location },
              { icon: <Calendar size={14} />, label: 'Applied Date', value: candidate.appliedDate },
            ].map((item, i) => (
              <div key={i} className="enterprise-card bg-white p-4 border border-border-light shadow-sm flex flex-col items-center text-center">
                <div className="text-olive mb-2">{item.icon}</div>
                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
                <p className="text-[11px] font-bold text-text-primary truncate w-full">{item.value}</p>
              </div>
            ))}
          </div>

          {/* 3. Details Tabs Section */}
          <div className="enterprise-card bg-white p-0 border border-border-light shadow-sm overflow-hidden flex flex-col min-h-[450px]">
            <div className="flex items-center bg-gray-50/50 border-b border-gray-100">
              {['Overview', 'Resume', 'Interview Notes', 'Evaluation', 'History'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-olive' : 'text-gray-400 hover:text-text-primary'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="p-8">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* 4. Action Panel */}
        <div className="space-y-6">
          <div className="enterprise-card bg-white p-6 border border-border-light shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-olive rounded-full"></div>
              Hiring Actions
            </h3>
            
            <button className="btn-primary w-full py-3.5 flex items-center justify-between px-6 text-xs font-bold uppercase tracking-widest group">
              Move to Next Stage
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full py-3.5 flex items-center justify-center gap-2 px-6 text-xs font-bold uppercase tracking-widest border border-gray-200 text-text-secondary hover:bg-gray-50 transition-colors rounded-button">
              Schedule Interview
              <Calendar size={16} />
            </button>
            
            <button className="w-full py-3.5 flex items-center justify-center gap-2 px-6 text-xs font-bold uppercase tracking-widest border border-gray-200 text-text-secondary hover:bg-gray-50 transition-colors rounded-button">
              Add Note
              <MessageSquare size={16} />
            </button>
            
            <div className="pt-6 border-t border-gray-100">
              <button className="w-full py-3.5 flex items-center justify-center gap-2 px-6 text-xs font-bold uppercase tracking-widest border border-red-100 text-red-500 hover:bg-red-50 transition-colors rounded-button">
                Reject Candidate
                <XCircle size={16} />
              </button>
            </div>
          </div>

          <div className="enterprise-card bg-olive/5 p-6 border border-olive/10 shadow-sm">
             <div className="flex items-center gap-2 mb-4">
                <BarChart3 size={16} className="text-olive" />
                <h4 className="text-[10px] font-bold text-olive uppercase tracking-widest">Candidate Score</h4>
             </div>
             <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-text-primary">8.8 / 10</span>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase font-bold tracking-widest">Top 5%</span>
             </div>
             <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-olive rounded-full" style={{ width: '88%' }}></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileDetail;
