import { createClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function Home() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header avec bouton de déconnexion */}
      <nav className="absolute top-0 right-0 p-6">
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            Se déconnecter
          </button>
        </form>
      </nav>

      {/* Logo */}
      <div className="p-8">
        <h1 className="text-4xl font-bold tracking-tighter">AHARU</h1>
      </div>

      {/* Section Expertises */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-7xl font-light mb-16">Expertises</h2>
        
        <div className="space-y-12">
          <div className="border-t border-black pt-8">
            <h3 className="text-2xl mb-6">Site Vitrine</h3>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="text-sm">/FRONT-END</span>
              <span className="text-sm">/BACK-END (CMS)</span>
              <span className="text-sm">/ANIMATIONS CSS</span>
              <span className="text-sm">/INTERACTIONS</span>
              <span className="text-sm">/EXPÉRIENCE DIGITALE</span>
              <span className="text-sm">/WEBGL (3D)</span>
            </div>

            <button className="border border-black rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
              VOIR L'EXPERTISE
            </button>
          </div>

          {/* Grid de navigation */}
          <div className="grid grid-cols-5 gap-4 pt-12 border-t border-black">
            <div className="text-sm">01<br/>STRATÉGIE & CONSEIL</div>
            <div className="text-sm">02<br/>DIRECTION ARTISTIQUE</div>
            <div className="text-sm">03<br/>SITE VITRINE</div>
            <div className="text-sm">04</div>
            <div className="text-sm">05</div>
          </div>
        </div>
      </section>

      {/* Section Image */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/mountain.jpg"
          alt="Mountain view"
          fill
          className="object-cover"
          priority
        />
      </section>
    </main>
  )
}
