import React from 'react';
import { shallow } from 'enzyme';
import LogoPanel from './LogoPanel';
import { findByTestAttribute } from '../../utils';
import HeaderForTests from '.';
import ButtonAppBar from './ButtonAppBar';

const setUp = (props = {}) => {
    const component = shallow(<LogoPanel {...props}></LogoPanel>);
    return component;
};
const setUpHdr = (props = {}) => {
    const component = shallow(<HeaderForTests {...props}></HeaderForTests>);
    return component;
};

describe('Header Component', () => {
    let component, component2;
    beforeEach(() => {
        component = setUp();
        component2 = setUpHdr();
    });

    it('should render withour errors', () => {
        const wrapper = findByTestAttribute(component, 'logopanelComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo', () => {
        const logo = findByTestAttribute(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});
