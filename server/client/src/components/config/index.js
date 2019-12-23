import { useTranslation } from 'react-i18next';
import { DeviceHelper } from '../../utils';

const Translations = () => {
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
        helpItems: [t('help.item1'), t('help.item2'), t('help.item3')],
        clientHomeMessage: t('temp'),
        projectButtonText: t('frontbuttons.project'),
        designerButtonText: t('frontbuttons.designer'),
        firstName: t('register.firstname'),
        lastName: t('register.lastname'),
        text1: t('register.text1'),
        text2link: t('register.text2link'),
        text3: t('register.text3'),
        text4link: t('register.text4link'),
        text5: t('register.text5'),
        text6: t('register.text6'),
        text7link: t('register.text7link'),
        registerBtn: t('register.registerbutton'),
        error1Text: t('register.error1'),
        error2Text: t('register.error2'),
        error3Text: t('register.error3'),
        button1text: t("clienthome.button1text"),
        button2text: t("clienthome.button2text"),
        button3text: t("clienthome.button3text"),
        button4text: t("clienthome.button4text"),
        tooltip1text: t("clienthome.tooltip1"),
        tooltip2text: t("clienthome.tooltip2"),
        tooltip3text: t("clienthome.tooltip3"),
        tooltip4text: t("clienthome.tooltip4"),
    };
}

export default Translations;