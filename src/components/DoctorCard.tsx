
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  availability: string;
}

export function DoctorCard({ name, specialty, image, rating, reviews, availability }: DoctorProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
      <div className="aspect-[3/4] bg-gray-100 relative">
        {image ? (
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-medical-100">
            <User size={64} className="text-medical-400" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium flex items-center gap-1">
          <span className="text-yellow-500">★</span> {rating} ({reviews})
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-medical-900">{name}</h3>
        <p className="text-gray-600 text-sm">{specialty}</p>
        <div className="mt-2 text-xs text-medical-600 font-medium">
          {availability}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs border-medical-500 text-medical-500 hover:bg-medical-50">
            View Profile
          </Button>
          <Button size="sm" className="text-xs bg-medical-500 hover:bg-medical-600">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
