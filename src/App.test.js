import React from "react";
import Enzyme, { mount } from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from "./App";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import store from "./redux/store";
import {Provider} from "react-redux";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useDispatch: () => ({
  })
}));
describe('<App />' , () => {
  let wrapper;
  //const clear = jest.fn();
  //const evaluateExpression = jest.fn();
  //const deleteLastEntry = jest.fn();
  //const calculate = jest.fn();
  Enzyme.configure({ adapter: new Adapter() })
      wrapper = mount( <Provider store={store}><App /> </Provider>)
      beforeEach(() => {
        wrapper.setProps( {
            clear:jest.fn(),
            evaluateExpression:jest.fn(),
            deleteLastEntry : jest.fn(),
            calculate : jest.fn()
        });
  
      //console.log(wrapper.debug())
  })

  test("render calculator--container", () => {
    expect(wrapper.find(".calculator--container")).toBeTruthy;
})


test('calls the calculate action, on keypad clicks ', () => {

  wrapper.find('button[name="5"]').simulate('click')
  expect(wrapper.prop('calculate')).toBeTruthy()

})


test('calls the evaluate action, on keypad "=" click ', () => {

  wrapper.find('button[name="="]').simulate('click')
  expect(wrapper.prop('evaluateExpression')).toBeTruthy()
})

test('calls clear action, on keypad "c" click ', () => {

  wrapper.find('button[name="c"]').simulate('click')
  expect(wrapper.prop("clear")).toBeTruthy()
})

test('calls delete action, on keypad "Del" click ', () => {

  wrapper.find('button[name="Del"]').simulate('click')
   expect(wrapper.prop('deleteLastEntry')).toBeTruthy()
})

})