import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import CartModal from '../components/CartModal'
import products from '../data/products.json'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  // state untuk notif
  const [toast, setToast] = useState({
    open: false,
    message: ''
  })

  // state untuk animasi "bump" di tombol keranjang
  const [cartBump, setCartBump] = useState(false)

  const showToast = (message) => {
    setToast({ open: true, message })

    // auto hide setelah 2.5 detik
    setTimeout(() => {
      setToast(prev => ({ ...prev, open: false }))
    }, 2500)
  }

  const addToCart = (p) => {
    setCart(prev => [...prev, p])
    showToast(`${p.title} berhasil ditambahkan ke keranjang`)

    // trigger animasi tombol keranjang
    setCartBump(true)
    setTimeout(() => {
      setCartBump(false)
    }, 300) // durasi harus sama dengan animasi di CSS
  }

  const removeItem = (i) =>
    setCart(prev => prev.filter((_, x) => x !== i))

  const checkoutWA = () => {
    const list = cart.map(p => `- ${p.title} (${p.price})`).join('%0A')
    const wa = `https://wa.me/6289601570287?text=Halo%20min,%20checkout:%0A${list}%0A%0Aini bukti tf nya min`
    window.open(wa, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Head><title>NERESTORE DIGITAL PREMIUM 🐱‍👤</title></Head>

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

        {/* TOP BAR */}
        <header className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500 flex items-center justify-center font-bold text-sm shadow-lg">
              NE
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                NERESTORE
              </h1>
              <p className="text-xs md:text-sm text-slate-400">
                Toko paket premium murah & resmi
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`inline-flex items-center gap-2 bg-yellow-400 text-black px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition ${cartBump ? 'cart-bump' : ''}`}
          >
            <span>🛒 Keranjang</span>
            <span className="inline-flex items-center justify-center min-w-[26px] h-[26px] rounded-full bg-black/10 text-xs">
              {cart.length}
            </span>
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] md:text-xs text-emerald-200 mb-3">
            <span className="text-emerald-400 text-base">●</span>
            Paket Canva aman, garansi sesuai deskripsi
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Upgrade premium kamu dalam hitungan menit.
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Pilih paket Canva Pro / Designer sesuai kebutuhanmu, bayar via QRIS
            atau transfer, lalu tim kami akan proses dan konfirmasi lewat WhatsApp.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs text-slate-300">
            <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-white/5">
              ⚡ Proses cepat & mudah
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-white/5">
              💳 Pembayaran via QRIS / TF
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-white/5">
              ✅ Support via WhatsApp
            </span>
          </div>
        </section>

        {/* PRODUK SECTION */}
        <section className="rounded-3xl bg-slate-900/60 border border-white/5 p-4 md:p-6 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Pilih Paket Canva
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                Tinggal klik tambah, lalu checkout lewat WhatsApp.
              </p>
            </div>
            <span className="hidden md:inline-block text-xs text-slate-400">
              {products.length} paket tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* LINK BAWAH HALAMAN */}
        <section className="mt-10 md:mt-14 mb-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs md:text-sm text-slate-400">
              Butuh akses lain atau instruksi lebih lengkap?
            </p>
            <a
              href="https://sfl.gl/3ZfK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition"
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

      {/* TOAST NOTIFICATION - TENGAH BAWAH + ANIMASI */}
      <div
        className={`fixed inset-x-0 bottom-5 z-50 flex justify-center pointer-events-none
        transition-all duration-300
        ${toast.open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        {toast.message && (
          <div className="pointer-events-auto px-4 py-3 rounded-2xl bg-emerald-500 text-sm text-slate-950 shadow-xl border border-emerald-300/60 flex items-center gap-2 toast-pop">
            <span>✅</span>
            <span>{toast.message}</span>
          </div>
        )}
      </div>

      {/* ANIMASI GLOBAL */}
      <style jsx global>{`
        @keyframes cart-bump {
          0% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }

        .cart-bump {
          animation: cart-bump 0.3s ease-out;
        }

        @keyframes toast-pop {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          50% {
            transform: scale(1.02);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .toast-pop {
          animation: toast-pop 0.25s ease-out;
        }
      `}</style>
    </div>
  )
}
