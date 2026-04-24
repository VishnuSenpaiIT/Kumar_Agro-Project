/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Folder, 
  FileText, 
  Shield, 
  Clock, 
  ChevronRight,
  Info,
  BookOpen,
  ArrowLeft,
  Calendar,
  Tag
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  updatedAt: string;
  content: {
    overview: string;
    guidelines: string;
    rules: string[];
    exceptions: string;
  };
}

const Knowbase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const categories = [
    'All',
    'HR Policies',
    'IT Guidelines',
    'Finance Procedures',
    'Operations SOP',
    'Safety Guidelines',
    'Training Material',
    'General Notes'
  ];

  const articles: Article[] = [
    {
      id: 'art-1',
      title: 'Employee Attendance Policy',
      category: 'HR Policies',
      description: 'Comprehensive guidelines regarding working hours, shifts, attendance tracking, and leave application procedures.',
      updatedAt: 'Apr 12, 2026',
      content: {
        overview: 'This policy outlines the expectations for employee attendance and punctuality. Regular attendance is essential for the effective operation of our departments.',
        guidelines: 'Employees are expected to be at their workstations and ready to work at their scheduled start time. Attendance is tracked through the digital ESS portal.',
        rules: [
          'Monthly attendance reports are generated on the 1st of every month.',
          'Employees must log in/out for every shift.',
          'Late arrivals exceeding 30 minutes must be reported to the immediate supervisor.',
          'Unexplained absences for 3 consecutive days will be considered job abandonment.'
        ],
        exceptions: 'Exceptions may be made for medical emergencies or pre-approved bereavement leave with valid documentation.'
      }
    },
    {
      id: 'art-2',
      title: 'Remote Work Infrastructure SOP',
      category: 'IT Guidelines',
      description: 'Step-by-step instructions for setting up secure VPN connections and remote workstation configurations.',
      updatedAt: 'Mar 15, 2026',
      content: {
        overview: 'To maintain productivity while working remotely, employees must follow specific technical setups to ensure security and connectivity.',
        guidelines: 'All remote work must be conducted through the company-provided VPN. Personal devices must meet minimum security standards before access is granted.',
        rules: [
          'Password rotation is required every 90 days.',
          'Multi-factor authentication (MFA) is mandatory for all system logins.',
          'Work-related data must not be stored on personal cloud services.',
          'IT support is available 24/7 via the helpdesk portal.'
        ],
        exceptions: 'Critical projects requiring offline work may be granted temporary exemptions by the Head of IT.'
      }
    },
    {
      id: 'art-3',
      title: 'Travel Reimbursement Process',
      category: 'Finance Procedures',
      description: 'Detailed procedure for submitting travel expense claims, required documentation, and approval workflows.',
      updatedAt: 'Feb 20, 2026',
      content: {
        overview: 'Our finance policy ensures fair and prompt reimbursement for legitimate business-related travel expenses.',
        guidelines: 'Reimbursement requests must be submitted within 15 days of completion of travel. Digital copies of all receipts must be uploaded for verification.',
        rules: [
          'Air travel must be booked through the enterprise travel portal.',
          'Daily per diem limits vary by location city grade.',
          'Personal expenses incurred during business trips are not reimbursable.',
          'Manager approval is required before submission to finance.'
        ],
        exceptions: 'Emergency travel expenses without prior portal booking require special sign-off from the CFO.'
      }
    },
    {
      id: 'art-4',
      title: 'Workplace Safety & Health SOP',
      category: 'Safety Guidelines',
      description: 'Emergency protocols, first-aid procedures, and hazard reporting standards for office and site locations.',
      updatedAt: 'Jan 10, 2026',
      content: {
        overview: 'We are committed to providing a safe and healthy work environment for all employees and visitors.',
        guidelines: 'Every employee is responsible for maintaining a hazard-free work space. Regular safety audits are conducted quarterly.',
        rules: [
          'Fire drills are mandatory and conducted bi-annually.',
          'All workplace injuries must be reported within 1 hour.',
          'Smoking is strictly prohibited inside the office premises.',
          'Safety gear must be worn at all times in designated high-risk zones.'
        ],
        exceptions: 'In extreme weather conditions, the workplace safety officer may issue mandatory evacuation or work-from-home orders.'
      }
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedArticle = articles.find(a => a.id === selectedArticleId);

  return (
    <div id="knowbase-module" className="w-full max-w-7xl mx-auto flex flex-col gap-6">
      {/* 1. HEADER SEARCH SECTION */}
      <section id="kb-header" className="bg-white p-8 rounded-enterprise border border-border-light shadow-sm">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-text-primary uppercase tracking-[0.2em] mb-2 font-sans">Knowbase</h1>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">Centralized Knowledge Repository</p>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search policies, SOPs, documents..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-enterprise border border-border-light shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-olive/20 focus:border-olive transition-all text-sm font-medium"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary px-6 py-2 text-[10px] font-bold uppercase tracking-widest">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* 2. CATEGORY SIDEBAR */}
        <aside id="kb-sidebar" className="lg:col-span-3 space-y-2 sticky top-24">
          <h2 className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Categories</h2>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedArticleId(null);
              }}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-enterprise transition-all duration-200 group
                ${selectedCategory === cat 
                  ? 'bg-olive text-white shadow-sm' 
                  : 'bg-white text-text-secondary border border-border-light hover:border-olive hover:text-olive'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Folder size={16} className={selectedCategory === cat ? 'text-white' : 'text-olive/60'} />
                <span className="text-xs font-bold uppercase tracking-wide">{cat}</span>
              </div>
              <ChevronRight size={14} className={selectedCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
            </button>
          ))}
        </aside>

        {/* 3. ARTICLE LISTING OR PREVIEW */}
        <main id="kb-main-content" className="lg:col-span-9">
          {selectedArticleId && selectedArticle ? (
            /* 4. ARTICLE PREVIEW PANEL */
            <section id="kb-article-view" className="bg-white rounded-enterprise border border-border-light shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="border-b border-gray-100 p-6 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedArticleId(null)}
                  className="flex items-center gap-2 text-[10px] font-bold text-olive uppercase tracking-widest hover:underline"
                >
                  <ArrowLeft size={14} /> Back to List
                </button>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                     <Calendar size={14} className="text-olive/60" /> Updated: {selectedArticle.updatedAt}
                   </div>
                   <span className="px-2 py-0.5 rounded-full bg-olive-light/30 border border-olive/10 text-[9px] font-bold text-olive uppercase tracking-widest">
                     {selectedArticle.category}
                   </span>
                </div>
              </div>
              
              <div className="p-10 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-text-primary mb-8 tracking-tight leading-tight">{selectedArticle.title}</h2>
                
                <div className="space-y-10">
                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-olive uppercase tracking-[0.2em] border-b border-gray-100 pb-2">
                       <Info size={16} /> Overview
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">
                      {selectedArticle.content.overview}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-olive uppercase tracking-[0.2em] border-b border-gray-100 pb-2">
                       <BookOpen size={16} /> Guidelines
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">
                      {selectedArticle.content.guidelines}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-olive uppercase tracking-[0.2em] border-b border-gray-100 pb-2">
                       <Shield size={16} /> Rules
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedArticle.content.rules.map((rule, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-text-secondary font-medium items-start bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive text-white flex items-center justify-center text-[10px] font-bold">{idx + 1}</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="flex items-center gap-2 text-xs font-bold text-olive uppercase tracking-[0.2em] border-b border-gray-100 pb-2">
                       <Tag size={16} /> Exceptions
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium italic bg-olive-light/10 p-4 rounded-lg border-l-4 border-olive">
                      {selectedArticle.content.exceptions}
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-gray-400">
                   <div className="flex items-center gap-2">
                     <Clock size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Doc-ID: {selectedArticle.id}</span>
                   </div>
                   <button className="btn-primary px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                     Print Article
                   </button>
                </div>
              </div>
            </section>
          ) : (
            /* 3. ARTICLE LISTING SECTION */
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                  Articles in {selectedCategory} ({filteredArticles.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => setSelectedArticleId(article.id)}
                    className="bg-white p-6 rounded-enterprise border border-border-light shadow-sm hover:border-olive group cursor-pointer transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2 py-0.5 rounded-full bg-olive-light/30 text-[8px] font-bold text-olive uppercase tracking-widest border border-olive/10">
                          {article.category}
                        </span>
                        <div className="text-gray-300 group-hover:text-olive transition-colors">
                          <BookOpen size={16} />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-text-primary mb-2 group-hover:text-olive transition-colors tracking-tight">
                        {article.title}
                      </h3>
                      <p className="text-[11px] text-text-secondary leading-relaxed line-clamp-2 font-medium mb-4">
                        {article.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        <Clock size={12} className="text-olive/50" /> {article.updatedAt}
                      </div>
                      <span className="text-[9px] font-bold text-olive uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        View <ChevronRight size={10} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="bg-white py-20 rounded-enterprise border border-border-light text-center text-gray-400">
                  <FileText size={48} className="mx-auto mb-4 opacity-10" />
                  <p className="text-xs font-bold uppercase tracking-widest">No articles found in this category.</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Footer Info */}
      <div className="mt-8 p-6 bg-white border border-border-light rounded-enterprise flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-olive-light/20 rounded-full flex items-center justify-center text-olive ring-4 ring-olive-light/5">
            <Info size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-tight">Can't find a policy?</h4>
            <p className="text-[10px] text-text-secondary font-medium">Technical assistance available 24/7. Contact IT Support for system-related issues.</p>
          </div>
        </div>
        <button className="btn-secondary px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest border-olive/20 text-olive">
          Request Assistance
        </button>
      </div>
    </div>
  );
};

export default Knowbase;

