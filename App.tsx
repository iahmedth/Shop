import React, { useState } from 'react';
import SettingsPage from './components/SettingsPage';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import { CartProvider } from './contexts/CartContext';

type Page = 'home' | 'orders' | 'favorites' | 'challenges' | 'settings';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('settings');

  return (
    <CartProvider>
      <div className="max-w-md mx-auto bg-brand-gray min-h-screen relative pb-28">
        {activePage === 'home' && <HomePage />}
        {activePage === 'settings' && <SettingsPage />}
        <BottomNav activePage={activePage} onNavigate={setActivePage} />
      </div>
    </CartProvider>
  );
};

export default App;