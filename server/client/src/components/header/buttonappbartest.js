import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '@material-ui/core';
import { findByTestAttribute } from '../../utils';
import ButtonAppBar from './ButtonAppBar';

const createTestProps = () => {
    return {
        links: [
            {
                href: '#',
                title: "How it works"
            },
            {
                href: '#',
                title: "Ongoing Competitions"
            },
            {
                href: '#',
                title: "Past Competitions"
            },
            {
                href: '#',
                title: "Community"
            }
        ],
        buttonText: "login",
        helpTitle: "help",
        helpItems: ["Item1", "Item2", "Item3"]
    };
}


describe('ButtonAppBar Component', () => {
    let component;
    beforeEach(() => {
        let props = createTestProps();
        component = shallow(<ButtonAppBar {...props}></ButtonAppBar>);
    });

    it('should render withour errors', () => {
        const wrapper = findByTestAttribute(component, 'buttonAppBarComponent');
        expect(wrapper.length).toBe(1);
    });

    // TODO Use the length of the list items array here
    it('should have 4 links', () => {
        let wrapper = component.find(Link);
        expect(wrapper.length).toBe(4);
        
    })
});
