import React from 'react';
import { Button } from 'reactstrap';
import useDarkMode from 'use-dark-mode';
import SettingsContext from '../constants/Theme/Settings/SettingsContext';
import { Icon } from "@iconify/react";

const DarkModeToggle = () => {
    const context = React.useContext(SettingsContext);

    const toggle = () => {
        if (context?.darkMode) {
            // @ts-ignore
            context?.onSetDarkMode(false)
        } else {
            // @ts-ignore
            context?.onSetDarkMode(true)
        }
    }
    return (
        <div>
            <Button  color='link' className='  border-0' onClick={toggle}>
                {/* {context?.darkMode == false ? "☾" : "☀"} */}
                {context?.darkMode == true ? <Icon fontSize={20} color='#fff' icon="bi:sun-fill" inline></Icon> : <Icon fontSize={20} color='rgba(244,244,245,1)' icon="bi:moon-fill" inline></Icon>}
            </Button>
        </div>
    );
};

export default DarkModeToggle;