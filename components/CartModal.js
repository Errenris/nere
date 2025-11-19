import React, { useState } from 'react'

export default function CartModal({ open, cart, close, removeItem, checkoutWA }) {
  const [showQR, setShowQR] = useState(false)

  if (!open) return null

  const total = cart.reduce((a, b) => a + Number(b.price.replace(/[^0-9]/g, '')), 0)
  const QRIS_URL = "https://i.ibb.co/QFVFJxbB/photo-2025-09-20-12-17-02.jpg"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* === MODE QRIS SAJA === */}
      {showQR && (
        <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-800/90 p-5 shadow-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-1">SCAN QRIS DI BAWAH, JIKA TIDAK MUNCUL SILAHKAN REFRESH BROWSER NYA YA 😊</h2>
          <p className="text-xs text-gray-300 mb-4">
            Silakan lakukan pembayaran melalui QRIS. Setelah selesai jangan lupa ss bukti tf nya, lalu klik tombol di bawah
            untuk melanjutkan ke WhatsApp.
          </p>

          <div className="flex justify-center mb-4">
            <img
              src={QRIS_URL}
              className="w-56 rounded-xl shadow-xl border border-white/10"
              alt="QRIS"
            />
          </div>

          <div className="space-y-2">
            <button
              onClick={() => {
                checkoutWA()
                setShowQR(false)
                close()
              }}
              className="w-full rounded-xl py-2.5 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 transition"
            >
              ✅ Sudah bayar, lanjut WhatsApp
            </button>
            <button
              onClick={() => setShowQR(false)}
              className="w-full rounded-xl py-2.5 text-sm font-medium bg-slate-800 hover:bg-slate-700 border border-white/10 transition"
            >
              Kembali ke keranjang
            </button>
          </div>
        </div>
      )}

      {/* === MODE KERANJANG SAJA (HILANG kalau showQR = true) === */}
      {!showQR && (
        <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-2xl border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold">Keranjang</h2>
              <p className="text-xs text-gray-400">Cek dulu sebelum checkout</p>
            </div>
            <button
              onClick={close}
              className="text-gray-400 hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
            {cart.length === 0 && (
              <div className="text-gray-400 text-sm text-center py-6">
                Keranjang masih kosong
              </div>
            )}

            {cart.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-slate-800/70 px-3 py-2.5 border border-white/5"
              >
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-emerald-300 mt-0.5">{item.price}</div>
                </div>
                <button
                  onClick={() => removeItem(i)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-slate-900/80 px-3 py-3 border border-white/5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Total</span>
              <span className="font-semibold text-emerald-400">
                Rp {total.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={close}
              className="flex-1 rounded-xl bg-slate-800 py-2.5 text-sm hover:bg-slate-700 border border-white/10 transition"
            >
              Tutup
            </button>
            <button
              onClick={() => setShowQR(true)}
              className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-sm font-medium hover:bg-emerald-600 shadow-md transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
