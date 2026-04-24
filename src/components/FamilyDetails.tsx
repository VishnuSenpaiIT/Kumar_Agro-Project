/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  User, 
  Heart, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Stethoscope, 
  IdCard, 
  AlertCircle, 
  Upload, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye,
  Calendar,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const FamilyDetails: React.FC = () => {
  return (
    <div id="family-details-detailed" className="w-full max-w-6xl space-y-8 pb-20">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-1">Family Details</h1>
        <p className="text-sm text-text-secondary">Manage your dependents, insurance coverage, and emergency contacts.</p>
      </div>

      {/* 3. EMERGENCY CONTACT HIGHLIGHT */}
      <div className="bg-red-50 border border-red-100 rounded-enterprise p-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm border border-red-50">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Primary Emergency Contact</p>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-text-primary">Robert Doe</span>
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase">Father</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-red-400" />
            <span className="text-sm font-bold text-text-primary">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 border-l border-red-200 pl-6">
            <Mail size={16} className="text-red-400" />
            <span className="text-sm font-bold text-text-primary">robert.doe@email.com</span>
          </div>
        </div>
      </div>

      {/* 1. ADD FAMILY MEMBER FORM (EXPANDED) */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Plus size={18} className="text-olive" />
          <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Add Family Member</h2>
        </div>
        
        <div className="p-8 space-y-10">
          {/* GROUP: BASIC INFO */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-olive/30"></span> Basic Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="flex flex-col gap-1.5 lg:col-span-2">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Full Name</label>
                <input type="text" placeholder="e.g. Jane Doe" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Relationship</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Gender</label>
                <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Date of Birth</label>
                <input type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
              </div>
            </div>
          </div>

          {/* GROUP: CONTACT & DEPENDENCY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Contact Info
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="+91 00000 00000" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" placeholder="email@example.com" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Dependency Details
              </h3>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <input type="checkbox" id="is-dependent" className="w-4 h-4 accent-olive cursor-pointer" />
                  <label htmlFor="is-dependent" className="text-xs font-bold text-text-primary cursor-pointer select-none">Is Dependent?</label>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <input type="checkbox" id="financially-dependent" className="w-4 h-4 accent-olive cursor-pointer" />
                  <label htmlFor="financially-dependent" className="text-xs font-bold text-text-primary cursor-pointer select-none">Financially Dependent?</label>
                </div>
              </div>
            </div>
          </div>

          {/* GROUP: MEDICAL & IDENTIFICATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Medical & Insurance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Covered under Insurance?</label>
                  <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Blood Group</label>
                  <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Medical Conditions</label>
                <textarea rows={2} placeholder="Any chronic illnesses or allergies..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all resize-none"></textarea>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-olive/30"></span> Identification
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">ID Proof Type</label>
                  <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all appearance-none cursor-pointer">
                    <option value="aadhaar">Aadhaar</option>
                    <option value="passport">Passport</option>
                    <option value="voter">Voter ID</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">ID Number</label>
                  <div className="relative">
                    <IdCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Enter ID number" className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-button text-sm focus:outline-none focus:border-olive/50 transition-all" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100 mt-4">
                <input type="checkbox" id="mark-emergency" className="w-4 h-4 accent-red-500 cursor-pointer" />
                <label htmlFor="mark-emergency" className="text-xs font-bold text-red-700 cursor-pointer select-none">Mark as Emergency Contact</label>
              </div>
            </div>
          </div>

          {/* GROUP: DOCUMENTS */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold text-olive uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-olive/30"></span> Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Upload ID Proof</p>
                <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive transition-all cursor-pointer group">
                  <Upload size={20} className="text-gray-400 group-hover:text-olive" />
                  <p className="text-[10px] font-bold text-gray-500">Drag & drop ID Proof</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">Upload Medical Documents (Optional)</p>
                <div className="h-32 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-olive transition-all cursor-pointer group">
                  <Upload size={20} className="text-gray-400 group-hover:text-olive" />
                  <p className="text-[10px] font-bold text-gray-500">Drag & drop Medical Files</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex justify-end">
            <button className="flex items-center gap-2 px-12 py-3 bg-olive text-white rounded-button font-bold text-sm shadow-md hover:bg-olive/90 active:transform active:scale-[0.98] transition-all">
              <Plus size={18} />
              Add Family Member
            </button>
          </div>
        </div>
      </div>

      {/* 2. FAMILY MEMBERS TABLE (DETAILED) */}
      <div className="bg-white border border-border-light rounded-enterprise shadow-sm overflow-hidden">
        <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-olive" />
            <h2 className="text-xs font-bold text-text-primary uppercase tracking-widest">Family Members List</h2>
          </div>
          <span className="text-[10px] font-bold text-text-secondary uppercase bg-gray-100 px-2 py-1 rounded">2 Registered</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/20">
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Name & Gender</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Relationship</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Age</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Dependent</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Insurance</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest">Contact</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Emergency</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Docs</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-secondary uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="bg-red-50/10">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Robert Doe</span>
                    <span className="text-[10px] text-text-secondary uppercase">Male</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">Father</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-primary font-semibold">64 Years</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1.5 text-olive font-bold text-[10px] uppercase">
                    <CheckCircle2 size={12} /> Yes
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1.5 text-olive font-bold text-[10px] uppercase">
                    <CheckCircle2 size={12} /> Covered
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary font-mono">+91 98765 43210</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <AlertCircle size={16} className="text-red-500" />
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button className="p-1.5 bg-white border border-gray-100 rounded text-gray-400 hover:text-olive transition-all"><Eye size={14} /></button>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive"><Edit3 size={16} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Jane Doe</span>
                    <span className="text-[10px] text-text-secondary uppercase">Female</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">Spouse</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-primary font-semibold">32 Years</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1.5 text-olive font-bold text-[10px] uppercase">
                    <CheckCircle2 size={12} /> Yes
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-1.5 text-olive font-bold text-[10px] uppercase">
                    <CheckCircle2 size={12} /> Covered
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-text-secondary font-mono">+91 91234 56789</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <XCircle size={16} className="text-gray-200" />
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <button className="p-1.5 bg-white border border-gray-100 rounded text-gray-400 hover:text-olive transition-all"><Eye size={14} /></button>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-olive"><Edit3 size={16} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
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

export default FamilyDetails;
