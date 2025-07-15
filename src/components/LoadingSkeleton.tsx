import React from 'react';

const LoadingSkeleton: React.FC = () => (
    <div className="flex items-center justify-center min-h-[40vh] w-full animate-pulse">
        <div className="w-16 h-16 rounded-full bg-gray-200 mr-4" />
        <div>
            <div className="h-4 bg-gray-200 rounded w-48 mb-2" />
            <div className="h-4 bg-gray-100 rounded w-32" />
        </div>
    </div>
);

export default LoadingSkeleton; 