export interface Room {
  id: number;
  name: string;
  slug: string; // used for dynamic routes 
  pricePerNight: number;
  capacity: number;
  size: string;
  bedType: string;
  view: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];  
  images: string[];   
}


