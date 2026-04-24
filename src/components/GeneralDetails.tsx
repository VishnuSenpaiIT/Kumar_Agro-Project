/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  History, 
  Users, 
  GraduationCap, 
  Tag, 
  Palette, 
  Banknote, 
  MoreHorizontal,
  Upload,
  Image as ImageIcon
} from 'lucide-react';

interface DetailSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, icon, children }) => (
  <section className="bg-white border border-border-light rounded-enterprise overflow-hidden mb-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
    <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-3">
      <div className="text-olive">{React.cloneElement(icon as React.ReactElement<any>, { size: 18 })}</div>
      <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-6">
      {children}
    </div>
  </section>
);

const GeneralDetails: React.FC = () => {
  return (
    <div id="general-details-module" className="w-full max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">General Details</h1>
        <p className="text-gray-500">Manage your historical records, family information, and personal preferences.</p>
      </div>

      {/* 1. Experience details */}
      <DetailSection title="Experience details" icon={<History size={18} />}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-gray-50">
            <div>
              <p className="text-sm font-bold text-gray-800">Senior Systems Architect</p>
              <p className="text-xs text-gray-400">Global Tech Solutions • 2018 - 2022</p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-olive-light text-olive rounded">4 Years</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-gray-800">Junior Developer</p>
              <p className="text-xs text-gray-400">StartUp Hub • 2015 - 2018</p>
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded">3 Years</span>
          </div>
        </div>
      </DetailSection>

      {/* 2. Family details */}
      <DetailSection title="Family details" icon={<Users size={18} />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Spouse Name</p>
            <p className="text-sm font-semibold text-gray-700">Jane Doe</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Emergency Contact</p>
            <p className="text-sm font-semibold text-gray-700">+1 (555) 123-4567</p>
          </div>
        </div>
      </DetailSection>

      {/* 3. Education (upload pictures feature) */}
      <DetailSection title="Education" icon={<GraduationCap size={18} />}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Degree Name</label>
              <input 
                type="text" 
                placeholder="e.g. Bachelor of Science" 
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-olive/50 transition-colors"
                readOnly
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Institution / University</label>
              <input 
                type="text" 
                placeholder="e.g. Stanford University" 
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-olive/50 transition-colors"
                readOnly
              />
            </div>
          </div>
          
          <div className="pt-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase block mb-3">Degree Certificates & Transcripts</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Upload Area */}
              <div 
                id="education-upload-zone"
                className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive hover:bg-olive-light transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 group-hover:text-olive transition-colors">
                  <Upload size={18} />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-500 group-hover:text-olive">Click or drag to upload</p>
                  <p className="text-[9px] text-gray-400">PDF, JPG or PNG (max 5MB)</p>
                </div>
              </div>

              {/* Preview Placeholder */}
              <div 
                id="education-preview-placeholder"
                className="h-32 bg-white border border-gray-200 rounded-xl p-3 flex flex-col relative group overflow-hidden"
              >
                <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">
                  <ImageIcon size={32} />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-500 truncate max-w-[120px]">certificate_preview.jpg</span>
                  <span className="text-[9px] font-bold text-olive uppercase">Uploaded</span>
                </div>
                <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="text-xs font-bold text-white bg-olive/80 px-3 py-1.5 rounded-full">View Document</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailSection>

      {/* 4. Family details (Restated as per requirement) */}
      <DetailSection title="Family details" icon={<Users size={18} />}>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-sm text-gray-500">Father's Name</span>
            <span className="text-sm font-semibold text-gray-700">Robert Doe</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-50">
            <span className="text-sm text-gray-500">Mother's Name</span>
            <span className="text-sm font-semibold text-gray-700">Sarah Doe</span>
          </div>
        </div>
      </DetailSection>

      {/* 5. Long known as (nick name) */}
      <DetailSection title="Long known as (nick name)" icon={<Tag size={18} />}>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-olive text-white rounded-full text-sm font-bold shadow-sm">
            Johnny
          </div>
          <p className="text-xs text-gray-400 italic">Commonly used by peers and team members.</p>
        </div>
      </DetailSection>

      {/* 6. Hobbies */}
      <DetailSection title="Hobbies" icon={<Palette size={18} />}>
        <div className="flex flex-wrap gap-2">
          {['Photography', 'Chess', 'Hiking', 'Cooking'].map(hobby => (
            <span key={hobby} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold border border-gray-200">
              {hobby}
            </span>
          ))}
        </div>
      </DetailSection>

      {/* 7. Bank details */}
      <DetailSection title="Bank details" icon={<Banknote size={18} />}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-gray-400 uppercase font-bold">Bank Name</span>
              <span className="text-sm font-semibold text-gray-700">Global Union Bank</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 uppercase font-bold">Account Number</span>
                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] text-gray-500 border border-gray-200 font-bold">SECURE</span>
              </div>
              <span className="text-sm font-mono font-semibold text-gray-700 tracking-wider text-right">**** **** 4592</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-gray-400 uppercase font-bold">IFSC Code</span>
              <span className="text-sm font-semibold text-gray-700">GUB0001234</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-gray-400 uppercase font-bold">Branch</span>
              <span className="text-sm font-semibold text-gray-700">Main Headquarters</span>
            </div>
          </div>
          
          <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
              <Banknote size={16} />
            </div>
            <p className="text-[11px] font-semibold text-amber-800 leading-tight">
              Security Notice: Bank details must be hashed and stored in our encrypted vaults to ensure full data privacy compliance.
            </p>
          </div>
        </div>
      </DetailSection>

      {/* 8. Other details */}
      <DetailSection title="Other details" icon={<MoreHorizontal size={18} />}>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Personal info</label>
              <p className="text-sm font-semibold text-gray-700">Detailed Employee Record #4592</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Driver license</label>
              <p className="text-sm font-semibold text-gray-700 font-mono tracking-wider">ABC-12345-6789</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Appointed on duty</label>
              <p className="text-sm font-semibold text-gray-700">On-Site Operations</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Pan</label>
              <p className="text-sm font-semibold text-gray-700 font-mono italic">BPZPK1234M</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Payroll</label>
              <p className="text-sm font-semibold text-gray-700">Executive Grade 1</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Bonus</label>
              <p className="text-sm font-semibold text-gray-700">Annual Performance (B1)</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Provident fund</label>
              <p className="text-sm font-semibold text-gray-700">UAN: 100912345678</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Labour welfare fund</label>
              <p className="text-sm font-semibold text-gray-700">Applicable (MH-LWF)</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Professional tax</label>
              <p className="text-sm font-semibold text-gray-700">Active Deduction</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Voluntary provident fund</label>
              <p className="text-sm font-semibold text-gray-700">Not Subscribed</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Super annunation</label>
              <p className="text-sm font-semibold text-gray-700 text-gray-400">N/A</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Paymore</label>
              <p className="text-sm font-semibold text-gray-700">Standard Rate</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Posting state</label>
              <p className="text-sm font-semibold text-gray-700">Maharashtra</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase">ABRY applicable</label>
              <p className="text-sm font-semibold text-gray-700">No</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Voter ID + attachment</label>
                <p className="text-sm font-semibold text-gray-700 mb-2">VTR/992/0012/SH</p>
              </div>
              
              <div 
                id="voter-id-upload"
                className="max-w-md p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-between group hover:border-olive hover:bg-olive-light transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-400 group-hover:text-olive shadow-sm">
                    <Upload size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-600">Attach Voter ID Document</p>
                    <p className="text-[9px] text-gray-400">PDF or Scanned Copy</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[10px] font-bold text-gray-500 uppercase tracking-tight group-hover:text-olive">
                  Browse
                </button>
              </div>
            </div>
          </div>
        </div>
      </DetailSection>
    </div>
  );
};

export default GeneralDetails;
