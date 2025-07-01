'use client';

import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          <span className="ml-3 text-white text-sm font-medium">Loading...</span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
