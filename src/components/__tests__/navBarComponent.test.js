import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import NavBar from '../navBarComponent/NavBar';

describe('NavBar component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HashRouter><NavBar /></HashRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
