import React from "react";
import Keypad from "./Keypad";
import Enzyme, { mount } from 'enzyme';
import Calculator from "./Calculator";
import store from "../redux/store";
import {Provider} from "react-redux";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => ({
    })
}));
describe('<TodoList/>' , () => {
    let props;
    let wrapper;
    const handleClick = jest.fn();
   // const clear = jest.fn();
    const evaluateExpression = jest.fn();
    const deleteLastEntry = jest.fn();
    const calculate = jest.fn();

    Enzyme.configure({ adapter: new Adapter() })
        wrapper = mount( <Provider store={store}><Keypad {...props} /> </Provider>)
        beforeEach(() => {
            wrapper.setProps( {
                clear:jest.fn()
            });
        
        //console.log(wrapper.debug())
    })
    
    test("show Calculator.Button component",()=>{
        expect(wrapper.find("Calculator.Button")).toBeTruthy;
    })
    
 test('test Calculator.Button' , () => {

    
    wrapper.find('button[name="c"]').simulate("click");
    expect(wrapper.prop("clear")).toBeTruthy()

}) 
test('render the block', () => {
    expect(wrapper.find(".block")).toBeTruthy;
    })

test('render the keypad', () => {
    expect(wrapper.find(".keypad")).toBeTruthy;
    })
})


  