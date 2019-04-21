import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator';
import { shallow, configure } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TemperatureInput components', () => {
  // arrange
  const wrapper = shallow(<Calculator/>);

  // act
  const temperatureWrapper = wrapper.find('TemperatureInput');

  // assert
  expect(temperatureWrapper).toHaveLength(2);
});

it('renders BoilingVerdict components', () => {
  // arrange
  const wrapper = shallow(<Calculator/>);

  // act
  const boilingVerdictWrapper = wrapper.find('BoilingVerdict');

  // assert
  expect(boilingVerdictWrapper).toHaveLength(1);
});

