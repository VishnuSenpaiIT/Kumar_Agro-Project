/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  Upload, 
  MapPin, 
  AlertCircle,
  X
} from 'lucide-react';

interface IDCardRequestProps {
  onCancel?: () => void;
}

const IDCardRequest: React.FC<IDCardRequestProps> = ({ onCancel }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('Office Pickup');

  const employeeInfo = {
    name: 'Johnathan Doe',
    id: 'EMP-10294',
    department: 'Technology & Innovation',
    designation: 'Senior Software Engineer'
  };

  return (
    <div id="id-card-request-form" className="w-full max-w-[700px] mx-auto py-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-olive-light rounded-button flex items-center justify-center text-olive">
            <CreditCard size={20} />
          </div>
          <h1 className="text-xl font-bold text-text-primary uppercase tracking-widest">ID Card Request</h1>
        </div>
        <button 
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-olive hover:bg-olive-light rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="enterprise-card bg-white space-y-10 shadow-sm">
        {/* 1. Employee Information (Read-only) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <User size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Employee Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Employee Name</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.name}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Employee ID</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.id}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Department</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.department}</div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">Designation</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-button text-sm font-semibold text-text-primary">{employeeInfo.designation}</div>
            </div>
          </div>
        </section>

        {/* 2. Request Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <AlertCircle size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Request Details</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Request Type</label>
              <select className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat">
                <option>New ID Card</option>
                <option>Replacement</option>
                <option>Lost Card</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Reason for Request</label>
              <textarea 
                className="input-field w-full min-h-[80px] resize-none"
                placeholder="Briefly describe why you are requesting this service..."
              ></textarea>
            </div>
          </div>
        </section>

        {/* 3. Delivery Details */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-50">
            <MapPin size={16} className="text-olive" />
            <h2 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Delivery Details</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Delivery Method</label>
              <select 
                className="input-field w-full appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                onChange={(e) => setDeliveryMethod(e.target.value)}
                value={deliveryMethod}
              >
                <option>Office Pickup</option>
                <option>Home Delivery</option>
              </select>
            </div>
            {deliveryMethod === 'Home Delivery' && (
              <div>
                <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-tighter mb-1">Shipping Address</label>
                <textarea 
                  className="input-field w-full min-h-[80px] resize-none"
                  placeholder="Street, City, Zip Code..."
                ></textarea>
              </div>
            )}
          </div>
        </section>

        {/* 4. Upload Section */}
        <section className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest">Upload Photo</label>
              <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-6 flex flex-col items-center justify-center text-center hover:border-olive/30 hover:bg-olive-light/20 transition-all cursor-pointer group">
                <Upload size={24} className="text-gray-300 group-hover:text-olive transition-colors mb-2" />
                <p className="text-[11px] font-bold text-gray-400 group-hover:text-text-primary transition-colors">Drag & Drop Photo</p>
                <p className="text-[9px] text-gray-300 mt-1 uppercase">JPG or PNG (Max 2MB)</p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-text-secondary uppercase tracking-widest">Supporting Doc (Optional)</label>
              <div className="border-2 border-dashed border-gray-100 rounded-enterprise p-6 flex flex-col items-center justify-center text-center hover:border-olive/30 hover:bg-olive-light/20 transition-all cursor-pointer group h-full">
                <Upload size={24} className="text-gray-300 group-hover:text-olive transition-colors mb-2" />
                <p className="text-[11px] font-bold text-gray-400 group-hover:text-text-primary transition-colors">Attach Document</p>
                <p className="text-[9px] text-gray-300 mt-1 uppercase">PDF (Max 5MB)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Declaration */}
        <section className="pt-4">
          <label className="flex items-center gap-3 cursor-pointer select-none group">
            <div className="relative w-5 h-5 flex items-center justify-center">
              <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
              <div className="w-5 h-5 border-2 border-gray-200 rounded-sm bg-white peer-checked:bg-olive peer-checked:border-olive transition-all"></div>
              <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors">I confirm that the above information is correct and true.</span>
          </label>
        </section>

        {/* 6. Action Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button className="btn-primary px-8 py-3 flex-1">
            Submit Request
          </button>
          <button 
            onClick={onCancel}
            className="btn-secondary px-8 py-3 flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDCardRequest;
