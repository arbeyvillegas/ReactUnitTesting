import React from 'react';
import { shallow,mount } from 'enzyme';
import TemperatureInput from '../temperature-input';

function setup(newProps) {
    const defaultProps = {
        scale: 'c',
        temperature: '36',
        onTemperatureChange: jest.fn()
    }
    const props = { ...defaultProps, ...newProps };

    return { wrapper: mount(<TemperatureInput {...props} />), props };

}

describe("TemperatureInput class", () => {
    it("renders ok", () => {
        const wrapper = shallow(<TemperatureInput />);
    });

    it("the handler is called when onchange executes", () => {
        // arrange
        const { wrapper, props } = setup();

        // act
        const input = wrapper.find("input");
        input.simulate("change", { target: { value: '25' } });

        //assert
        expect(props.onTemperatureChange).toHaveBeenCalled();

    });

    it("the component renders the right values", () => {
        // arrange
        const { wrapper, props } = setup({
            scale: 'f',
            temperature: 125
        });

        // act
        const legend = wrapper.find("legend");

        // assert
        wrapper.debug();
        expect(legend.text()).toBe("Enter temperature in Fahrenheit:");
        expect(wrapper.prop("scale")).toBe(props.scale);
        expect(wrapper.prop("temperature")).toBe(props.temperature);
    });
});