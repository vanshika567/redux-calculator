import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { App } from './App';
import store from "./redux/store";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useDispatch: () => ({
  })
}));

configure({
  adapter: new Adapter
})

describe('<App />', () => {

  let wrapper = mount(<Provider store={store}><App /> </Provider>);

  beforeEach(() => {
    wrapper.setProps({
      clear: jest.fn(),
      deleteLastEntry: jest.fn(),
      calculate: jest.fn(),
      evaluateExpression: jest.fn()
    })
  })

  test("renders App withouth crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})
  test('calls clear action, on keypad "c" click ', () => {
    wrapper.find('button[name="c"]').simulate('click')
     expect(wrapper.prop('clear')).toBeTruthy()
   })
 
   test('calls delete action, on keypad "Del" click ', () => {
    wrapper.find('button[name="Del"]').simulate('click')
     expect(wrapper.prop('deleteLastEntry')).toBeTruthy()
   })
 
  test('calls the calculate action, on keypad clicks ', () => {
   wrapper.find('button[name="5"]').simulate('click')
    expect(wrapper.prop('calculate')).toBeTruthy()

  })

  test('calls the evaluate action, on keypad "=" click ', () => {
    wrapper.find('button[name="="]').simulate('click')
    expect(wrapper.prop('evaluateExpression')).toBeTruthy()

  })

})