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
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#f5f5f5] text-center py-2 text-xs tracking-wider">
        FREE SHIPPING ON ALL WINE CLUB ORDERS
      </div>

      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200">
        <div className="text-4xl font-bold tracking-wider">
          WATKINS
        </div>
        <nav className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-gray-600">SHOP</a>
          <a href="#" className="hover:text-gray-600">WINE CLUB</a>
          <a href="#" className="hover:text-gray-600">VISIT</a>
          <a href="#" className="hover:text-gray-600">ABOUT</a>
          <a href="#" className="hover:text-gray-600">ACCOUNT</a>
          <a href="#" className="hover:text-gray-600">CART (0)</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <Image
          src="/vineyard.jpg"
          alt="Vineyard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 p-16 text-white">
          <h2 className="text-5xl font-light mb-2">SELECT AND ENJOY,</h2>
          <h3 className="text-5xl font-light mb-8">JOIN THE WINE CLUB.</h3>
          <button className="bg-white text-black px-12 py-3 text-sm hover:bg-gray-100 transition-colors">
            JOIN
          </button>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl md:text-4xl text-center max-w-4xl mx-auto font-light leading-relaxed">
          NEW WAVE OF SERIOUS WINEMAKERS FROM ADELAIDE HILLS AND LANGHORNE CREEK
        </h2>
      </section>

      {/* Wine Grid */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Wine 1 */}
          <div>
            <div className="aspect-[4/5] relative mb-6">
              <Image
                src="/wine1.jpg"
                alt="2023 Chardonnay"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mb-2">2023 Chardonnay</h3>
            <p className="text-gray-600">$35.00</p>
          </div>

          {/* Wine 2 */}
          <div>
            <div className="aspect-[4/5] relative mb-6">
              <Image
                src="/wine2.jpg"
                alt="2023 Pinot Noir"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mb-2">2023 Pinot Noir</h3>
            <p className="text-gray-600">$42.00</p>
          </div>

          {/* Wine 3 */}
          <div>
            <div className="aspect-[4/5] relative mb-6">
              <Image
                src="/wine3.jpg"
                alt="2023 Cabernet"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mb-2">2023 Cabernet</h3>
            <p className="text-gray-600">$38.00</p>
          </div>
        </div>
      </section>
    </div>
  )
}
