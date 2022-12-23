import React from 'react';
import Logo from '../../../public/images/polibatamLogo.png'

export default function ApplicationLogo({ className }) {
    return (
        <img src={Logo} className={className} alt='Polibatam Logo' />
    );
}
