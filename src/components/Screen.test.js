import React from "react";
import Screen from "./Screen";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from "../redux/store";
import {Provider} from "react-redux";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSelector: () => ({
  })
}));
describe('<Screen />' , () => {
  let wrapper;
  Enzyme.configure({ adapter: new Adapter() })
  beforeEach(() => {
      wrapper = mount( <Provider store={store}><Screen /> </Provider>)
  })
  test('render the screen--container', () => {
    expect(wrapper.find(".screen--container")).toBeTruthy;
    })
    test('has a dummy test', () => {
        expect("Textfit").toBeTruthy;
    });
})

