import React from 'react'
import OpinionButton from "./OpinionButton";
import {fireEvent, render} from '@testing-library/react';

const renderComponent = (props) => {
    const wrapper = render(<OpinionButton {...props} />)

    const yes = wrapper.getByText('Si').parentNode;
    const no = wrapper.getByText('No').parentNode;

    return {
        yes, no, wrapper
    }
}

const isButtonSelected = button => button.className.includes("selectedButton")

describe('<OpinionButton />', function () {
    it('should render unselected buttons', function () {
        const { yes, no } = renderComponent()
        expect(yes).toBeInTheDocument()
        expect(no).toBeInTheDocument()
    });


    it('should selected buttons when clicking', async () => {
        const { yes, no } = renderComponent()

        await fireEvent.click(yes)
        expect(isButtonSelected(yes)).toBe(true)
        expect(isButtonSelected(no)).toBe(false)
    });

    it('should call onSelect when clicking on Buttons', async () => {
        const onSelect = jest.fn();
        const { yes } = renderComponent({ onSelect })

        await fireEvent.click(yes)
        expect(onSelect).toHaveBeenCalled()
        expect(onSelect).toHaveBeenCalledWith("YES")
    });

    it('should block No button when Yes is selected', async () => {
        const { yes, no } = renderComponent()
        await fireEvent.click(yes)
        await fireEvent.click(no)

        expect(isButtonSelected(yes)).toBe(true)
        expect(isButtonSelected(no)).toBe(false)
    });


    it('should unselect Yes button by clicking again', async () => {
        const { yes } = renderComponent()
        await fireEvent.click(yes)
        await fireEvent.click(yes)

        expect(isButtonSelected(yes)).toBe(false)
    });
});