/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Building2, 
  Target, 
  Rocket, 
  Users, 
  Globe, 
  Award,
  Calendar,
  Image as ImageIcon
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about-page" className="w-full space-y-12">
      {/* 1. Company Overview */}
      <section id="company-overview" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <Building2 className="text-olive" />
            About the Company
          </h1>
          <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
            <p>
              Founded in 2010, our company has been a pioneer in delivering innovative enterprise solutions for the modern workforce. We specialize in developing robust software systems that streamline operations and enhance employee engagement across global industries.
            </p>
            <p>
              Operating at the intersection of technology and human resources, we provide tools that empower organizations to maintain a high-performance culture. Our commitment to excellence has made us a trusted partner for Fortune 500 companies worldwide.
            </p>
            <p>
              With operations spanning across three continents, we continue to push the boundaries of what's possible in the digital workspace, ensuring that our clients are always at the forefront of their respective industries.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-enterprise aspect-video flex items-center justify-center border border-border-light text-gray-400 font-bold uppercase tracking-widest flex-col gap-2">
          <ImageIcon size={48} className="opacity-20" />
          <span>Company Image</span>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="enterprise-card">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Target className="text-olive" size={18} />
            Our Vision
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-medium">
            To be the global leader in digital transformation, creating a world where technology seamlessly integrates with human potential to drive unprecedented growth and efficiency.
          </p>
        </div>
        <div className="enterprise-card">
          <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <Rocket className="text-olive" size={18} />
            Our Mission
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary font-medium">
            <li className="flex items-start gap-2">
              <div className="mt-1.5 w-1.5 h-1.5 bg-olive rounded-full shrink-0"></div>
              Deliver high-quality software solutions that exceed client expectations.
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1.5 w-1.5 h-1.5 bg-olive rounded-full shrink-0"></div>
              Foster a culture of continuous innovation and learning.
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1.5 w-1.5 h-1.5 bg-olive rounded-full shrink-0"></div>
              Ensure data security and privacy in all our digital products.
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1.5 w-1.5 h-1.5 bg-olive rounded-full shrink-0"></div>
              Commit to sustainable and ethical business operations globally.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Key Highlights */}
      <section id="key-highlights">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Years of Experience', value: '14+', icon: <Calendar /> },
            { title: 'Global Employees', value: '2,500+', icon: <Users /> },
            { title: 'Global Locations', value: '12', icon: <Globe /> },
            { title: 'Projects Done', value: '450+', icon: <Award /> },
          ].map((item, idx) => (
            <div key={idx} className="enterprise-card flex flex-col items-center text-center p-6 bg-white hover:bg-olive-light transition-colors group">
              <div className="text-olive/50 group-hover:text-olive transition-colors mb-4">{item.icon}</div>
              <p className="text-2xl font-bold text-text-primary mb-1">{item.value}</p>
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership / Team */}
      <section id="leadership-team" className="space-y-6">
        <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] flex items-center gap-2">
          <Users className="text-olive" />
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Dr. Michael Chen', role: 'Chief Executive Officer' },
            { name: 'Sarah Jenkins', role: 'Chief Strategy Officer' },
            { name: 'Robert Wilson', role: 'Head of Engineering' },
            { name: 'Anita Patel', role: 'VP of Human Resources' },
          ].map((leader, idx) => (
            <div key={idx} className="enterprise-card flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full border border-border-light mb-4 flex items-center justify-center text-gray-300">
                <ImageIcon size={32} className="opacity-20" />
              </div>
              <p className="text-sm font-bold text-text-primary mb-1">{leader.name}</p>
              <p className="text-[11px] font-bold text-olive uppercase tracking-tight">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Company Timeline / Milestones */}
      <section id="timeline-milestones" className="space-y-6">
        <h2 className="text-sm font-bold text-text-primary uppercase tracking-[0.2em] flex items-center gap-2">
          <Calendar className="text-olive" />
          Company Milestones
        </h2>
        <div className="enterprise-card">
          <div className="space-y-8 relative">
            <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-gray-100"></div>
            {[
              { year: '2024', event: 'Launched AI-powered employee analytics suite.' },
              { year: '2022', event: 'Expanded operations to European and Southeast Asian markets.' },
              { year: '2018', event: 'Recognized as the most innovative HR tech startup by Global Industry Awards.' },
              { year: '2014', event: 'Successfully migrated all systems to native cloud infrastructure.' },
              { year: '2010', event: 'Company founded with a vision to redefine office management.' },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-10 items-start relative z-10">
                <div className="w-16 h-16 rounded-full bg-olive-light border-2 border-white shadow-sm flex items-center justify-center text-olive font-bold text-xs ring-4 ring-off-white">
                  {milestone.year}
                </div>
                <div className="pt-5 border-b border-gray-50 pb-5 flex-1">
                  <p className="text-sm text-text-primary font-bold">Strategic Milestone</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
