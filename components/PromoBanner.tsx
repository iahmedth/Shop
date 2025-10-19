
import React from 'react';

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);


const PromoBanner: React.FC = () => {
    return (
        <div className="bg-gradient-to-l from-brand-green to-brand-green-light p-4 rounded-2xl flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center space-i-4">
                <div className="bg-white/20 p-3 rounded-full">
                    <ArrowLeftIcon />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">عروض وتخفيضات حصرية</h2>
                    <span className="mt-1 bg-white/90 text-brand-green text-sm font-bold py-1 px-3 rounded-full w-max">خصومات مميزة</span>
                </div>
            </div>
            <div className="relative">
                <div className="bg-white p-3 rounded-xl shadow-md">
                     <TagIcon />
                </div>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">%</span>
            </div>
        </div>
    );
};

export default PromoBanner;
