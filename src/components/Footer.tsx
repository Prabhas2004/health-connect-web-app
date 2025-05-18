
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-medical-900 font-bold text-lg">H</span>
              </span>
              <span className="text-xl font-heading font-bold text-white">HealthConnect</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Making quality healthcare accessible to everyone through our innovative platform.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Primary Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialized Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telemedicine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preventive Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mental Health</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white placeholder:text-gray-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500 flex-grow"
              />
              <Button size="sm" className="bg-medical-500 hover:bg-medical-600">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
