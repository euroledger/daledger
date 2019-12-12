import React, { useContext } from 'react';
import './styles.scss';
import ButtonAppBar from './ButtonAppBar';
import MobileButtonAppBar from './MobileButtonAppBar';
import LogoPanel from './LogoPanel';
import { DeviceHelper } from '../../utils';
import { connect } from 'react-redux';
import ProfileContext from '../../ProfileContext';

const isLaptop = () => {
    return DeviceHelper();
};

const Header = ({ auth }) => {
    const { translations, onSelectFlag, language } = useContext(ProfileContext);

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
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar
                        {...translations}
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
