/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Smile, 
  Palette, 
  Save, 
  Info
} from 'lucide-react';

const AdditionalDetails: React.FC = () => {
  return (
    <div id="additional-details-module" className="w-full max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Additional Personal Details</h1>
        <p className="text-sm text-text-secondary">Tell us a bit more about yourself outside of work.</p>
      </div>

      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Info size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Personal Preferences</h2>
        </div>
        
        <div className="p-8">
          <div className="space-y-8">
            {/* Nick Name Field */}
            <div className="flex flex-col gap-2 max-w-md">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Long known as (Nick Name)</label>
              <div className="relative">
                <Smile size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Johnny" 
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all"
                />
              </div>
              <p className="text-[10px] text-gray-400 italic mt-1">This name may be used for internal communications and team shout-outs.</p>
            </div>

            {/* Hobbies Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Hobbies & Interests</label>
              <div className="relative">
                <Palette size={18} className="absolute left-3 top-4 text-gray-400" />
                <textarea 
                  rows={5}
                  placeholder="e.g. Photography, Mountain Hiking, Playing Chess, Cooking Italian food..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 focus:ring-1 focus:ring-olive/20 transition-all resize-none"
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Photography', 'Chess', 'Hiking'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-olive-light text-olive text-[10px] font-bold uppercase rounded-full border border-olive/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex justify-end">
            <button className="flex items-center gap-2 px-10 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-md hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
              <Save size={18} />
              Save Details
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Help Card */}
      <div className="mt-8 p-5 bg-blue-50/50 border border-blue-100 rounded-enterprise flex items-start gap-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm shrink-0">
          <Info size={20} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-blue-900 mb-1">Why this matters?</h4>
          <p className="text-xs text-blue-700 leading-relaxed">
            Sharing your nickname and hobbies helps in building a more connected and vibrant workplace culture. It allows team members to know the person behind the professional role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
