import React, { createContext, useState } from "react";

// wanted to create a type for the locations array but it was not working
export type locationsStructure = {
  longitude: number,
  latitude: number,
  city: string,
  country: string,
  flag: string,
  topRestaurant: string,
  description: string,
  address: string
}

export interface LocationContextValue {
  locations: locationsStructure[];
  setLocations: React.Dispatch<React.SetStateAction<locationsStructure[]>>;
  longitude: number | undefined;
  setLongitude: React.Dispatch<React.SetStateAction<number | undefined>>;
  latitude: number | undefined;
  setLatitude: React.Dispatch<React.SetStateAction<number | undefined>>;
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  };

//error saying it needs an arugment but it intentially left blank as it is a built in react function
export const LocationContext = createContext<LocationContextValue | null>(null);

export function LocationProvider({ children }: React.PropsWithChildren<{}>) {
    const [locations, setLocations] = useState<locationsStructure[]>([
        {
          longitude: 100.5014,
          latitude: 13.754,
          city: "Bangkok",
          country: "Thailand",
          flag: "images/th.svg",
          topRestaurant: "Jay Fai",
          description: "Jay Fai is famous for her award-winning crab omelet and tom yum soup dishes. She has the only Michelin Star awarded to a street food establishment.",
          address: "337-261 Maha Chai Rd, Khwaeng Samran Rat, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand"
        },
        {
          longitude: -9.1333,
          latitude: 38.7167,
          city: "Lisbon",
          country: "Portugal",
          flag: "images/pt.svg",
          topRestaurant: "Jesus é Goês",
          description: "Jesus makes Portuguese influenced Indian food, their signature dish, the Holy Hamburger, is a must-try.",
          address: "R. São José 23, 1150-352 Lisboa, Portugal"
        },
        {
          longitude: -99.1277,
          latitude: 19.4285,
          city: "Mexico City",
          country: "Mexico",
          flag: "images/mx.svg",
          topRestaurant: "Pujol",
          description: "Pujol is one of the world's 50 best restaurants. Famous for their Mole Madre (3 years of mole sauce blended) and pulque ice cream with guava for dessert.",
          address: "Tennyson 133, Polanco, Polanco IV Secc, 11570 Ciudad de México, CDMX, Mexico"
        },
        {
          longitude: 34.7806,
          latitude: 32.0809,
          city: "Tel Aviv",
          country: "Israel",
          flag: "images/il.svg",
          topRestaurant: "Sherry Herring",
          description: "Located in Shuk HaNamal, a Tel Aviv port market created by Ansky. With over 70 vendors, Sherry Herring offers a herring sandwich traditionally served with a shot of vodka. L’chaim!",
          address: "Nemal Tel Aviv St 12, Tel Aviv-Yafo, Israel"
        },
        {
          longitude: 106.6968,
          latitude: 10.8022,
          city: "Saigon",
          country: "Vietnam",
          flag: "images/vn.svg",
          topRestaurant: "Maison Merou",
          description: "Maison Merou was started by two expats from France who trekked across the jungle and found cocoa trees. They decided to harvest cocoa seeds and create luxury chocolates in Vietnam.",
          address: "167-169 Calmette, Phường Nguyễn Thái Bìn, Ho Chi Minh City, Hồ Chí Minh, Vietnam"
        },
        {
          longitude: -90.0751,
          latitude: 29.9547,
          city: "New Orleans",
          country: "USA",
          flag: "images/us.svg",
          topRestaurant: "Dooky Chase's",
          description: "Chef Leah Chase has been cooking for over 70 years at Dooky Chase. She is the New Orleans creole cuisine legend and serves a delicious gumbo.",
          address: "2301 Orleans Ave, New Orleans, LA 70119, United States"
        },
      ]);
      const [longitude, setLongitude] = useState<number | undefined>(undefined);
      const [latitude, setLatitude] = useState<number | undefined>(undefined);
      const [showCard, setShowCard] = useState<boolean>(false);
      const [index, setIndex] = useState<number>(0);

    //need to experiment with this
    //put locations in a array and map through them
    
    return (
        <LocationContext.Provider value={{ locations, setLocations, longitude, setLongitude, latitude, setLatitude, showCard, setShowCard, index, setIndex }}>
        {children}
        </LocationContext.Provider>
    );
}