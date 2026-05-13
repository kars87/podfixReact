export default function Footer() {
  return (
    <div>
      
      <footer className="bg-slate-950/20 bg-opacity-95 backdrop-blur-sm text-center py-6 mt-12">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} podfix. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
