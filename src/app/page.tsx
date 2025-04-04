import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function Home() {
  // Commenté temporairement pour le développement
  // const supabase = createClient()
  // const { data: { session } } = await supabase.auth.getSession()

  // if (!session) {
  //   redirect('/login')
  // }

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <div className="bg-gray-100 text-center py-2 text-sm">
        FREE SHIPPING ON ALL WINE CLUB ORDERS
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white">
        <h1 className="text-4xl font-bold tracking-widest">WATKINS</h1>
        <div className="flex gap-8 items-center">
          <a href="#" className="hover:text-gray-600">SHOP</a>
          <a href="#" className="hover:text-gray-600">WINE CLUB</a>
          <a href="#" className="hover:text-gray-600">VISIT</a>
          <a href="#" className="hover:text-gray-600">ABOUT</a>
          <a href="#" className="hover:text-gray-600">ACCOUNT</a>
          <a href="#" className="hover:text-gray-600">CART (0)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/vineyard.jpg"
          alt="Vineyard view"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <div className="text-white max-w-xl mb-8">
            <h2 className="text-5xl font-light mb-4">SELECT AND ENJOY,</h2>
            <h3 className="text-5xl font-light mb-8">JOIN THE WINE CLUB.</h3>
            <button className="bg-white text-black px-8 py-3 text-sm hover:bg-gray-100 transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* New Wave Section */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-light max-w-4xl mx-auto leading-relaxed">
          NEW WAVE OF SERIOUS WINEMAKERS FROM ADELAIDE HILLS AND LANGHORNE CREEK
        </h2>
      </section>

      {/* Featured Wines Grid */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="aspect-[3/4] relative">
              <Image
                src="/wine1.jpg"
                alt="Wine bottle"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl">2023 Chardonnay</h3>
            <p className="text-gray-600">$35.00</p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] relative">
              <Image
                src="/wine2.jpg"
                alt="Wine bottle"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl">2023 Pinot Noir</h3>
            <p className="text-gray-600">$42.00</p>
          </div>
          <div className="space-y-4">
            <div className="aspect-[3/4] relative">
              <Image
                src="/wine3.jpg"
                alt="Wine bottle"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl">2023 Cabernet</h3>
            <p className="text-gray-600">$38.00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
