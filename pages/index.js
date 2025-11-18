import Head from 'next/head'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>JossStore — Digital Access</title>
        <meta name="description" content="JossStore clone - digital goods demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>

        <footer className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} JossStore — demo clone
        </footer>
      </main>
    </div>
  )
}
