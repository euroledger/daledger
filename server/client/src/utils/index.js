// import checkPropTypes from 'check-prop-types';
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

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
