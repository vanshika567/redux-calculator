import React from "react";
import Keypad from "./Keypad";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => ({
    })
}));

describe('<keypad />' , () => {
    let wrapper;
    Enzyme.configure({ adapter: new Adapter() })
        wrapper = mount(<Keypad />)
      
    test("show Calculator.Button component",()=>{
        expect(wrapper.find("Calculator.Button")).toBeTruthy;
    })
    
    test('render the block', () => {
        expect(wrapper.find(".block")).toBeTruthy;
        })

    test('render the keypad', () => {
        expect(wrapper.find(".keypad")).toBeTruthy;
        })
    })


  