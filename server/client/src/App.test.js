import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Content  from './components/content';
import Footer  from './components/footer';
import Button from '@material-ui/core/Button';
import { findByTestAttribute } from './utils';

describe('Main Screen Renders All Components', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Content/>);
    });

    it('should render the Content', () => {
        // let wrapper = shallow(<Content/>);
        const content = findByTestAttribute(wrapper, 'contentComponent');
        expect(content.length).toBe(1);
    });
    it('should render the Project Button', () => {
        // let wrapper = shallow(<Button/>);
        const button = findByTestAttribute(wrapper, 'projectButton');
        // expect(button.length).toBe(1);
        // expect(wrapper.find('Button')).to.have.lengthOf(2);
    });
    it('should render the Footer', () => {
        let wrapper = shallow(<Footer/>);
        const footer = findByTestAttribute(wrapper, 'footerComponent');
        expect(footer.length).toBe(1);
    });
});
