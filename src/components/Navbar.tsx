
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-medical-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </span>
            <span className="text-xl font-heading font-bold text-medical-800">HealthConnect</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors">Doctors</a>
          <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors">Services</a>
          <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors">About</a>
          <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Book Appointment</Button>
        </div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors py-2">Home</a>
            <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors py-2">Doctors</a>
            <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors py-2">Services</a>
            <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors py-2">About</a>
            <a href="#" className="text-sm font-medium hover:text-medical-600 transition-colors py-2">Contact</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">Sign In</Button>
              <Button size="sm" className="w-full">Book Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
