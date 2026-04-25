/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CreditCard, 
  Monitor, 
  Plane, 
  Home, 
  LifeBuoy, 
  FileText, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface AdminServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
  onClick?: () => void;
}

const AdminServiceCard: React.FC<AdminServiceCardProps> = ({ title, description, icon, id, onClick }) => (
  <div 
    id={id}
    onClick={onClick}
    className="enterprise-card flex flex-col justify-between group hover:border-olive hover:shadow-md cursor-pointer transition-all duration-200"
  >
    <div className="space-y-4">
      <div className="w-12 h-12 bg-olive-light rounded-button flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-colors duration-200">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
      </div>
      <div>
        <h3 className="text-sm font-bold text-text-primary mb-1 group-hover:text-olive transition-colors">{title}</h3>
        <p className="text-[11px] text-text-secondary leading-normal">{description}</p>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-end text-gray-300 group-hover:text-olive transition-colors">
      <span className="text-[10px] font-bold uppercase tracking-widest mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Request Now</span>
      <ArrowRight size={16} />
    </div>
  </div>
);

interface AdminServiceProps {
  onNavigate?: (view: string) => void;
}

const AdminService: React.FC<AdminServiceProps> = ({ onNavigate }) => {
  const services = [
    { 
      title: 'ID Card Request', 
      description: 'Request new employee ID cards or report a lost card for reissue.', 
      icon: <CreditCard />, 
      id: 'admin-id-card' 
    },
    { 
      title: 'Asset Request', 
      description: 'Order hardware, software, or office equipment required for your role.', 
      icon: <Monitor />, 
      id: 'admin-assets' 
    },
    { 
      title: 'Travel Request', 
      description: 'Submit domestic or international business travel and expense plans.', 
      icon: <Plane />, 
      id: 'admin-travel' 
    },
    { 
      title: 'Accommodation Request', 
      description: 'Request company-provided housing or temporary stay arrangements.', 
      icon: <Home />, 
      id: 'admin-housing' 
    },
    { 
      title: 'Helpdesk Tickets', 
      description: 'Report technical issues or facility maintenance requests.', 
      icon: <LifeBuoy />, 
      id: 'admin-helpdesk' 
    },
    { 
      title: 'Document Request', 
      description: 'Obtain official letters, experience certificates, or work permits.', 
      icon: <FileText />, 
      id: 'admin-docs' 
    },
    { 
      title: 'HR Support Requests', 
      description: 'Connect with HR specialists for personal guidance and policy support.', 
      icon: <HeartHandshake />, 
      id: 'admin-hr-support' 
    },
  ];

  return (
    <div id="admin-service-module" className="w-full">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Admin Services</h1>
        <p className="text-text-secondary text-sm">Submit and track administrative requests and support tickets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <AdminServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            id={service.id}
            onClick={() => onNavigate?.(service.title)}
          />
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="mt-12 p-5 bg-white border border-border-light rounded-enterprise flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-text-secondary">
            <CreditCard size={18} />
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-text-secondary uppercase tracking-widest">Active Requests</h4>
            <p className="text-sm font-bold text-text-primary">You have 0 pending administrative requests.</p>
          </div>
        </div>
        <button className="btn-secondary px-6 py-2">
          View History
        </button>
      </div>
    </div>
  );
};

export default AdminService;
