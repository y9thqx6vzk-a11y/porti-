import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow print:block">
        <Hero />
        <Projects />
        <About />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
