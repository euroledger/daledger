import React, { useContext } from 'react';
import './styles.scss';
import ButtonAppBar from './ButtonAppBar';
import MobileButtonAppBar from './MobileButtonAppBar';
import LogoPanel from './LogoPanel';
import { DeviceHelper } from '../../utils';
import ProfileContext from '../../ProfileContext';

const isLaptop = () => {
    return DeviceHelper();
};

const Header = () => {
    const { translations, onSelectFlag, language, auth } = useContext(ProfileContext);
    return (
        <>
            <div data-test='headerComponent'>
                {!isLaptop() ? (
                    <>
                        <LogoPanel language={language}></LogoPanel>
                        <MobileButtonAppBar
                            {...translations}
                            language={language}
                            auth={auth}
                            // settingsLink= {translations.settingsLink}
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar
                        {...translations}
                        language={language}
                        auth={auth}
                        settingsLink= {translations.settingsLink}
                        onSelect={onSelectFlag}
                    ></ButtonAppBar>
                )}
            </div>
        </>
    );
};

export default Header;
