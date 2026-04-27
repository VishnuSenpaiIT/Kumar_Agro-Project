/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Smile, 
  Palette, 
  Save, 
  Info,
  Github,
  Linkedin,
  Globe,
  Droplet,
  HeartPulse,
  Phone,
  User,
  AlertCircle
} from 'lucide-react';

const AdditionalDetails: React.FC = () => {
  return (
    <div id="additional-details-module" className="w-full max-w-5xl space-y-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Additional Personal Details</h1>
        <p className="text-sm text-text-secondary">Enrich your profile with personal preferences and important health/social information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Preferences Card */}
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <Smile size={18} className="text-olive" />
              <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Personal Identity & Interests</h2>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Preferred Nickname</label>
                  <div className="relative group">
                    <Smile size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive transition-colors" />
                    <input 
                      type="text" 
                      placeholder="e.g. Johnny" 
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Blood Group</label>
                  <div className="relative group">
                    <Droplet size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                    <select className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                      <option>O Positive (O+)</option>
                      <option>O Negative (O-)</option>
                      <option>A Positive (A+)</option>
                      <option>A Negative (A-)</option>
                      <option>B Positive (B+)</option>
                      <option>B Negative (B-)</option>
                      <option>AB Positive (AB+)</option>
                      <option>AB Negative (AB-)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Hobbies & Passion Projects</label>
                <div className="relative group">
                  <Palette size={18} className="absolute left-3 top-4 text-gray-400 group-focus-within:text-olive transition-colors" />
                  <textarea 
                    rows={4}
                    placeholder="Tell us what you love doing outside work..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">LinkedIn</label>
                  <div className="relative group">
                    <Linkedin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
                    <input type="text" placeholder="linkedin.com/in/..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-xs focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">GitHub</label>
                  <div className="relative group">
                    <Github size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800" />
                    <input type="text" placeholder="github.com/..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-xs focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Portfolio</label>
                  <div className="relative group">
                    <Globe size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-olive" />
                    <input type="text" placeholder="https://..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-xs focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health & Medical Info Card */}
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
            <div className="bg-red-50/50 px-6 py-4 border-b border-red-100 flex items-center gap-2">
              <HeartPulse size={18} className="text-red-500" />
              <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Health & Medical Information</h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Allergies</label>
                  <input type="text" placeholder="e.g. Peanuts, Penicillin" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-red-200 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Chronic Conditions</label>
                  <input type="text" placeholder="e.g. Hypertension" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-red-200 transition-all" />
                </div>
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-red-700 leading-relaxed font-medium">
                  This information is kept strictly confidential and is only accessible by authorized medical personnel or in case of an emergency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Emergency Contact Card */}
          <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
            <div className="bg-olive px-6 py-4 border-b border-olive/10 flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <h2 className="text-xs font-bold text-white uppercase tracking-widest">Emergency Contact</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Contact Name</label>
                <div className="relative group">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive" />
                  <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Relationship</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all">
                  <option>Spouse</option>
                  <option>Parent</option>
                  <option>Sibling</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Phone Number</label>
                <div className="relative group">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-olive" />
                  <input type="tel" placeholder="+91 00000 00000" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="p-6 bg-olive/5 border border-olive/10 rounded-enterprise">
            <h4 className="text-sm font-bold text-olive mb-2 flex items-center gap-2">
              <Info size={16} />
              Pro Tip
            </h4>
            <p className="text-xs text-olive/80 leading-relaxed">
              Adding your GitHub and Portfolio links can help the HR team highlight your technical contributions for internal awards and recognition programs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-8 border-t border-gray-100">
        <button className="flex items-center gap-2 px-12 py-3.5 bg-olive text-white rounded-button font-bold text-sm shadow-xl shadow-olive/20 hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
          <Save size={18} />
          Save Additional Details
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
