import Image from "next/image";
import styles from "./page.module.css";
import { Stack } from "@mantine/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Aboutus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function Home() {
  return (
    <Stack gap={0} >
      <Navbar />
      <Hero />
      <Features />
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </Stack>
  );
}
