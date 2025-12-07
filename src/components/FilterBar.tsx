import React from 'react';

export const FilterBar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-10">
        {/* Right side: Search/Filter buttons */}
        <div className="flex gap-3">
            <button className="bg-neon-cyan text-white font-bold px-4 py-2 rounded-lg hover:bg-cyan-300 transition-colors text-sm">
                تصفية
            </button>
            <button className="border border-gray-700 text-gray-400 hover:text-white hover:border-neon-cyan font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                بحث
            </button>
        </div>
        
        {/* Left side: View All Link */}
        <span className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm font-medium">
            الكل
        </span>
    </div>
  );
};

