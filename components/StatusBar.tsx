
import React from 'react';

const StatusBar: React.FC = () => {
    return (
        <div className="px-4 pt-3 pb-1 flex justify-between items-center text-sm font-bold text-gray-900 bg-brand-gray">
            <span className="w-12 text-left font-sans text-base font-medium">٩:٣٦</span>
            <div className="flex items-center space-i-1">
                {/* WiFi */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.556A5.5 5.5 0 0112 15c1.42 0 2.75.523 3.778 1.389m-6.444-3.612a9 9 0 0110.888 0M3.535 10.135a13.5 13.5 0 0116.93 0"></path></svg>
                 {/* Signal Bars */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16 15.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h2zM12 15.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h2zM8 15.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H5.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H8zM4 15.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H1.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H4z"></path>
                </svg>
            </div>
            {/* Battery */}
            <div className="w-12 flex justify-end">
                <div className="relative w-7 h-[14px] border-2 border-gray-900 rounded-sm">
                    <div className="absolute top-1/2 left-[-4px] -translate-y-1/2 h-2 w-1 bg-gray-900 rounded-l-sm"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[10px] w-2 bg-red-500 rounded-sm flex items-center justify-center">
                    </div>
                     <svg className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
