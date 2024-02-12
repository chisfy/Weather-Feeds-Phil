import React from "react"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import App from "./App"
import { LocationContext } from "./context/locationbuttoncontext"

const mockContextValue = {
    locations: [],
    setLocations: jest.fn(),
    longitude: 0,
    setLongitude: jest.fn(),
    latitude: 0,
    setLatitude: jest.fn(),
    showCard: false,
    setShowCard: jest.fn(),
    index: 0,
    setIndex: jest.fn()
}

test("basic test", () => {

})

test("checking basic render of the page", async () => {
    render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
})

test("checking logo to be on main page", async () => {
    render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
})