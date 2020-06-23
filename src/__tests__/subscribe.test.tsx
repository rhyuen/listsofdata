import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/dom";
import { Subscribe } from "../Subscribe";

describe("email subscribe form", () => {
    test("appears on screen", async () => {
        const { getByText } = render(<Subscribe />);
        const target = /subscribe/i;
        expect(getByText(target).textContent).toEqual("Subscribe");
    });

    test("Invalid Email Box appears", async () => {
        const { getByPlaceholderText, getByText } = render(<Subscribe />);
        const placeholdertext = "email@myemail.ca";
        fireEvent.change(getByPlaceholderText(placeholdertext), { target: { value: 'a' } });
        await waitFor(() => {
            expect(getByText("Invalid Email").textContent).toEqual("Invalid Email");
        });

    });

    test("invalid email box appears and then disappears on valid email", async () => {
        const { getByPlaceholderText, getByText } = render(<Subscribe />);
        const placeholdertext = "email@myemail.ca";
        fireEvent.change(getByPlaceholderText(placeholdertext), { target: { value: 'a' } });
        await waitFor(() => {
            expect(getByText("Invalid Email").textContent).toEqual("Invalid Email");
            expect(screen.getByTestId("email_submit")).toHaveAttribute("disabled");
        });
        const targetValue = "robert@email.ca";
        fireEvent.change(getByPlaceholderText(placeholdertext), { target: { value: targetValue } });
        expect(screen.getByTestId("email_submit")).not.toHaveAttribute("disabled");

    });

    test("invalid text results in invalid email box, then empty string keeps invalid submit button", async () => {
        const { getByPlaceholderText, getByText } = render(<Subscribe />);
        const placeholdertext = "email@myemail.ca";
        fireEvent.change(getByPlaceholderText(placeholdertext), { target: { value: 'a' } });
        await waitFor(() => {
            expect(getByText("Invalid Email").textContent).toEqual("Invalid Email");
            expect(screen.getByTestId("email_submit")).toHaveAttribute("disabled");
        });
        const targetValue = "";
        fireEvent.change(getByPlaceholderText(placeholdertext), { target: { value: targetValue } });
        expect(screen.getByTestId("email_submit")).toHaveAttribute("disabled");
    });
});