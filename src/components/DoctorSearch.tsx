
import { useState } from "react";
import { DoctorCard } from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

export function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [location, setLocation] = useState("");
  
  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.9,
      reviews: 124,
      availability: "Available Today",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.7,
      reviews: 98,
      availability: "Next Available: Tomorrow",
      location: "Boston, MA"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww",
      rating: 4.8,
      reviews: 156,
      availability: "Available Today",
      location: "Chicago, IL"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
      reviews: 87,
      availability: "Next Available: Friday",
      location: "Los Angeles, CA"
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
      reviews: 132,
      availability: "Available Today",
      location: "Seattle, WA"
    },
    {
      id: 6,
      name: "Dr. Robert Patel",
      specialty: "Psychiatry",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.7,
      reviews: 104,
      availability: "Next Available: Thursday",
      location: "Denver, CO"
    }
  ];

  // Filter doctors based on search query, specialty, and location
  const filteredDoctors = doctors.filter(doctor => {
    // Filter by search query (name or specialty)
    const matchesQuery = searchQuery === "" || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by specialty
    const matchesSpecialty = specialty === "all" || 
      doctor.specialty.toLowerCase() === specialty.toLowerCase();

    // Filter by location
    const matchesLocation = location === "" || 
      doctor.location.toLowerCase().includes(location.toLowerCase());

    return matchesQuery && matchesSpecialty && matchesLocation;
  });

  const handleSearch = () => {
    if (filteredDoctors.length === 0) {
      toast.info("No doctors found matching your criteria. Try adjusting your search.");
    } else {
      toast.success(`Found ${filteredDoctors.length} doctors matching your criteria.`);
    }
  };

  const scrollToAppointment = (doctorId: number) => {
    const appointmentSection = document.getElementById("book-appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
      // Find doctor from the list
      const selectedDoctor = doctors.find(doc => doc.id === doctorId);
      if (selectedDoctor) {
        // Set doctor in local storage for appointment form
        localStorage.setItem('selectedDoctor', JSON.stringify(selectedDoctor));
        // Trigger an event that AppointmentForm can listen for
        const event = new CustomEvent('doctorSelected', { detail: selectedDoctor });
        window.dispatchEvent(event);
        toast.success(`You selected ${selectedDoctor.name}`);
      }
    }
  };

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
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
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
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
            <Button className="bg-medical-500 hover:bg-medical-600" onClick={handleSearch}>
              Search Doctors
            </Button>
          </div>
        </div>
        
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No doctors match your search criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} onClick={() => scrollToAppointment(doctor.id)}>
                <DoctorCard
                  name={doctor.name}
                  specialty={doctor.specialty}
                  image={doctor.image}
                  rating={doctor.rating}
                  reviews={doctor.reviews}
                  availability={doctor.availability}
                />
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-medical-500 text-medical-500 hover:bg-medical-50">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
