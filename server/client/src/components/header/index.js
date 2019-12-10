import React, { useState } from 'react';
import './styles.scss';
import ButtonAppBar from './ButtonAppBar';
import MobileButtonAppBar from './MobileButtonAppBar';
import LogoPanel from './LogoPanel';
import { DeviceHelper } from '../../utils';
import i18next from 'i18next';
import LinkItems  from '../config';
import { connect } from 'react-redux';

const isLaptop = () => {
    return DeviceHelper();
};

const Header = ({auth}) => {
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
                            auth={auth}
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar 
                        {...props}
                        language={language}
                        auth={auth}
                        onSelect={onSelectFlag}
                    ></ButtonAppBar>
                )}
            </div>
        </>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);

