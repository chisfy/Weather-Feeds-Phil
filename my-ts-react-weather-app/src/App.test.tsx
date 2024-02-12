import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
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
});

test("checking what is the basic render of the page", async () => {
    const { debug } = render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
    debug();
})

test("checking main is on the page", async () => {
    render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
});

test("checking title is on the page", async () => {
    render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
    const title = screen.getByText("Weather Feeds Phil!");
    expect(title).toBeInTheDocument();
    expect(title.outerHTML).toBe("<strong>Weather Feeds Phil!</strong>")
});

test("checking footer is on the page", async () => {
    render(
    <LocationContext.Provider value={mockContextValue}>
        <App />
    </LocationContext.Provider>
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer.childElementCount).toBe(3);
    expect(footer.localName).toBe("footer");
});