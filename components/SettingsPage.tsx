
import React from 'react';

// --- Icons ---
const PersonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg> );
const CreditCardIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm3 0a1 1 0 011-1h1a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" /></svg> );
const ClockIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" /></svg> );
const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v2h12V5zM2 11a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z" clipRule="evenodd" /></svg> );
const ChatIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 2.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg> );
const QuestionMarkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1zM9 12a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" /></svg> );
const LogoutIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg> );
const ChevronLeftIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg> );

// --- Components ---
interface SettingsItemProps {
  icon: React.ReactNode;
  text: string;
  isLogout?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, text, isLogout = false }) => {
  const textColor = isLogout ? 'text-red-500' : 'text-gray-800';
  const iconColor = isLogout ? 'text-red-500' : 'text-[#83a9a1]';
  const chevronColor = isLogout ? 'text-red-400' : 'text-[#83a9a1]';

  return (
    <button className="w-full bg-white rounded-xl shadow-sm p-4 flex items-center justify-between text-right transition-transform transform hover:scale-[1.02]">
      <div className={chevronColor}>
        <ChevronLeftIcon />
      </div>
      <div className="flex items-center space-i-4">
        <div className={iconColor}>
          {icon}
        </div>
        <span className={`font-bold text-lg ${textColor}`}>{text}</span>
      </div>
    </button>
  );
};

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-lg font-bold text-gray-700 mb-3 px-2">{title}</h2>
    <div className="space-y-3">
      {children}
    </div>
  </section>
);


const SettingsPage: React.FC = () => {
    return (
        <div className="flex-grow">
            <header className="text-center py-4">
                 <h1 className="text-5xl font-black tracking-tighter" style={{color: '#83a9a1'}}>موجود</h1>
            </header>

            <main className="px-4 mt-2">
                <SettingsSection title="الاعدادات العامة">
                    <SettingsItem icon={<PersonIcon />} text="الملف الشخصي و الأرباح" />
                    <SettingsItem icon={<CreditCardIcon />} text="سجل سحب الأرباح" />
                    <SettingsItem icon={<ClockIcon />} text="الاحصائيات" />
                </SettingsSection>

                <SettingsSection title="عن التطبيق">
                    <SettingsItem icon={<BriefcaseIcon />} text="سياسة الخصوصية و الاستخدام" />
                    <SettingsItem icon={<ChatIcon />} text="تواصل معنا" />
                </SettingsSection>
                
                <SettingsSection title="مركز المساعدة">
                    <SettingsItem icon={<QuestionMarkIcon />} text="الأسئلة الشائعة" />
                </SettingsSection>

                <SettingsSection title="الحساب">
                    <SettingsItem icon={<LogoutIcon />} text="تسجيل الخروج" isLogout={true} />
                </SettingsSection>
            </main>
        </div>
    );
};

export default SettingsPage;
