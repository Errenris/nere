export default function ProductCard({ product }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="h-40 rounded-md bg-slate-700 flex items-center justify-center overflow-hidden">
        <img src={product.image || '/placeholder.png'} alt={product.title} className="object-contain h-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-300 mt-1">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-sm text-gray-300">Price</div>
          <div className="font-bold">{product.price}</div>
        </div>
        <div className="flex gap-2">
          <a href={product.link} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm">Access</a>
          <button className="px-3 py-2 rounded-lg border border-slate-600 text-sm">Details</button>
        </div>
      </div>
    </div>
  )
}
