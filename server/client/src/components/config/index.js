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
        launchButtonText: t('launchcompetition.launchbuttontext'),
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
        projectStyleTitle: t('projectstyle.title'),
        projectStylePhotos: t('projectstyle.photos'),
        projectStyleSelected: t('projectstyle.selectedstyle'),
        projectStyleIndoor: [
            {
                title: t('projectstyle.indoors.title1'),
                description: t('projectstyle.indoors.description1')
            },
            {
                title: t('projectstyle.indoors.title2'),
                description: t('projectstyle.indoors.description2')
            },
            {
                title: t('projectstyle.indoors.title3'),
                description: t('projectstyle.indoors.description3')
            },
            {
                title: t('projectstyle.indoors.title4'),
                description: t('projectstyle.indoors.description4')
            },
            {
                title: t('projectstyle.indoors.title5'),
                description: t('projectstyle.indoors.description5')
            },
            {
                title: t('projectstyle.indoors.title6'),
                description: t('projectstyle.indoors.description6')
            },
            {
                title: t('projectstyle.indoors.title7'),
                description: t('projectstyle.indoors.description7')
            },
            {
                title: t('projectstyle.indoors.title8'),
                description: t('projectstyle.indoors.description8')
            },
            {
                title: t('projectstyle.indoors.title9'),
                description: t('projectstyle.indoors.description9')
            },
            {
                title: t('projectstyle.indoors.title10'),
                description: t('projectstyle.indoors.description10')
            },
            {
                title: t('projectstyle.indoors.title11'),
                description: t('projectstyle.indoors.description11')
            },
            {
                title: t('projectstyle.indoors.title12'),
                description: t('projectstyle.indoors.description12')
            },
        ],
        projectStyleOutdoor: [
            {
                title: t('projectstyle.outdoors.title1'),
                description: t('projectstyle.outdoors.description1')
            },
            {
                title: t('projectstyle.outdoors.title2'),
                description: t('projectstyle.outdoors.description2')
            },
            {
                title: t('projectstyle.outdoors.title3'),
                description: t('projectstyle.outdoors.description3')
            },
            {
                title: t('projectstyle.outdoors.title4'),
                description: t('projectstyle.outdoors.description4')
            },
            {
                title: t('projectstyle.outdoors.title5'),
                description: t('projectstyle.outdoors.description5')
            },
            {
                title: t('projectstyle.outdoors.title6'),
                description: t('projectstyle.outdoors.description6')
            },
            {
                title: t('projectstyle.outdoors.title7'),
                description: t('projectstyle.outdoors.description7')
            },
            {
                title: t('projectstyle.outdoors.title8'),
                description: t('projectstyle.outdoors.description8')
            },
            {
                title: t('projectstyle.outdoors.title9'),
                description: t('projectstyle.outdoors.description9')
            },
            {
                title: t('projectstyle.outdoors.title10'),
                description: t('projectstyle.outdoors.description10')
            },
            {
                title: t('projectstyle.outdoors.title11'),
                description: t('projectstyle.outdoors.description11')
            },
            {
                title: t('projectstyle.indoors.title12'),
                description: t('projectstyle.indoors.description12')
            },
        ],
        projectSummaryTitle: t('projectsummary.title'),
        projectSummaryScope: t('projectsummary.scope'),
        projectSummaryCountry: t('projectsummary.country'),
        projectSummaryDeadline: t('projectsummary.deadline'),
        projectSummaryBudget: t('projectsummary.budget'),
        projectSummaryStyle: t('projectsummary.style'),
        projectSummarySpecialRequirements: t('projectsummary.specialrequirements'),
        projectSummaryUploadFiles: t('projectsummary.uploadfiles'),
        projectSummaryAIAward: t('projectsummary.aiaward'),
        projectSummaryMinAward: t('projectsummary.minaward'),
        projectSummaryDate1: t('projectsummary.date1'),
        projectSummaryDate2: t('projectsummary.date2'),
        projectSummaryDate3: t('projectsummary.date3'),
        projectSummaryDate4: t('projectsummary.date4'),
        projectSummaryDate5: t('projectsummary.date5'),
        projectSummaryNoBudget: t('projectsummary.nobudget'),
        projectSummaryNone: t('projectsummary.none'),
        projectSummaryYourAward: t('projectsummary.youraward'),
        projectSummaryAwardText1: t('projectsummary.awardtext1'),
        projectSummaryAwardText2: t('projectsummary.awardtext2'),
        projectSummaryLaunchInfo: t('projectsummary.launchinfo'),
        draftCompetitionsTitle: t('draftcompetitions.title'),
        draftCompetitionsDeleteButtonText: t('draftcompetitions.deletebuttontext'),
        draftCompetitionsMoreDetailsButtonText: t('draftcompetitions.moredetailsbuttontext'),
        draftCompetitionsUnnamedProjectText: t('draftcompetitions.unnamedprojexttext'),
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
        designerbutton1text: t("designerhome.button1text"),
        designerbutton2text: t("designerhome.button2text"),
        designerbutton3text: t("designerhome.button3text"),
        designerbutton4text: t("designerhome.button4text"),
        designertooltip1text: t("designerhome.tooltip1"),
        designertooltip2text: t("designerhome.tooltip2"),
        designertooltip3text: t("designerhome.tooltip3"),
        designertooltip4text: t("designerhome.tooltip4"),
    };
}

export default Translations;