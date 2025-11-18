import React from 'react'

export default function CartModal({ open, cart, close, removeItem, checkoutWA }) {
  if (!open) return null;

  const total = cart.reduce((a,b)=> a + Number(b.price.replace(/[^0-9]/g,'')), 0);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-5 rounded-xl w-80">
        <h2 className="text-lg font-bold mb-3">Keranjang</h2>
        
        <div className="max-h-60 overflow-y-auto space-y-3">
          {cart.length === 0 && <div className="text-gray-400 text-sm">Keranjang kosong</div>}

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-800 p-2 rounded-lg">
              <div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-gray-300">{item.price}</div>
              </div>
              <button onClick={() => removeItem(i)} className="text-red-400 text-sm">Hapus</button>
            </div>
          ))}
        </div>

        <div className="mt-4 font-semibold">Total: Rp {total.toLocaleString()}</div>

        <div className="flex gap-2 mt-4">
          <button onClick={close} className="flex-1 bg-gray-700 py-2 rounded-lg">Tutup</button>
          <button onClick={checkoutWA} className="flex-1 bg-green-600 py-2 rounded-lg">Checkout</button>
        </div>
      </div>
    </div>
  )
}
