import React from 'react';

const ProfileContext = React.createContext({
    translations: {},
    onSelectFlag: () => {},
    language: "en"
});

export default ProfileContext;
