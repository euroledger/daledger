import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

const FlagMenu = ({ language, onSelect }) => {
    return (
        <ReactFlagsSelect
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={onSelect}
            defaultCountry={language === 'en' ? 'GB' : 'RO'}
            countries={['GB', 'RO']}
        />
    );
};

export default FlagMenu;
