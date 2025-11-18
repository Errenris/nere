import { useState } from 'react'

export default function CartPopup({ open, setOpen, cart, removeItem, total }) {
  const [showQR, setShowQR] = useState(false)

  const QRIS_URL = "https://i.ibb.co/QFVFJxbB/photo-2025-09-20-12-17-02.jpg"
  const WA_URL = `https://wa.me/628xxxxxxxxxx?text=Mau checkout, total: Rp ${total}` // ganti nomor

  if (!open) return null

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999]'>

      {/* QRIS FULLSCREEN POPUP – WA ADA DI SINI */}
      {showQR && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col justify-center items-center z-[9999] p-6'>
          <h2 className='text-lg font-bold mb-3'>Scan QRIS</h2>

          <img src={QRIS_URL} className="w-60 rounded-xl shadow-xl mb-4" />

          <p className='text-sm text-center mb-4'>
            Silakan lakukan pembayaran melalui QRIS. 
            Setelah selesai, klik tombol di bawah untuk melanjutkan ke WhatsApp.
          </p>

          <button
            onClick={() => {
              window.open(WA_URL, "_blank")
              setShowQR(false)
              setOpen(false)
            }}
            className='bg-green-600 w-full max-w-xs py-2 rounded-lg mb-2'
          >
            Sudah bayar, lanjut WhatsApp
          </button>

          <button
            onClick={() => setShowQR(false)}
            className='bg-red-600 w-full max-w-xs py-2 rounded-lg mt-1'
          >
            Tutup
          </button>
        </div>
      )}

      {/* Popup keranjang */}
      <div className='bg-gray-900 w-80 p-5 rounded-2xl shadow-xl relative'>
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

        {/* TOMBOL CHECKOUT → QRIS DULU */}
        <button
          onClick={() => setShowQR(true)}
          className='block bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg mb-2 w-full'
        >
          Checkout (Bayar via QRIS)
        </button>

        {/* HAPUS tombol Checkout WhatsApp langsung */}
        {/* <a ...>Checkout WhatsApp</a> → DIHAPUS */}

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
