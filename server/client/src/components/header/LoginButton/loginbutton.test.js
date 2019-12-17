import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../../utils';
import LoginButton from './';

const createTestProps = (auth) => {
    return {
        loginbuttonText: "login",
        logoutbuttonText: "logout",
        auth: auth
    };
}


describe('LoginButton Component', () => {
    // it('should render withour errors', () => {
    //     const wrapper = findByTestAttribute(component, 'buttonAppBarComponent');
    //     expect(wrapper.length).toBe(1);
    // });

    // // TODO Use the length of the list items array here
    // it('should have 4 links', () => {
    //     let wrapper = component.find(Link);
    //     expect(wrapper.length).toBe(4);
        
    // })
    let component;
    it('should render withour errors', () => {
        let props = createTestProps(null);
        component = shallow(<LoginButton {...props}></LoginButton>);
        const wrapper = findByTestAttribute(component, 'loginButtonComponent');
        expect(wrapper.length).toBe(1);
    });

    it('button text shoud be empty', () => {
        let props = createTestProps(null);
        component = shallow(<LoginButton {...props}></LoginButton>);
        const wrapper = findByTestAttribute(component, 'loginButtonComponent');
        expect(wrapper.text()).toEqual("");    
    });
   
    it('button text shoud be login text', () => {
        let props = createTestProps(false);
        component = shallow(<LoginButton {...props}></LoginButton>);
        const wrapper = findByTestAttribute(component, 'loginButtonComponent');
        expect(wrapper.text()).toEqual(props.loginbuttonText);    
    });

    it('button text shoud be logout text', () => {
        let props = createTestProps(true);
        component = shallow(<LoginButton {...props}></LoginButton>);
        const wrapper = findByTestAttribute(component, 'loginButtonComponent');
        expect(wrapper.text()).toEqual(props.logoutbuttonText);    
    });
});
