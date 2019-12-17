import React from 'react';
import { mount } from 'enzyme';
import LogoPanel from './LogoPanel';
import { findByTestAttribute } from '../../utils';

const setUp = (props = {}) => {
    return component;
};


describe('Header Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<LogoPanel language="en"></LogoPanel>);
    });

    it('should render withour errors', () => {
        const component = findByTestAttribute(wrapper, 'logopanelComponent');
        expect(component.length).toBe(1);
    });

    it('should render a logo', () => {
        const logo = findByTestAttribute(wrapper, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});
