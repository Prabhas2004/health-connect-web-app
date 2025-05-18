
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageSquare, Phone, Video, User } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Online Scheduling",
      description: "Schedule appointments 24/7 at your convenience. No waiting on hold or calling during office hours."
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Connect with doctors from the comfort of your home through secure video consultations."
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Get medical advice or follow-up care through scheduled phone appointments."
    },
    {
      icon: MessageSquare,
      title: "Doctor Chat",
      description: "Message your doctor directly with questions about your care or treatment."
    },
    {
      icon: User,
      title: "In-Person Visits",
      description: "Visit our modern facilities for physical examinations and specialized treatments."
    }
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-medical-900 font-heading">Our Services</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of healthcare services to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-medical-50 w-12 h-12 rounded-lg flex items-center justify-center text-medical-500 mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-medical-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
