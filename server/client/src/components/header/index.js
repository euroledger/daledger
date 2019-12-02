import React, { useState } from 'react';
import './styles.scss';
import ButtonAppBar from './ButtonAppBar';
import MobileButtonAppBar from './MobileButtonAppBar';
import LogoPanel from './LogoPanel';
import { DeviceHelper } from '../../utils';
import i18next from 'i18next';
import LinkItems  from '../config';

const isLaptop = () => {
    return DeviceHelper();
};

const Header = () => {
    const [language, setLanguage] = useState('en'); // TODO put this into store for use globally
    
    const props = LinkItems();
    const onSelectFlag = countryCode => {
        switch (countryCode) {
            case 'GB':
                i18next.changeLanguage('en');
                setLanguage('en');
                break;
            case 'RO':
                i18next.changeLanguage('ro');
                setLanguage('ro');
                break;
            default:
                break;
        }
    };
    
    return (
        <>
            <div data-test="headerComponent">
                {!isLaptop() ? (
                    <>
                        <LogoPanel language={language}></LogoPanel>
                        <MobileButtonAppBar
                            {...props}
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar 
                        {...props}
                        language={language}
                        onSelect={onSelectFlag}
                    ></ButtonAppBar>
                )}
            </div>
        </>
    );
};

export default Header;
