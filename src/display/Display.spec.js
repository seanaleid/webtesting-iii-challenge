// Test away!
import React from "react";
import { render, fireEvents } from "@testing-library/react";

import Display from "./Display";



test("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText, queryByText } = render(<Display />)
    const locked = getByText(/locked/i);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    const closed = queryByText(/closed/i);

    expect(locked).toBeDefined();
    expect(unlocked).toBeDefined();
    expect(open).toBeDefined();
    expect(closed).toBeDefined();

});



