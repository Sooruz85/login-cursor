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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 px-8 py-6 flex justify-between items-center">
        <div className="text-xl font-light tracking-wider">
          SURFSTYLE
        </div>
        <nav className="flex space-x-8 text-sm font-light">
          <a href="#" className="hover:text-gray-300">SERVICES</a>
          <a href="#" className="hover:text-gray-300">WORK</a>
          <a href="#" className="hover:text-gray-300">ARTICLES</a>
          <a href="#" className="hover:text-gray-300">ABOUT</a>
          <a href="#" className="hover:text-gray-300">CONTACT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/surf.jpg"
          alt="Surfer riding a wave"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay légèrement plus sombre */}
        <div className="absolute bottom-32 left-8 z-10">
          <h1 className="text-6xl font-light mb-4 tracking-tight max-w-2xl">
            RIDING THE DIGITAL WAVE
          </h1>
          <p className="text-sm font-light text-gray-300">
            Recent work: Surf Magazine, Ocean Photography, Wave Digital Campaign
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full px-8 py-4 text-xs font-light text-gray-400">
        <div className="flex justify-end space-x-4">
          <span>© 2024 SURFSTYLE</span>
          <a href="#" className="hover:text-white">Articles</a>
          <a href="#" className="hover:text-white">Downloads</a>
          <a href="#" className="hover:text-white">Privacy Statement</a>
        </div>
      </footer>
    </div>
  )
}
