import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import CartModal from '../components/CartModal'
import products from '../data/products.json'
import { useState } from 'react'

const CAT_EMOJIS = ['😺', '😸', '😹', '😻', '😼']

export default function Home() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  const [toast, setToast] = useState({ open: false, message: '' })
  const [cartBump, setCartBump] = useState(false)

  const showToast = (message) => {
    setToast({ open: true, message })
    setTimeout(() => setToast((prev) => ({ ...prev, open: false })), 2500)
  }

  const addToCart = (p) => {
    setCart((prev) => [...prev, p])
    showToast(`${p.title} berhasil ditambahkan ke keranjang`)
    setCartBump(true)
    setTimeout(() => setCartBump(false), 320)
  }

  const removeItem = (i) => setCart((prev) => prev.filter((_, x) => x !== i))

  const checkoutWA = () => {
    const list = cart.map((p) => `- ${p.title} (${p.price})`).join('%0A')
    const wa = `https://wa.me/6289601570287?text=Halo%20min,%20checkout:%0A${list}%0A%0Aini bukti tf nya min`
    window.open(wa, '_blank')
  }

  return (
    <div className="min-h-screen text-slate-50 relative overflow-hidden bg-[#070A12]">
      <Head><title>NERESTORE DIGITAL PREMIUM 🍃</title></Head>

      {/* Background modern: grid halus + glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(70%_50%_at_90%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(70%_55%_at_10%_20%,rgba(245,158,11,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
      </div>

      {/* Kucing melayang (lebih subtle) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`floating-cat floating-cat-${i}`}>
            {CAT_EMOJIS[i % CAT_EMOJIS.length]}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 md:py-10">
        {/* Top Bar modern */}
        <header className="flex items-center justify-between mb-7 md:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-extrabold text-[13px] shadow-[0_12px_30px_rgba(16,185,129,0.25)] border border-emerald-300/20">
              NE
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
                NERESTORE
              </h1>
              <p className="text-xs md:text-sm text-slate-400">
                Toko paket premium murah &amp; resmi
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`group inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold
            bg-gradient-to-r from-yellow-300 to-amber-400 text-black
            shadow-[0_16px_40px_rgba(245,158,11,0.18)]
            border border-white/10
            hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(245,158,11,0.28)]
            transition ${cartBump ? 'cart-bump' : ''}`}
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🛒</span>
              <span>Keranjang</span>
            </span>
            <span className="inline-flex items-center justify-center min-w-[28px] h-[28px] rounded-full bg-black/15 text-xs font-bold">
              {cart.length}
            </span>
          </button>
        </header>

        {/* HERO modern card */}
        <section className="mb-8 md:mb-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 md:p-7 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] md:text-xs text-emerald-200 mb-3">
                  <span className="text-emerald-400 text-base">●</span>
                  Paket Canva aman, garansi sesuai deskripsi
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  Upgrade premium kamu
                  <span className="text-emerald-300"> dalam hitungan menit.</span>
                </h2>

                <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
                  Pilih paket Canva Pro / Designer sesuai kebutuhanmu, bayar via QRIS
                  atau transfer, lalu tim kami proses dan konfirmasi lewat WhatsApp.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-200/90">
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">
                    ⚡ Proses cepat
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">
                    💳 QRIS / Transfer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">
                    ✅ Support WA
                  </span>
                </div>
              </div>

              {/* mini highlight */}
              <div className="md:w-[320px] shrink-0">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs text-slate-400">Tersedia</p>
                  <p className="text-lg font-bold mt-1">
                    {products.length} Paket Canva
                  </p>
                  <div className="mt-3 h-[1px] bg-white/10" />
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    Tinggal klik <b>Tambah</b> → buka <b>Keranjang</b> → checkout via WA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produk */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 md:p-6 shadow-[0_18px_70px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                Pilih Paket Canva
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                Tinggal klik tambah, lalu checkout lewat WhatsApp.
              </p>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              {products.length} paket tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Link bawah */}
        <section className="mt-10 md:mt-14 mb-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs md:text-sm text-slate-400">
              Butuh akses lain atau instruksi lebih lengkap?
            </p>
            <a
              href="https://sub4unlock.io/AiN6p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white
              bg-gradient-to-r from-blue-600 to-indigo-600
              shadow-[0_18px_55px_rgba(59,130,246,0.25)]
              border border-white/10
              hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(99,102,241,0.28)]
              transition"
            >
              🌐 Kunjungi halaman akses di sini
            </a>
          </div>
        </section>

        <CartModal
          open={open}
          cart={cart}
          close={() => setOpen(false)}
          removeItem={removeItem}
          checkoutWA={checkoutWA}
        />
      </div>

      {/* Toast */}
      <div
        className={`fixed inset-x-0 bottom-5 z-50 flex justify-center pointer-events-none transition-all duration-300
        ${toast.open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        {toast.message && (
          <div className="pointer-events-auto px-4 py-3 rounded-2xl bg-emerald-400 text-sm text-slate-950 shadow-xl border border-emerald-200/40 flex items-center gap-2 toast-pop">
            <span>✅</span>
            <span>{toast.message}</span>
          </div>
        )}
      </div>

      <style jsx global>{`
        /* tombol keranjang bump */
        @keyframes cart-bump {
          0% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-4px) scale(1.02); }
          60% { transform: translateY(0) scale(1); }
          100% { transform: translateY(0) scale(1); }
        }
        .cart-bump { animation: cart-bump 0.32s ease-out; }

        /* toast */
        @keyframes toast-pop {
          0% { transform: translateY(6px) scale(0.96); opacity: 0; }
          60% { transform: translateY(0) scale(1.01); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .toast-pop { animation: toast-pop 0.25s ease-out; }

        /* kucing floating - lebih halus */
        @keyframes float-cat {
          0% { transform: translateY(115vh) translateX(0) rotate(-4deg) scale(0.9); opacity: 0; }
          15% { opacity: 0.18; }
          55% { opacity: 0.32; }
          100% { transform: translateY(-25vh) translateX(32px) rotate(6deg) scale(1.1); opacity: 0; }
        }
        .floating-cat {
          position: absolute;
          font-size: 22px;
          opacity: 0.22;
          filter: blur(0.2px) drop-shadow(0 10px 18px rgba(0,0,0,0.6));
          animation-name: float-cat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          user-select: none;
        }

        .floating-cat-0 { left: 6%;  animation-duration: 26s; animation-delay: -2s; }
        .floating-cat-1 { left: 16%; animation-duration: 22s; animation-delay: -9s; }
        .floating-cat-2 { left: 28%; animation-duration: 28s; animation-delay: -14s; }
        .floating-cat-3 { left: 42%; animation-duration: 24s; animation-delay: -6s; }
        .floating-cat-4 { left: 54%; animation-duration: 30s; animation-delay: -18s; }
        .floating-cat-5 { left: 66%; animation-duration: 23s; animation-delay: -11s; }
        .floating-cat-6 { left: 78%; animation-duration: 27s; animation-delay: -20s; }
        .floating-cat-7 { left: 90%; animation-duration: 31s; animation-delay: -7s; }
        .floating-cat-8 { left: 12%; animation-duration: 29s; animation-delay: -22s; }
        .floating-cat-9 { left: 60%; animation-duration: 33s; animation-delay: -16s; }

        @media (max-width: 640px) {
          .floating-cat { font-size: 18px; opacity: 0.18; }
        }
      `}</style>
    </div>
  )
}