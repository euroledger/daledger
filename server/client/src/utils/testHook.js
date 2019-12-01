import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
// import i18n from '../language/i18n';
import i18n from '../utils/i18nForTests';

const TestHook = ({ callback }) => {
  callback();
  return null;
};

export const testHook = (callback) => {
  mount( 
        <I18nextProvider i18n={i18n}>
            <TestHook callback={callback} /> 
        </I18nextProvider>);
};