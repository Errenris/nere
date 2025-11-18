import { useState } from 'react'

export default function CartPopup({ open, setOpen, cart, removeItem, total }) {
  const [showQR, setShowQR] = useState(false)

  if (!open) return null

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-gray-900 w-80 p-5 rounded-2xl shadow-xl relative'>

        {/* Popup QRIS */}
        {showQR && (
          <div className='absolute top-0 left-0 w-full h-full bg-black/90 flex flex-col justify-center items-center rounded-2xl p-4'>
            <h2 className='text-lg font-bold mb-3'>Scan QRIS</h2>
            <img src="/qris.png" className="w-48 rounded-lg shadow-lg mb-3" />
            <button
              onClick={() => setShowQR(false)}
              className='bg-red-600 w-full py-2 rounded-lg'
            >
              Tutup
            </button>
          </div>
        )}

        <h2 className='text-xl font-bold mb-3'>Keranjang</h2>

        {cart.length === 0 ? (
          <p className='text-gray-400'>Kosong...</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className='flex justify-between mb-2'>
              <span>{item.name}</span>
              <button onClick={() => removeItem(i)} className='text-red-400'>
                Hapus
              </button>
            </div>
          ))
        )}

        <hr className='my-3 border-gray-700' />

        <p className='font-semibold text-lg mb-3'>Total: Rp {total}</p>

        <button
          onClick={() => setShowQR(true)}
          className='block bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg mb-2 w-full'
        >
          Bayar via QRIS
        </button>

        <a
          href={`https://wa.me/628xxxxxxxxx?text=Mau checkout, total: Rp ${total}`}
          className='block bg-green-600 hover:bg-green-700 text-center py-2 rounded-lg mb-2 w-full'
        >
          Checkout WhatsApp
        </a>

        <button
          onClick={() => setOpen(false)}
          className='w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg'
        >
          Tutup
        </button>
      </div>
    </div>
  )
}
