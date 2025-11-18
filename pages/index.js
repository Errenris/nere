import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import CartModal from '../components/CartModal'
import products from '../data/products.json'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  const addToCart = (p) => setCart(prev => [...prev, p])
  const removeItem = (i) => setCart(prev => prev.filter((_,x)=> x!==i))

  const checkoutWA = () => {
    const list = cart.map(p => `- ${p.title} (${p.price})`).join('%0A')
    const wa = `https://wa.me/6289601570287?text=Halo%20min,%20checkout:%0A${list}
    ini bukti tf nya min`
    window.open(wa,'_blank')
  }

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-black via-gray-900 to-gray-950">
      <Head><title>NERESTORE</title></Head>

      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">NERESTORE</h1>
          <button 
            onClick={()=>setOpen(true)} 
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold"
          >
            Keranjang ({cart.length})
          </button>
        </div>

        {/* GRID PRODUK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart}/>
          ))}
        </div>

        {/* ➜ LINK DI BAWAH PRODUK (BAGIAN YANG DITAMBAH) */}
        <div className="flex justify-center mt-24 mb-10">
          <a
            href="https://sfl.gl/3ZfK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            Kunjungi Web Akses di Sini
          </a>
        </div>

        <CartModal 
          open={open}
          cart={cart}
          close={()=>setOpen(false)}
          removeItem={removeItem}
          checkoutWA={checkoutWA}
        />
      </div>
    </div>
  )
}
