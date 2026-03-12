import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductViewer } from "@/components/ProductViewer";
import { FeatureSection } from "@/components/FeatureSection";
import { FloatingShopBar } from "@/components/FloatingShopBar";

/**
 * Home page — assembles all MORAE landing-page sections.
 *
 * @returns {React.ReactElement} The Home page.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen select-none bg-black">
      {/* Subtle noise texture */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <ProductViewer />
      <FeatureSection />

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-black px-10 py-20 md:px-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <span className="font-[var(--font-instrument-serif)] text-2xl italic uppercase tracking-widest text-white">
              MORAE®
            </span>
            <p className="max-w-xs font-[var(--font-roboto-mono)] text-[10px] uppercase leading-relaxed text-white/35">
              Designed for those who hear the silence between the notes. The
              future of sound is clear.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-[var(--font-roboto-mono)] text-[10px] uppercase tracking-widest text-white/20">
                [ Social ]
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="font-[var(--font-roboto-mono)] text-[10px] uppercase text-white transition-colors hover:text-morae-orange"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-[var(--font-roboto-mono)] text-[10px] uppercase text-white transition-colors hover:text-morae-orange"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-[var(--font-roboto-mono)] text-[10px] uppercase tracking-widest text-white/20">
                [ Support ]
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="font-[var(--font-roboto-mono)] text-[10px] uppercase text-white transition-colors hover:text-morae-orange"
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="font-[var(--font-roboto-mono)] text-[10px] uppercase text-white transition-colors hover:text-morae-orange"
                >
                  Returns
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-white/5 pt-8">
          <span className="font-[var(--font-roboto-mono)] text-[9px] uppercase text-white/20">
            © 2026 MORAE®
          </span>
          <span className="font-[var(--font-roboto-mono)] text-[9px] uppercase italic text-white/20">
            Silence Speaks Louder
          </span>
        </div>
      </footer>

      {/* Persistent purchase bar */}
      <FloatingShopBar />
    </main>
  );
}
