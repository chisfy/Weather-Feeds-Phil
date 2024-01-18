import React, { createContext, useContext, useState } from "react";

//error saying it needs an arugment but it intentially left blank as it is a built in react function
export const LocationContext = createContext<any>(undefined!);

export function LocationProvider({ children }: React.PropsWithChildren<{}>) {
    const [location, setLocation] = useState([]);
    
    return (
        <LocationContext.Provider value={{ location, setLocation }}>
        {children}
        </LocationContext.Provider>
    );
}