
import React from 'react';

interface Category {
  name: string;
  icon: React.ReactNode;
}

const LightningIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg> );
const HeadphonesIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 2-1-2-.257-.257A6 6 0 1118 8zM10 12a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" /><path d="M10 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" /></svg> );
const SofaIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg> );
const HairDryerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.31 11.237a.75.75 0 011.06-.02l3.342 3.341a.75.75 0 01-1.06 1.061l-3.342-3.341a.75.75 0 01-.02-1.06zm7.22.463a.75.75 0 011.06 0l2.25 2.25a.75.75 0 01-1.06 1.06l-2.25-2.25a.75.75 0 010-1.06z" /><path d="M4.93 4.93a7.5 7.5 0 0110.61 0 .75.75 0 01-1.06 1.06A6 6 0 005.99 14.01a.75.75 0 01-1.06-1.06 7.5 7.5 0 010-8.02zM12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1z" /></svg> );
const MixerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-1 1v6.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 9.586V3a1 1 0 00-1-1H9z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg> );
const BottleIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a2.5 2.5 0 00-2.5 2.5V8a.5.5 0 01-1 0V4.5A2.5 2.5 0 004 2h12a2.5 2.5 0 00-2.5 2.5V8a.5.5 0 01-1 0V4.5A2.5 2.5 0 0010 2zM3 9.5A1.5 1.5 0 004.5 11h11A1.5 1.5 0 0017 9.5V9h-1.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H17V5h-1.5a.5.5 0 01-.5-.5V2.5a.5.5 0 01.5-.5H17V1H3v1h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3v1h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3v.5zM4.5 12h11a.5.5 0 01.5.5V18a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-5.5a.5.5 0 01.5-.5z" clipRule="evenodd" /></svg> );
const AmazonIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.1,16.5c-2.3,1.9-5.1,2.8-8.1,2.8c-2.8,0-5.3-0.8-7.5-2.2l1.2-1.9c1.8,1.2,3.9,1.8,6.2,1.8 c2.6,0,5-0.8,6.8-2.4c-1,0-1.8-0.1-2.4-0.2c-0.6-0.1-1.2-0.4-1.6-0.8c-0.4-0.4-0.7-1-0.7-1.7c0-0.5,0.2-1.1,0.5-1.5 c0.3-0.4,0.8-0.8,1.4-1c0.6-0.2,1.2-0.3,1.9-0.3c0.8,0,1.7,0.1,2.5,0.3l1.1-1.8c-1.1-0.3-2.3-0.5-3.6-0.5c-2.1,0-4,0.6-5.6,1.7 c-1.6,1.1-2.4,2.8-2.4,4.9c0,2.1,0.8,3.8,2.2,5c1.4,1.2,3.3,1.8,5.6,1.8c3.2,0,6.2-1,8.6-2.9L17.1,16.5z M24,20.2 c-0.8-0.3-1.6-0.4-2.4-0.4c-1,0-1.8,0.3-2.5,0.8s-1.1,1.2-1.1,2.2c0,0.8,0.3,1.5,0.8,2c0.5,0.5,1.2,0.8,2.1,0.8 c1.3,0,2.3-0.6,3.2-1.7l-1.3-1.6C22,22.4,21.3,22.7,20.6,22.7c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.3-0.5-0.3-0.9 c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.8-0.5,1.4-0.5c0.5,0,1.1,0.1,1.7,0.3L24,20.2z"></path></svg> );

const categories: Category[] = [
    { name: 'جديد', icon: <LightningIcon /> },
    { name: 'الكترونيات', icon: <HeadphonesIcon /> },
    { name: 'اجهزة المنزل', icon: <SofaIcon /> },
    { name: 'اجهزة العناية', icon: <HairDryerIcon /> },
    { name: 'منتجات امازون', icon: <AmazonIcon /> },
    { name: 'منتجات العناية', icon: <BottleIcon /> },
    { name: 'اجهزة المطبخ', icon: <MixerIcon /> },
];

const CategoryItem: React.FC<{ category: Category }> = ({ category }) => (
    <div className="flex flex-col items-center space-y-2 flex-shrink-0">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
            {category.icon}
        </div>
        <span className="text-sm font-bold text-gray-700">{category.name}</span>
    </div>
);

const Categories: React.FC = () => {
    return (
        <div className="mt-6">
            <h3 className="font-bold text-xl text-gray-800 px-4 mb-3">الفئات</h3>
            <div className="flex space-i-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
                {categories.map((cat, index) => (
                    <CategoryItem key={index} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
