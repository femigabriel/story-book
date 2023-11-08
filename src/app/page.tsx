"use client";

import React from "react";
import { AboutPage } from "@/components/home/AboutPage";
import { Feautures } from "@/components/home/Feautures";
import { Footer } from "@/components/home/Footer";
import { LandingPage } from "@/components/home/LandingPage";

export default function Home() {
  return (
    <div className="home">
      <LandingPage />
      <Feautures />
      <AboutPage />
      <Footer />
    </div>
  );
}
