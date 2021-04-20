import React from "react";
import Button from "./Buttons";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<Button />' , () => {
    let wrapper;
    Enzyme.configure({ adapter: new Adapter() })
    
        wrapper = mount(<Button />)
    
    test("render Button component",()=>{
        expect(wrapper.find(<button/>)).toBeTruthy;
    })
})
