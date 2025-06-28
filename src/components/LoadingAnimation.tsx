
import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 animate-pulse-glow">
          <span className="text-white font-bold text-3xl">DP</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-gradient-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
