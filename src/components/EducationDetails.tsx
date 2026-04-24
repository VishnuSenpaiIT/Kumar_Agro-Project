/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Eye
} from 'lucide-react';

const EducationDetails: React.FC = () => {
  return (
    <div id="education-details-module" className="w-full max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Education Details</h1>
        <p className="text-sm text-text-secondary">Keep your academic records and certifications documented.</p>
      </div>

      {/* 1. ADD EDUCATION FORM */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden mb-10">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Plus size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add Education</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Degree / Qualification</label>
              <div className="relative">
                <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Master of Computer Applications" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Institution Name</label>
              <div className="relative">
                <School size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Stanford University" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Year of Passing</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="number" 
                  placeholder="e.g. 2022" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Percentage / Grade</label>
              <div className="relative">
                <Award size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. 9.2 CGPA" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* UPLOAD FEATURE */}
          <div className="mb-10">
            <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight block mb-3">Upload Certificate</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                id="education-upload-dropzone"
                className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive hover:bg-olive-light transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 group-hover:text-olive transition-colors">
                  <Upload size={18} />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-600 group-hover:text-olive">Drag and drop file here</p>
                  <p className="text-[9px] text-gray-400">PDF, JPG or PNG (max 5MB)</p>
                </div>
              </div>

              {/* File Preview Placeholder */}
              <div className="h-32 bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-4 relative group overflow-hidden">
                <div className="w-20 h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">
                  <FileText size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary mb-0.5">degree_certificate.pdf</p>
                  <p className="text-[10px] text-gray-400">2.4 MB • Uploaded</p>
                  <button className="mt-2 text-[10px] font-bold text-olive uppercase tracking-widest hover:underline">Remove</button>
                </div>
                <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white/90 p-2 rounded-full text-text-primary hover:bg-white">
                     <Eye size={16} />
                   </button>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-sm hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
            <Plus size={18} />
            Add Education
          </button>
        </div>
      </div>

      {/* 2. EDUCATION LIST TABLE */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <GraduationCap size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Education List</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Degree</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Institution</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Year</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Grade</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Certificate</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">Bachelor of Technology</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary">MIT, Manipal</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-primary font-semibold">2018</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-olive font-bold">8.5 CGPA</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-[10px] font-bold text-gray-600 uppercase hover:bg-olive-light hover:text-olive hover:border-olive transition-all">
                      <Eye size={12} />
                      View
                    </button>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-text-primary">HSC (Science)</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary">State Board College</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-primary font-semibold">2014</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-olive font-bold">92.4 %</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-[10px] font-bold text-gray-600 uppercase hover:bg-olive-light hover:text-olive hover:border-olive transition-all">
                      <Eye size={12} />
                      View
                    </button>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
