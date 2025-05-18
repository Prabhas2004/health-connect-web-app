
import { useState } from "react";
import { DoctorCard } from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

export function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.9,
      reviews: 124,
      availability: "Available Today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.7,
      reviews: 98,
      availability: "Next Available: Tomorrow"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.8,
      reviews: 156,
      availability: "Available Today"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
      reviews: 87,
      availability: "Next Available: Friday"
    }
  ];

  // Filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="find-doctors" className="bg-gray-50 py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-medical-900 font-heading">Find Doctors</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Search for the best doctors in your area and book appointments instantly
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Specialty</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Enter location" 
                  className="pl-9"
                />
              </div>
            </div>
            
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Search</label>
              <Input 
                placeholder="Search by name or specialty" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button className="bg-medical-500 hover:bg-medical-600">
              Search Doctors
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
              rating={doctor.rating}
              reviews={doctor.reviews}
              availability={doctor.availability}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-medical-500 text-medical-500 hover:bg-medical-50">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
