import React from 'react';
import FooterAppBar from '../appbar/FooterAppBar';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const linkItems = [
        {
            href: '#',
            title: t('footer.link1')
        },
        {
            href: '#',
            title: t('footer.link2')
        },
        {
            href: '#',
            title: t('footer.link3')
        },
        {
            href: '#',
            title: t('footer.link4')
        },
        {
            href: '#',
            title: t('footer.link5')
        }
    ];

    return (
        <div data-test='footerComponent'>
            <FooterAppBar linkItems={linkItems}></FooterAppBar>
        </div>
    );
};

export default Footer;
