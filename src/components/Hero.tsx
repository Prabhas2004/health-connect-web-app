
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('book-appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 font-heading">
            Your Health Is Our <span className="text-medical-500">Priority</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Schedule appointments with top doctors and receive quality healthcare services when and where you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-medical-500 hover:bg-medical-600" size="lg" onClick={scrollToAppointment}>
              Book an Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-medical-500 text-medical-500 hover:bg-medical-50">
              Find a Doctor
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-medical-${i * 100}`}></div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-medical-800">1000+</span> happy patients
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px]">
            <div className="absolute inset-0 bg-medical-500/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-200/40 to-transparent"></div>
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center">
              <p className="text-xs text-gray-500">Average Rating</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-medical-500">4.9</span>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">from 2,500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
