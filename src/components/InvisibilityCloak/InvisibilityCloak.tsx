import React from 'react';

type InvisibilityProps = {
    children: React.ReactNode;
};

const InvisibilityCloak = ({ children }: InvisibilityProps) => {
    if (process.env.NODE_ENV !== 'development') {
        return null;
    } else {
        return <>{children}</>;
    }
};

export default InvisibilityCloak;