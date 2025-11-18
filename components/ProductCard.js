import React from 'react'

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md flex flex-col gap-3">
      <div className="h-40 rounded-md bg-gray-800 flex items-center justify-center overflow-hidden">
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
        <button 
          onClick={() => addToCart(product)} 
          className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-sm"
        >
          Tambah
        </button>
      </div>
    </div>
  )
}
