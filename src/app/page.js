'use client';
import Banner from "@/components/landing/Banner";
import Features from "@/components/landing/Features";
import JoinComunity from "@/components/landing/JoinComunity";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/partials/Footer";
import MainNavigationBar from "@/components/partials/MainNavBar";


export default function Home() {

  return (
    <>
      <div>
        <MainNavigationBar />
        <Banner />
        <Features />
        <Testimonials />
        <JoinComunity /> 
        <Footer />
      </div>
    </>
  );
}
