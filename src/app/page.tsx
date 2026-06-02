import { BookingForm } from "@/components/BookingForm";
import { CareProcess } from "@/components/CareProcess";
import { ContactMap } from "@/components/ContactMap";
import { EnvironmentCarousel } from "@/components/EnvironmentCarousel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <CareProcess />
        <EnvironmentCarousel />
        <Pricing />
        <Reviews />
        <section id="contact" className="bg-[var(--mint-dark)] text-white">
          <div className="mx-auto grid w-[min(1160px,calc(100%_-_32px))] gap-10 py-16 md:grid-cols-[1fr_0.9fr] md:py-[72px]">
            <ContactMap />
            <BookingForm />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
