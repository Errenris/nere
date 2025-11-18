import React, { useState } from 'react'

export default function CartModal({ open, cart, close, removeItem, checkoutWA }) {
  const [showQR, setShowQR] = useState(false)

  if (!open) return null;

  const total = cart.reduce((a,b)=> a + Number(b.price.replace(/[^0-9]/g,'')), 0);
  const QRIS_URL = "https://i.ibb.co/QFVFJxbB/photo-2025-09-20-12-17-02.jpg"

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* POPUP QRIS DI ATAS KERANJANG */}
      {showQR && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[60] px-6">
          <h2 className="text-lg font-bold mb-3">Scan QRIS</h2>

          <img src={QRIS_URL} className="w-60 rounded-xl shadow-xl mb-4" />

          <p className="text-sm text-center mb-4">
            Silakan lakukan pembayaran terlebih dahulu melalui QRIS.
            Setelah selesai, klik tombol di bawah untuk lanjut ke WhatsApp.
          </p>

          <button
            onClick={() => {
              // lanjut ke WA setelah user klaim sudah bayar
              checkoutWA()
              setShowQR(false)
              close()
            }}
            className="w-full max-w-xs bg-green-600 py-2 rounded-lg mb-2"
          >
            Sudah bayar, lanjut WhatsApp
          </button>

          <button
            onClick={() => setShowQR(false)}
            className="w-full max-w-xs bg-gray-700 py-2 rounded-lg"
          >
            Belum, kembali ke keranjang
          </button>
        </div>
      )}

      {/* MODAL KERANJANG */}
      <div className="bg-gray-900 p-5 rounded-xl w-80 relative">
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

          {/* DULUNYA: onClick={checkoutWA} */}
          <button
            onClick={() => setShowQR(true)}
            className="flex-1 bg-green-600 py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
