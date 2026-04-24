/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomeDashboard from './components/HomeDashboard';
import ProfileModule from './components/ProfileModule';
import GeneralDetails from './components/GeneralDetails';
import SalarySlip from './components/SalarySlip';
import ESSPanel from './components/ESSPanel';
import DashboardModule from './components/DashboardModule';
import Knowbase from './components/Knowbase';
import Directory from './components/Directory';
import About from './components/About';
import Policy from './components/Policy';
import AdminService from './components/AdminService';
import IDCardRequest from './components/IDCardRequest';
import AssetRequest from './components/AssetRequest';
import TravelRequest from './components/TravelRequest';
import AccommodationRequest from './components/AccommodationRequest';
import HelpdeskTickets from './components/HelpdeskTickets';
import DocumentRequest from './components/DocumentRequest';
import HRSupportRequest from './components/HRSupportRequest';
import LeaveManagement from './components/LeaveManagement';
import ApplyLeave from './components/ApplyLeave';
import LeaveHistory from './components/LeaveHistory';
import LeaveCalendar from './components/LeaveCalendar';
import ReimbursementDashboard from './components/ReimbursementDashboard';
import SubmitReimbursementClaim from './components/SubmitReimbursementClaim';
import TotalWorkingDays from './components/TotalWorkingDays';
import RecruitmentDashboard from './components/RecruitmentDashboard';
import JobOpeningsList from './components/JobOpeningsList';
import CandidateList from './components/CandidateList';
import CandidateProfileDetail from './components/CandidateProfileDetail';
import SeparationDashboard from './components/SeparationDashboard';
import SeparationRequestForm from './components/SeparationRequestForm';
import SeparationRecords from './components/SeparationRecords';
import ITDeclarationModule from './components/ITDeclarationModule';
import LTAClaimsModule from './components/LTAClaimsModule';
import LoanRequisitionModule from './components/LoanRequisitionModule';
import PerformanceManagement from './components/PerformanceManagement';
import Attendance from './components/Attendance';
import ExperienceDetails from './components/ExperienceDetails';
import FamilyDetails from './components/FamilyDetails';
import EducationDetails from './components/EducationDetails';
import AdditionalDetails from './components/AdditionalDetails';
import BankDetails from './components/BankDetails';
import OtherDetails from './components/OtherDetails';

export default function App() {
  const [currentView, setCurrentView] = useState('Home');
  const [isESSPaneOpen, setIsESSPaneOpen] = useState(false);

  const handleNavigationChange = (label: string) => {
    if (label === 'ESS') {
      setIsESSPaneOpen(true);
      return;
    }
    setCurrentView(label); 
  };

  return (
    <div id="app-container" className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activeItem={currentView} onItemChange={handleNavigationChange} />
      
      <div className="flex flex-1">
        <Sidebar activeItem={currentView} onItemChange={handleNavigationChange} />
        <ESSPanel isOpen={isESSPaneOpen} onClose={() => setIsESSPaneOpen(false)} onNavigate={handleNavigationChange} />
        
        {/* Main Content Area */}
        <main id="main-content" className="mt-[60px] ml-[240px] p-8 w-full flex justify-center">
          <div className="max-w-6xl w-full">
            
            {currentView === 'Home' ? (
              <HomeDashboard onNavigate={handleNavigationChange} />
            ) : currentView === 'Dashboard' ? (
              <DashboardModule />
            ) : currentView === 'Profile' ? (
              <ProfileModule />
            ) : currentView === 'General Details' ? (
              <GeneralDetails />
            ) : currentView === 'Salary Slip' ? (
              <SalarySlip />
            ) : currentView === 'Experience Details' ? (
              <ExperienceDetails />
            ) : currentView === 'Family Details' ? (
              <FamilyDetails />
            ) : currentView === 'Education Details' ? (
              <EducationDetails />
            ) : currentView === 'Additional Details' ? (
              <AdditionalDetails />
            ) : currentView === 'Bank Details' ? (
              <BankDetails />
            ) : currentView === 'Other Details' ? (
              <OtherDetails />
            ) : currentView === 'Attendance' ? (
              <Attendance />
            ) : currentView === 'Knowbase' ? (
              <Knowbase />
            ) : currentView === 'Directory' ? (
              <Directory />
            ) : currentView === 'About' ? (
              <About />
            ) : currentView === 'Policy' ? (
              <Policy />
            ) : currentView === 'Admin Service' ? (
              <AdminService onNavigate={handleNavigationChange} />
            ) : currentView === 'ID Card Request' ? (
              <IDCardRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Asset Request' ? (
              <AssetRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Travel Request' ? (
              <TravelRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Accommodation Request' ? (
              <AccommodationRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Helpdesk Tickets' ? (
              <HelpdeskTickets />
            ) : currentView === 'Document Request' ? (
              <DocumentRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'HR Support Requests' ? (
              <HRSupportRequest onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Leave Management' ? (
              <LeaveManagement onNavigate={handleNavigationChange} />
            ) : currentView === 'Apply Leave' ? (
              <ApplyLeave onCancel={() => setCurrentView('Leave Management')} />
            ) : currentView === 'Leave History' ? (
              <LeaveHistory onCancel={() => setCurrentView('Leave Management')} />
            ) : currentView === 'Leave Calendar' ? (
              <LeaveCalendar onCancel={() => setCurrentView('Leave Management')} />
            ) : currentView === 'Reimbursement' ? (
              <ReimbursementDashboard onNavigate={handleNavigationChange} />
            ) : currentView === 'Submit Reimbursement' ? (
              <SubmitReimbursementClaim onCancel={() => setCurrentView('Reimbursement')} />
            ) : currentView === 'Total working days' ? (
              <TotalWorkingDays onCancel={() => setCurrentView('Admin Service')} />
            ) : currentView === 'Recruitment' ? (
              <RecruitmentDashboard onNavigate={handleNavigationChange} />
            ) : currentView === 'Job Openings' ? (
              <JobOpeningsList onCancel={() => setCurrentView('Recruitment')} />
            ) : currentView === 'Candidates' ? (
              <CandidateList onCancel={() => setCurrentView('Recruitment')} onNavigate={handleNavigationChange} />
            ) : currentView === 'Candidate Profile' ? (
              <CandidateProfileDetail onCancel={() => setCurrentView('Candidates')} />
            ) : currentView === 'Separation' ? (
              <SeparationDashboard onNavigate={handleNavigationChange} />
            ) : currentView === 'Separation Request' ? (
              <SeparationRequestForm onCancel={() => setCurrentView('Separation')} />
            ) : currentView === 'Separation Records' ? (
              <SeparationRecords onCancel={() => setCurrentView('Separation')} />
            ) : currentView === 'IT Declaration' ? (
              <ITDeclarationModule onCancel={() => setCurrentView('Home')} />
            ) : currentView === 'LTA Claims' ? (
              <LTAClaimsModule onCancel={() => setCurrentView('Home')} />
            ) : currentView === 'Loan Requisition' ? (
              <LoanRequisitionModule onCancel={() => setCurrentView('Home')} />
            ) : currentView === 'Performance (PMS)' ? (
              <PerformanceManagement />
            ) : (
              <div className="text-center py-20 text-gray-400">
                <h2 className="text-xl font-bold mb-2">{currentView} Module</h2>
                <p>Content for this section is under development.</p>
                <button 
                  onClick={() => setCurrentView('Home')}
                  className="mt-4 px-4 py-2 bg-olive text-white rounded-md text-sm font-semibold"
                >
                  Return to Dashboard
                </button>
              </div>
            )}

            <footer className="mt-20 py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
              &copy; 2026 Enterprise Systems. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
