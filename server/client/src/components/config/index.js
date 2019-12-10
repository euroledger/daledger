import { useTranslation } from 'react-i18next';
import { DeviceHelper } from '../../utils';

const LinkItems = () => {
    const isLaptop = () => {
        return DeviceHelper();
    };
    const { t } = useTranslation();
    return {
        links: [
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
        ],
        loginbuttonText: isLaptop() ? t('loginbuttontext') : t('loginbuttontext_m'),
        logoutbuttonText: t('logoutbuttontext'),
        helpTitle:  t('help.button'),
        helpItems: [t('help.item1'), t('help.item2'), t('help.item3')]
    };
}

export default LinkItems;