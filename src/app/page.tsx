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
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <Image
        src="/surf.jpg"
        alt="Background"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Header */}
      <header className="fixed w-full z-20 flex justify-between items-center px-8 py-6">
        <div className="text-xl">IAMJAMES</div>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:opacity-70 transition-opacity">SERVICES</a>
          <a href="#" className="hover:opacity-70 transition-opacity">WORK</a>
          <a href="#" className="hover:opacity-70 transition-opacity">ARTICLES</a>
          <a href="#" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-end min-h-screen pb-32">
        <div className="px-8">
          <h1 className="text-6xl font-extralight max-w-3xl mb-4 tracking-tight">
            Delivering breakthrough results with purpose and precision.
          </h1>
          <a href="#" className="text-white hover:opacity-70 transition-opacity underline text-sm">
            View the work
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full px-8 py-6 z-20">
        <div className="flex justify-end items-center text-xs gap-4 opacity-70">
          <span>© 2024 IAMJAMES</span>
          <a href="#" className="hover:opacity-70 transition-opacity">Articles</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Downloads</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Privacy Statement</a>
        </div>
      </footer>
    </div>
  )
}
