/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Time from "./Time";

test("checking basic render of the component", () => {
    const { debug } = render(
        <Time />
    );
    debug();
})

test("checking component works as intended by updating by the time", async () => {
    render(
        <Time />
    );
    
    const currentTime: string = new Date().toLocaleTimeString();

    await waitFor(() => {
        const time: HTMLElement = screen.getByText(currentTime)
        expect(time).toBeInTheDocument();
    })

});