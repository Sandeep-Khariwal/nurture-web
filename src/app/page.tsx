import Image from "next/image";
import styles from "./page.module.css";
import { Stack } from "@mantine/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboutus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Features from "./components/Features";
import AboutUsPage from "./components/AboutUsPage";

export default function Home() {
  return (
    <Stack gap={0} >
      <Navbar />
      <Hero />
      <Features />
      <AboutUsPage/>
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </Stack>
  );
}
