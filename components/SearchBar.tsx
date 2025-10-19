
import React from 'react';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const SearchBar: React.FC = () => {
    return (
        <div className="relative mt-4">
            <input
                type="text"
                placeholder="ابحث عن منتج"
                className="w-full py-3 pr-6 pl-12 text-md bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-brand-purple transition"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchBar;