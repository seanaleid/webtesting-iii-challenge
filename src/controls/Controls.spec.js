// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test(`provide buttons to toggle the 'closed' and 'locked' states.`, () => {
    const  { getByText } = render=(<Controls />)
    const closedButton = getByText(/close gate/i);
    const lockedButton = getByText(/lock gate/i);

    expect(closedButton).toBeDefined();
    expect(lockedButton).toBeDefined();
})

test(`the closed toggle button is disabled if the gate is locked`, () => {
    if()


});