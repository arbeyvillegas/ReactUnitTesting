import React from 'react';
import { shallow } from 'enzyme';
import TemperatureInput from '../temperature-input';

describe("TemperatureInput class", () => {
    it("renders ok", () => {
        const wrapper = shallow(<TemperatureInput/>);
    });
});