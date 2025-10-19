
import React from 'react';

// Using a generic type for icon components for cleaner code
type IconComponent = React.FC<{ className?: string }>;
type Page = 'home' | 'orders' | 'favorites' | 'challenges' | 'settings';


// --- Icons ---
const HomeIcon: IconComponent = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
const ListIcon: IconComponent = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);
const HeartIcon: IconComponent = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.318-7.318a4.5 4.5 0 010-6.364z" />
    </svg>
);
const BoltIcon: IconComponent = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const SettingsIcon: IconComponent = ({ className }) => ( // Filled version for active state
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-1.57 1.992A1.532 1.532 0 013.17 8.51c-1.56.38-1.56 2.6 0 2.98a1.532 1.532 0 01.948 2.286c-.836 1.258.28 2.828 1.57 1.992a1.532 1.532 0 012.286.948c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-.948c1.29-.836 2.406-.364 1.57-1.992a1.532 1.532 0 01.948-2.286c1.56-.38 1.56-2.6 0-2.98a1.532 1.532 0 01-.948-2.286c.836-1.258-.28-2.828-1.57-1.992A1.532 1.532 0 0111.49 3.17zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
);

// --- Nav Item Component ---
interface NavItemProps {
  icon: IconComponent;
  label: string;
  active?: boolean;
  onClick: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active = false, onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col items-center space-y-1 w-16 transition-transform transform hover:scale-105">
            {active ? (
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg -mt-8">
                    <Icon className="h-7 w-7 text-black" />
                </div>
            ) : (
                <Icon className="h-7 w-7 text-white" />
            )}
            <span className={`text-xs font-bold ${active ? 'text-black' : 'text-white'}`}>{label}</span>
        </button>
    );
};

interface BottomNavProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-sm z-50">
            <div className="bg-brand-purple-light rounded-full h-20 flex items-center justify-around shadow-2xl">
                <NavItem icon={HomeIcon} label="الرئيسية" active={activePage === 'home'} onClick={() => onNavigate('home')} />
                <NavItem icon={ListIcon} label="الطلبات" active={activePage === 'orders'} onClick={() => onNavigate('orders')} />
                <NavItem icon={HeartIcon} label="المفضلات" active={activePage === 'favorites'} onClick={() => onNavigate('favorites')} />
                <NavItem icon={BoltIcon} label="التحديات" active={activePage === 'challenges'} onClick={() => onNavigate('challenges')} />
                <NavItem icon={SettingsIcon} label="الاعدادات" active={activePage === 'settings'} onClick={() => onNavigate('settings')} />
            </div>
        </div>
    );
};

export default BottomNav;