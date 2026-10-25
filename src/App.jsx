import { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import MicroToolGrid from './components/MicroToolGrid';
import DepartmentCards from './components/DepartmentCards';
import DocumentAccessChart from './components/DocumentAccessChart';
import MetricCards from './components/MetricCards';
import { useFullscreen } from './hooks/useFullscreen';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  const handleToggleCollapse = useCallback(() => {
    // If on mobile screen width, toggle drawer open/close
    if (window.innerWidth < 768) {
      setMobileOpen((prev) => !prev);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  }, []);

  const handleOpenMobile = useCallback(() => {
    setMobileOpen(true);
  }, []);

  const handleCloseMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <div className="bg-app text-slate-800 font-sans antialiased overflow-hidden h-screen h-[100dvh] flex flex-col">
      {/* Mobile Top Header (Visible only on < 768px) */}
      <MobileHeader
        onOpenMobile={handleOpenMobile}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      <div className="flex flex-row flex-1 min-h-0 overflow-hidden relative">
        {/* Responsive Sidebar (Docked on desktop, drawer on mobile) */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleCollapse}
          mobileOpen={mobileOpen}
          onCloseMobile={handleCloseMobile}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto overflow-x-hidden">
          <div className="space-y-4 sm:space-y-5 p-3 sm:p-5 md:p-6 bg-[#ecf1f5] min-h-full">
            {/* Header Title Row */}
            <h1 className="text-xl sm:text-[23px] font-semibold sm:font-normal text-slate-900 text-center py-1">
              Organization Memory
            </h1>

            {/* Main Responsive Grid */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
              {/* 15 Micro Tools Cards */}
              <MicroToolGrid />

              {/* 4 Departments (HR, Finance, Projects, Operations) */}
              <DepartmentCards />

              {/* Document Access Donut Chart */}
              <DocumentAccessChart />

              {/* Document Views & Downloads Metric Cards */}
              <MetricCards />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
