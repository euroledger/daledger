import React from 'react';
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
    
    const props = LinkItems();
    const onSelectFlag = countryCode => {
        switch (countryCode) {
            case 'GB':
                i18next.changeLanguage('en');
                break;
            case 'RO':
                i18next.changeLanguage('ro');
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
                        <LogoPanel></LogoPanel>
                        <MobileButtonAppBar
                            {...props}
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar
                        {...props}
                        onSelect={onSelectFlag}
                    ></ButtonAppBar>
                )}
            </div>
        </>
    );
};

export default Header;
