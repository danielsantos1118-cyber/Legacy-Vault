import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <StatBar />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn delay={60}>
          <Services />
        </FadeIn>
        <FadeIn delay={60}>
          <Testimonials />
        </FadeIn>
        <FadeIn delay={60}>
          <ContactForm />
        </FadeIn>
      </main>
      <FadeIn delay={60}>
        <Footer />
      </FadeIn>
    </>
  );
}
