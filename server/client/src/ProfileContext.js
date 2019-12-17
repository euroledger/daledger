import React from 'react';

const ProfileContext = React.createContext({
    translations: {},
    onSelectFlag: () => {},
    language: "en",
    auth: {}
});

export default ProfileContext;
