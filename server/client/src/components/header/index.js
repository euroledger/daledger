import React from 'react';
import './styles.scss';
import ButtonAppBar from './ButtonAppBar';
import MobileButtonAppBar from './MobileButtonAppBar';
import LogoPanel from './LogoPanel';
import { DeviceHelper } from '../../utils';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const isLaptop = () => {
    return DeviceHelper();
};

const Header = () => {
    const { t } = useTranslation();
    const linkItems = [
        {
            href: '#',
            title: t('navbar.link1')
        },
        {
            href: '#',
            title: t('navbar.link2')
        },
        {
            href: '#',
            title: t('navbar.link3')
        },
        {
            href: '#',
            title: t('navbar.link4')
        }
    ];
    const loginButtonText = t('loginbuttontext');
    const helpTitle = t('help.button');
    const helpItems = [t('help.item1'), t('help.item2'), t('help.item3')];
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
                            links={linkItems}
                            buttonText={loginButtonText}
                            helpTitle={helpTitle}
                            helpItems={helpItems}
                            onSelect={onSelectFlag}
                        ></MobileButtonAppBar>
                    </>
                ) : (
                    <ButtonAppBar
                        links={linkItems}
                        buttonText={loginButtonText}
                        helpTitle={helpTitle}
                        helpItems={helpItems}
                        onSelect={onSelectFlag}
                    ></ButtonAppBar>
                )}
            </div>
        </>
    );
};

export default Header;
