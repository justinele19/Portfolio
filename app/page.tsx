import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedProjects } from "./components/SelectedProjects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedProjects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
