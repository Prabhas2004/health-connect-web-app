
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DoctorSearch } from "@/components/DoctorSearch";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
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
