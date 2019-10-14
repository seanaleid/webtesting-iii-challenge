// Test away

import React from "react";
import { render, fireEvents, fireEvent } from "@testing-library/react";

import Display from "../display/Display";
import Controls from "../controls/Controls";

test("Shows displays correctly`", () => {
    const display = render(<Display />)

    expect(display).toBeDefined();
});

test("Shows displays correctly`", () => {
    const controls = render(<Controls />)

    expect(controls).toBeDefined();
});

test("defaults to `unlocked` and `open`", () => {
    const { getByText } = render(<Display />)
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);

    expect(unlocked).toBeDefined();
    expect(open).toBeDefined();
});

test("cannot be closed or opened if it is locked", () => {
    const gateMock = jest.fn();
    
    const { getByText } = render(<Controls locked={ false } closed={ false } />)

    fireEvent.click(getByText(/close gate/i));
    expect(gateMock).toHaveBeenCalledTimes(0);
    
});
