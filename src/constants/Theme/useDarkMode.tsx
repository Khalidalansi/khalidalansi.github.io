import React from "react";
import SettingsContext from "./Settings/SettingsContext";


export const useDarkMode = () => {
    const context = React.useContext(SettingsContext);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    React.useEffect(() => {
        setIsDarkMode(context?.darkMode ? true : false)
    }, [context]);
    return [isDarkMode];
}
