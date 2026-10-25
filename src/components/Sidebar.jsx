import { navItems } from '../data/navigation';

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
  isFullscreen,
  onToggleFullscreen,
}) {
  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        id="sidebar"
        className={`bg-white flex flex-col z-50 border-r border-slate-200 h-full shrink-0 overflow-y-auto
          ${mobileOpen ? 'mobile-open' : ''}
          ${collapsed ? 'collapsed' : ''}
        `}
      >
        {/* Top Header */}
        <div className="sidebar-header flex items-center px-4 gap-3 shrink-0 border-b h-16">
          <button
            type="button"
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            aria-label="Toggle Fullscreen"
          >
            <span className="material-symbols-outlined fullscreen-icon">
              {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
          </button>

          <button
            type="button"
            onClick={onToggleCollapse}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors shrink-0 outline-none"
            aria-label="Toggle Sidebar Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Logo / Brand */}
          <div id="sidebar-logo" className="flex items-center gap-2 overflow-hidden">
            <img
              className="h-10 object-contain w-auto max-w-[130px] transition-all"
              src="./ntpc.png"
              alt="Portal Logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-bold text-slate-800 text-sm tracking-tight truncate">
              OrgMemory
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4 flex flex-col">
          <div className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = item.active;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => onCloseMobile?.()}
                  className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#eef4fa] text-[#1e4e79] font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 font-medium'
                  }`}
                  title={item.label}
                >
                  <span className="material-symbols-outlined ml-1">{item.icon}</span>
                  <span className="sidebar-text text-sm truncate">{item.label}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="sidebar-help-box p-3 border-t border-slate-200 bg-[#eef4fa] px-3">
          <p className="text-xs font-semibold mb-2 text-black uppercase">Need Help?</p>
          <p className="text-[11px] text-black mb-3">
            Check our guide for advanced portal management tools.
          </p>
          <button
            type="button"
            className="w-full py-2 bg-white border border-slate-300 text-black text-xs font-bold rounded-lg hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
          >
            Learn More
          </button>
        </div>
      </aside>
    </>
  );
}
