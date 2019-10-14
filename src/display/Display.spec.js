// Test away!
import React from "react";
import { render, fireEvents } from "@testing-library/react";

import Display from "./Display";



test("can't lock gate", () => {
    const { getByText } = render(<Display />)
    const locked = getByText(/locked/i);

    expect(locked).toBeTruthy();
})