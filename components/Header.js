export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-yellow-400 flex items-center justify-center text-black font-bold">JS</div>
        <div>
          <h1 className="text-xl font-semibold">neresore</h1>
          <p className="text-xs text-gray-300">Digital products • Fast access</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <a className="text-sm px-3 py-2 rounded-lg hover:bg-slate-700/40">Home</a>
        <a className="text-sm px-3 py-2 rounded-lg hover:bg-slate-700/40">Products</a>
        <button className="text-sm bg-yellow-400 text-black px-3 py-2 rounded-lg font-medium">Contact</button>
      </nav>
    </header>
  )
}
