import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
   wrapper = shallow(<Calculator />);
});

afterEach(() => {
    if (wrapper)
      wrapper.unmount();
  }
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TemperatureInput components', () => {
  // arrange
  // act
  const temperatureWrapper = wrapper.find('TemperatureInput');

  // assert
  expect(temperatureWrapper).toHaveLength(2);
});

it('renders BoilingVerdict component', () => {
  // arrange
  // act
  const boilingVerdictWrapper = wrapper.find('BoilingVerdict');

  // assert
  expect(boilingVerdictWrapper).toHaveLength(1);
});

it('execute onTemperatureChange on celsius', () => {
  // arrange
  // act
  let celsiusWrapper = wrapper.find({scale: 'c'});
  celsiusWrapper.prop('onTemperatureChange')(50);
  wrapper.update();
  celsiusWrapper = wrapper.find({scale: 'c'});
  const farenheitWrapper = wrapper.find({scale: 'f'});
  const boilingVerdict = wrapper.find("BoilingVerdict");
  
  //assert
  expect(celsiusWrapper.prop('temperature')).toBe(50);
  expect(boilingVerdict.prop('celsius')).toEqual(50);
  expect(farenheitWrapper.prop('temperature')).toBe("122");
});


it('execute onTemperatureChange on farenheit', () => {
  // arrange
  // act
  let farenheitWrapper = wrapper.find({scale: 'f'});
  farenheitWrapper.prop('onTemperatureChange')(65);
  wrapper.update();
  farenheitWrapper = wrapper.find({scale: 'f'});
  const celsiusWrapper = wrapper.find({scale: 'c'});
  const boilingVerdict = wrapper.find("BoilingVerdict");
  
  //assert
  expect(farenheitWrapper.prop('temperature')).toBe(65);
  expect(boilingVerdict.prop('celsius')).toEqual("18.333");
  expect(celsiusWrapper.prop('temperature')).toBe("18.333");
});

