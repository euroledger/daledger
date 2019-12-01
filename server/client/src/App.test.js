import React from 'react';
import { shallow } from 'enzyme';
import Header  from './components/header';
import Content  from './components/content';
import Footer  from './components/footer';
import { findByTestAttribute } from './utils';

describe('Main Screen Renders All Components', () => {
    it('should render the Header', () => {
        let wrapper = shallow(<Header/>);
        const header = findByTestAttribute(wrapper, 'headerComponent');
        expect(header.length).toBe(1);
    });

    it('should render the Content', () => {
        let wrapper = shallow(<Content/>);
        const content = findByTestAttribute(wrapper, 'contentComponent');
        expect(content.length).toBe(1);
    });

    it('should render the Footer', () => {
        let wrapper = shallow(<Footer/>);
        const footer = findByTestAttribute(wrapper, 'footerComponent');
        expect(footer.length).toBe(1);
    });
});
