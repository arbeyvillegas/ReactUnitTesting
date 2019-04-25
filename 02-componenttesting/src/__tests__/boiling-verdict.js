import React from 'react';
import { shallow } from 'enzyme';
import BoilingVerdict from '../boiling-verdict';
import toJson from 'enzyme-to-json';


it("when celsius is 50 the water would not boil", () => {
    const wrapper = shallow(<BoilingVerdict celsius={50}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
});

it("when celsius is 120 the water would boil", () => {
    const wrapper = shallow(<BoilingVerdict celsius={120}/>);

    expect(toJson(wrapper)).toMatchSnapshot();
});