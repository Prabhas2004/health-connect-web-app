
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DoctorSearch } from "@/components/DoctorSearch";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Welcome toast when the page loads
    toast.info("Welcome to HealthConnect!", {
      description: "Find doctors and schedule appointments with ease."
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <DoctorSearch />
        <AppointmentForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
