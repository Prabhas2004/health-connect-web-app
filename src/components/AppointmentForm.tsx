
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

export function AppointmentForm() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM"
  ];

  // Doctor options based on specialty
  const doctorsBySpecialty = {
    cardiology: ["Dr. Sarah Johnson"],
    dermatology: ["Dr. Michael Chen"],
    pediatrics: ["Dr. Emily Rodriguez"],
    orthopedics: ["Dr. James Wilson"],
    neurology: ["Dr. Lisa Wang"],
    psychiatry: ["Dr. Robert Patel"],
  };

  // Check if there is a selected doctor from the search section
  useEffect(() => {
    const handleDoctorSelected = (event: CustomEvent) => {
      const doctor = event.detail;
      if (doctor) {
        setSelectedDoctor(doctor.name);
        setSpecialty(doctor.specialty.toLowerCase());
      }
    };

    window.addEventListener('doctorSelected', handleDoctorSelected as EventListener);

    // Check localStorage on component mount
    const storedDoctor = localStorage.getItem('selectedDoctor');
    if (storedDoctor) {
      const doctor = JSON.parse(storedDoctor);
      setSelectedDoctor(doctor.name);
      setSpecialty(doctor.specialty.toLowerCase());
    }

    return () => {
      window.removeEventListener('doctorSelected', handleDoctorSelected as EventListener);
    };
  }, []);

  // Form validation
  const validateForm = () => {
    if (!name) {
      toast.error("Please enter your name");
      return false;
    }
    if (!email) {
      toast.error("Please enter your email");
      return false;
    }
    if (!phone) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!specialty) {
      toast.error("Please select a specialty");
      return false;
    }
    if (!selectedDoctor) {
      toast.error("Please select a doctor");
      return false;
    }
    if (!date) {
      toast.error("Please select a date");
      return false;
    }
    if (!time) {
      toast.error("Please select a time");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success response
      toast.success("Appointment scheduled successfully!", {
        description: `Your appointment with ${selectedDoctor} is confirmed for ${date} at ${time}.`
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setReason("");
      setSpecialty("");
      setSelectedDoctor("");
      localStorage.removeItem('selectedDoctor');
    } catch (error) {
      toast.error("Failed to schedule appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get available doctors based on selected specialty
  const getAvailableDoctors = () => {
    if (!specialty) return [];
    return doctorsBySpecialty[specialty as keyof typeof doctorsBySpecialty] || [];
  };

  return (
    <section id="book-appointment" className="bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-medical-900 font-heading">Book an Appointment</h2>
            <p className="mt-2 text-gray-600">
              Schedule your visit with our healthcare professionals
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input 
                    id="phone" 
                    placeholder="(555) 123-4567" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="specialty" className="text-sm font-medium">Select Specialty</label>
                  <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger id="specialty">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="psychiatry">Psychiatry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="doctor" className="text-sm font-medium">Select Doctor</label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor} disabled={!specialty}>
                    <SelectTrigger id="doctor">
                      <SelectValue placeholder={specialty ? "Choose a doctor" : "Select specialty first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableDoctors().map((doctor) => (
                        <SelectItem key={doctor} value={doctor}>{doctor}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="appointment-date" className="text-sm font-medium">Preferred Date</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      id="appointment-date" 
                      type="date" 
                      className="pl-9"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="time-slot" className="text-sm font-medium">Preferred Time</label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger id="time-slot">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">Reason for Visit</label>
                <Textarea 
                  id="reason" 
                  placeholder="Please briefly describe your symptoms or reason for appointment" 
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-medical-500 hover:bg-medical-600" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
