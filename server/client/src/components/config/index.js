import { useTranslation } from 'react-i18next';

const LinkItems = () => {
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
        buttonText: t('loginbuttontext'),
        helpTitle:  t('help.button'),
        helpItems: [t('help.item1'), t('help.item2'), t('help.item3')]
    };
}

export default LinkItems;