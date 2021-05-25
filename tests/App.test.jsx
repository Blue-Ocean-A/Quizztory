/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import config from './testConfig.js';
import App from '../client/src/components/App.jsx';

describe('App.jsx', () => {
  const wrapper = shallow(<App />);
  it('Renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
