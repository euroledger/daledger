import { useTranslation } from 'react-i18next';
import { DeviceHelper } from '../../utils';

const Translations = () => {
    const isLaptop = () => {
        return DeviceHelper();
    };
    const { t } = useTranslation();
    return {
        language: t('language'),
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
        sidebarTitle: t('launchcompetition.drawertext'),
        competitionDrawerText: [
            t('launchcompetition.sidebar1'),
            t('launchcompetition.sidebar2'),
            t('launchcompetition.sidebar3'),
            t('launchcompetition.sidebar4'),
        ],
        prevButtonText: t('launchcompetition.previousbuttontext'),
        homeButtonText: t('launchcompetition.homepagebuttontext'),
        continueButtonText: t('launchcompetition.continuebuttontext'),
        projectDefinitionTitle: t('projectdefinition.title'),
        projectDefinitionRadioTitle1: t('projectdefinition.radiotitle1'),
        projectDefinitionRadioTitle2: t('projectdefinition.radiotitle2'),
        projectDefinitionRadioTitle3: t('projectdefinition.radiotitle3'),
        projectDefinitionCountryTitle: t('projectdefinition.countrytitle'),
        projectDefinitionCountryRadio1Option1: t('projectdefinition.radio1option1'),
        projectDefinitionCountryRadio1Option2: t('projectdefinition.radio1option2'),
        projectDefinitionCountryRadio2Option1: t('projectdefinition.radio2option1'),
        projectDefinitionCountryRadio2Option2: t('projectdefinition.radio2option2'),
        projectDefinitionCountryRadio3Option1: t('projectdefinition.radio3option1'),
        projectDefinitionCountryRadio3Option2: t('projectdefinition.radio3option2'),
        projectDefinitionInstruction: t('projectdefinition.instruction'),
        projectCoverageTitle: t('projectcoverage.title'),
        projectCoverageRadioOption1: t('projectcoverage.radiooption1'),
        projectCoverageRadioOption2: t('projectcoverage.radiooption2'),
        functionalAreaTitle: t('functionalarea.title'),
        functionalareacolumns: [
            { name: 'type', title: t('functionalarea.col1') },
            { name: 'small', title: t('functionalarea.col2') },
            { name: 'medium', title: t('functionalarea.col3') },
            { name: 'large', title: t('functionalarea.col4') }
        ],
        functionalareacolumnsoutdoors: [
            { name: 'type', title: t('functionalarea.col1') },
            { name: 'number', title: t('functionalarea.col5') },
            { name: 'size', title: t('functionalarea.col6') },
        ],
        functionalarearows: [
            t('functionalarea.row1'),
            t('functionalarea.row2'),
            t('functionalarea.row3'),
            t('functionalarea.row4'),
            t('functionalarea.row5'),
            t('functionalarea.row6'),
            t('functionalarea.row7'),
            t('functionalarea.row8'),
            t('functionalarea.row9'),
            t('functionalarea.row10')
        ],
        functionalareaoutdoorrows: [
            t('functionalarea.outdoorrow1'),
            t('functionalarea.outdoorrow2'),
            t('functionalarea.outdoorrow3'),
            t('functionalarea.outdoorrow4'),
            t('functionalarea.outdoorrow5'),
            t('functionalarea.outdoorrow6'),
            t('functionalarea.outdoorrow7'),
            t('functionalarea.outdoorrow8')
        ],
        functionalAreaInstructions: t('functionalarea.instructions'),
        functionalAreaOutdoorInstructions: t('functionalarea.instructionsoutdoor'),
        functionalAreaPanelLabel1: t('functionalarea.panellabel1'),
        functionalAreaPanelLabel2newspace: t('functionalarea.panellabel2newspace'),
        functionalAreaPanelLabel2remodel: t('functionalarea.panellabel2remodel'),
        functionalAreaPanelLabel3indoors: t('functionalarea.panellabel3indoors'),
        functionalAreaPanelLabel3outdoors: t('functionalarea.panellabel3outdoors'),
        functionaAreaTableError: t('functionalarea.tableerror'),
        projectInfoTitle: t('projectinfo.title'),
        projectUrgencyTitle: t('projectinfo.urgencytitle'),
        projectInfoUrgencyButton1Label: t('projectinfo.urgencybutton1label'),
        projectInfoUrgencyButton2Label: t('projectinfo.urgencybutton2label'),
        projectInfoUrgencyButton3Label: t('projectinfo.urgencybutton3label'),
        projectInfoUrgencyButton4Label: t('projectinfo.urgencybutton4label'),
        projectInfoUrgencyButton5Label: t('projectinfo.urgencybutton5label'),
        projectInfoFileInstructions: t('projectinfo.fileinstructions'),
        projectInfoFileExtraInfo: t('projectinfo.fileextrainfo'),
        projectInfoFileButtonText: t('projectinfo.filebutton'),
        projectInfoRequirementsInstructions: t('projectinfo.requirementsinstructions'),
        projectInfoRequirementsTitle: t('projectinfo.requirementstitle'),
        projectInfoRequirementsPlaceholder: t('projectinfo.requirementsplaceholder'),
        projectInfoProjectBudget: t('projectinfo.projectbudget'),
        projectInfoProjectName: t('projectinfo.projectname'),
        settingsLink: t('navbar.link5'),
        loginbuttonText: isLaptop() ? t('loginbuttontext') : t('loginbuttontext_m'),
        logoutbuttonText: t('logoutbuttontext'),
        helpTitle: t('help.button'),
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