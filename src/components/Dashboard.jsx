import { LogOut } from 'lucide-react';

export default function Dashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img src="/logo.png" alt="podfix" className="w-8 h-8 filter invert" />
            <span className="text-lg font-medium">
              <span>pod</span>
              <span className="text-blue-500">fix</span>
              <span className="text-white/40 ml-2 text-sm">/ Dashboard</span>
            </span>
          </div>
          <button
            onClick={onLogout}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">Welcome to your dashboard</h1>
        <p className="text-white/60 mb-8">Manage your podcast audio enhancements here.</p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/10 p-6 rounded-lg border border-white/5">
            <h3 className="text-lg font-semibold mb-2">Files</h3>
            <p className="text-3xl font-bold text-blue-500">0</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg border border-white/5">
            <h3 className="text-lg font-semibold mb-2">Processed</h3>
            <p className="text-3xl font-bold text-blue-500">0</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg border border-white/5">
            <h3 className="text-lg font-semibold mb-2">Storage used</h3>
            <p className="text-3xl font-bold text-blue-500">0 MB</p>
          </div>
        </div>
      </main>
    </div>
  );
}