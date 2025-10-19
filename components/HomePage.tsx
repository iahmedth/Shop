import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import PromoBanner from './PromoBanner';
import YouTubeBanner from './YouTubeBanner';
import Categories from './Categories';
import ProductGrid from './ProductGrid';

const HomePage: React.FC = () => {
    return (
        <main>
            <Header />
            <div className="px-4">
                <SearchBar />
            </div>
            <div className="px-4 mt-6 space-y-4">
              <PromoBanner />
              <YouTubeBanner />
            </div>
            <Categories />
            <ProductGrid />
        </main>
    );
};

export default HomePage;
