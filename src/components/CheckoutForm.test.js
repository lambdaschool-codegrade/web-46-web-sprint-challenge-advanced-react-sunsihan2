import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";


// Write up the two tests here and make sure they are testing what the title shows
const info ={
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21,
  }

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/First Name:/i)
    userEvent.type(firstNameInput, "sihan")
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    userEvent.type(lastNameInput, "sun")
    const addressInput = screen.getByLabelText(/Address:/i)
    userEvent.type(addressInput, "6301 SHELLMOUND ST, APT 417")
    const cityInput = screen.getByLabelText(/City:/i)
    userEvent.type(cityInput, "emeryville")
    const stateInput = screen.getByLabelText(/State:/i)
    userEvent.type(stateInput, 'ca')
    const zipInput = screen.getByLabelText(/Zip:/i)
    userEvent.type(zipInput, "94608")
    const button = screen.getByRole("button")
    userEvent.click(button)
    const feedback = screen.queryByText(/sihan/i)
    expect(feedback).toBeInTheDocument()
});
