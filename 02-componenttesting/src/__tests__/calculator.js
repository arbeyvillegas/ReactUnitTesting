import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator';
import { shallow } from 'enzyme';


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

it('renders BoilingVerdict component', () => {
  // arrange
  const wrapper = shallow(<Calculator/>);

  // act
  const boilingVerdictWrapper = wrapper.find('BoilingVerdict');

  // assert
  expect(boilingVerdictWrapper).toHaveLength(1);
});

it('execute onTemperatureChange on celsius', () => {
  // arrange
  const wrapper = shallow(<Calculator/>);

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
  const wrapper = shallow(<Calculator/>);

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

