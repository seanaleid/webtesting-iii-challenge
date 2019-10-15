// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test(`provide buttons to toggle the 'closed' and 'locked' states.`, () => {
    const  { getByText } = render(<Controls />)
    const closedButton = getByText(/close gate/i);
    const lockedButton = getByText(/lock gate/i);

    expect(closedButton).toBeDefined();
    expect(lockedButton).toBeDefined();
})

test(`buttons' text changes to reflect the state the door will be in if clicked`, () => {
    const closed = false;
    const locked = false;
    const toggleClosedMock = jest.fn();

    const { getByText, findByText } = render(<Controls closed={closed} locked={locked} toggleClosed={toggleClosedMock} />);

    const closeGateButton = getByText(/close gate/i);
    
    fireEvent.click(closeGateButton);

    const openGateButton = findByText(/open gate/i);

    expect(openGateButton).toBeDefined();
    expect(toggleClosedMock).toHaveBeenCalled();
});

test(`the closed toggle button is disabled if the gate is locked`, () => {
    const closed = true;
    const locked = true;
    const toggleClosedMock = jest.fn();

    const { getByText } = render ( <Controls closed={closed} locked={locked} toggleClosed={toggleClosedMock} />
    );

    const openGateButton = getByText(/open gate/i);

    fireEvent.click(openGateButton);

    expect(toggleClosedMock).not.toHaveBeenCalled();
});

test(`the locked toggle button is disabled if the gate is open`, () => {
    const closed = true;
    const locked = true;
    const toggleLockedMock = jest.fn();

    const { getByText } = render ( <Controls closed={closed} locked={locked} toggleClosed={toggleLockedMock} />
    );

    const lockGateButton = getByText(/lock gate/i);

    fireEvent.click(lockGateButton);

    expect(toggleLockedMock).not.toHaveBeenCalled();
});

