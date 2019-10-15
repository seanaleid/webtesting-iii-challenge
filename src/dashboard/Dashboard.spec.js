// Test away

import React from "react";
import { render, fireEvent } from "@testing-library/react";

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

test("cannot be closed or opened if it is locked - locked: false; closed: false", () => {
    const gateMock = jest.fn();
    
    const { getByText } = render(<Controls locked={ false } closed={ false } />)

    fireEvent.click(getByText(/close gate/i));
    expect(gateMock).toHaveBeenCalledTimes(0);
});

test("cannot be closed or opened if it is locked - locked: false; closed: true", () => {
    const gateMock = jest.fn();
    
    const { getByText } = render(<Controls toggleClosed={gateMock} locked={ false } closed={ true } />)

    fireEvent.click(getByText(/open gate/i));
    expect(gateMock).toHaveBeenCalledTimes(1);
    expect(gateMock).toBeTruthy();
});

test("cannot be closed or opened if it is locked - locked: true; closed: true", () => {
    const lockMock = jest.fn();
    
    const { getByText } = render(<Controls toggleLocked={lockMock} locked={ true } closed={ true } />)

    fireEvent.click(getByText(/unlock gate/i));
    expect(lockMock).toHaveBeenCalledTimes(1);
    expect(lockMock).toBeTruthy();
});

