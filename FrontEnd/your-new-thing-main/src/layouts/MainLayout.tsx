
import { FC, ReactNode } from 'react';
import { BroadcastLogo } from '../components/BroadcastLogo';
import { Menu } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  showSidebar?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({ 
  children, 
  title, 
  showSidebar = false 
}) => {
  return (
    <div className="min-h-screen flex">
      {showSidebar && (
        <div className="w-[180px] border-r border-gray-300">
          <div className="p-4">
            <h2 className="font-bold mb-4">My Broadcast</h2>
            <div className="flex flex-col space-y-2">
              <button className="w-full text-left py-2 px-3 border border-gray-300 rounded">
                Work
              </button>
              <button className="w-full text-left py-2 px-3 border border-gray-300 rounded">
                University
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1">
        <header className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="flex items-center">
            <BroadcastLogo size="sm" />
          </div>
          <button className="p-2">
            <Menu size={24} />
          </button>
        </header>
        
        {title && (
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h1 className="text-xl font-bold">{title}</h1>
            <button className="p-2">
              <Menu size={24} />
            </button>
          </div>
        )}
        
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
