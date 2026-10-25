export default function MobileHeader({ onOpenMobile, isFullscreen, onToggleFullscreen }) {
  return (
    <header className="md:hidden flex items-center justify-between bg-white border-b border-slate-200 px-4 py-2.5 z-30 shrink-0 shadow-sm">
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onOpenMobile}
          className="p-2 -ml-1.5 rounded-lg hover:bg-slate-100 text-slate-700 outline-none transition-colors"
          aria-label="Open Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>

        <div className="flex items-center gap-2">
          <img
            className="h-8 object-contain w-auto"
            src="./ntpc.png"
            alt="Logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-bold text-slate-800 text-sm tracking-tight">
            OrgMemory
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 outline-none transition-colors"
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          aria-label="Toggle Fullscreen"
        >
          <span className="material-symbols-outlined fullscreen-icon text-2xl">
            {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
          </span>
        </button>
      </div>
    </header>
  );
}
