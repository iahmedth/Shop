
import React from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 120 120">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'rgb(200,0,0)', stopOpacity:1}} />
            </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M108,30.3C106.8,24.4,102.1,19.7,96.2,18.4C87.8,16,60,16,60,16s-27.8,0-36.2,2.4 C17.9,19.7,13.2,24.4,12,30.3C9.6,38.7,9.6,60,9.6,60s0,21.3,2.4,29.7c1.2,5.9,5.9,10.6,11.8,11.9 C27.8,104,60,104,60,104s27.8,0,36.2-2.4c5.9-1.2,10.6-5.9,11.8-11.9C110.4,81.3,110.4,60,110.4,60 S110.4,38.7,108,30.3z"/>
        <polygon fill="white" points="49,76.5 79,60 49,43.5"/>
    </svg>
);

const YouTubeBanner: React.FC = () => {
    return (
        <div className="relative bg-white p-6 rounded-2xl overflow-hidden shadow">
            <div 
                className="absolute inset-0 bg-violet-50 opacity-50" 
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}>
            </div>
            <div className="relative z-10 flex items-center space-i-4">
                <PlayIcon />
                <div className="flex flex-col">
                    <h2 className="text-xl font-black text-gray-800">قناة موجود على اليوتيوب</h2>
                    <p className="text-lg font-bold text-gray-600">بانتظارک تاجرنا !</p>
                    <p className="text-sm text-gray-500 mt-1">اضغط على الاعلان حتى تشوفها. ☛</p>
                </div>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-i-2 z-10">
                <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
                <span className="w-6 h-2.5 bg-brand-purple rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
            </div>
        </div>
    );
};

export default YouTubeBanner;