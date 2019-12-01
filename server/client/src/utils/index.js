// import checkPropTypes from 'check-prop-types';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import log4javascript from 'log4javascript';


export const findByTestAttribute = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    // const propsErr = checkPropTypes(
    //     component.propTypes,
    //     expectedProps,
    //     'props',
    //     component.name
    // );
    return null;
};

// returns true if this is a laptop device, false otherwise
export const DeviceHelper = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up('md'));
};

export const initLogging = () => {
    const log = log4javascript.getLogger('Global'),
        ajaxAppender = new log4javascript.AjaxAppender('/log/javascript');

    ajaxAppender.addHeader('Content-Type', 'application/json');
    ajaxAppender.setLayout(new log4javascript.JsonLayout(false, true));

    log.addAppender(ajaxAppender);
    return log;
}
export const logMessage = (log, msg) => {
    window.onerror = function(errorMsg, url, lineNumber) {
        log.fatal(errorMsg + ' in ' + url + ', line ' + lineNumber);
    };
};
