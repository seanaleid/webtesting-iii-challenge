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

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    let toggle = true;

    const toggler = () => {
        toggle = false;
    };

    const { getByText, findByText } = render (<Display closed={toggle} />);

    const closed = getByText(/closed/i);

    expect(closed).toBeDefined();

    toggler();

    const open = findByText(/open/i);
    expect(open).toBeDefined();
});

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    let toggle = false;

    const toggler = () => {
        toggle = true;
    };

    const { getByText, findByText } = render (<Display locked={toggle} />);

    const unlocked = getByText(/unlocked/i);

    expect(unlocked).toBeDefined();

    toggler();

    const locked = findByText(/locked/i);
    expect(locked).toBeDefined();
});

test("when `locked` or `closed` use the `red-led` class", () => {
    const { container } = render(<Display locked={true} closed={true} />);
    const redLeds = container.querySelectorAll('.red-led');

    expect(redLeds.length).toBe(2);
});

test("when `unlocked` or `open` use the `green-led` class", () => {
    const { container } = render(<Display locked={false} closed={false} />);
    const greenLeds = container.querySelectorAll('.green-led');

    expect(greenLeds.length).toBe(2);
});