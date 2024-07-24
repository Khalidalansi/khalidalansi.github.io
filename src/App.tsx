import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ArgonDesignSystemReact.css';
import './styles/styles.css';
import "./styles/vendor/font-awesome/css/font-awesome.min.css";
import "./styles/vendor/nucleo/css/nucleo.css";
import './assets/fonts/Agustina.otf';
import { ThemeProvider } from 'styled-components';
import MainApp from './MainApp';
import SettingsContext from './constants/Theme/Settings/SettingsContext';
import { darkTheme, lightTheme } from './constants/Theme/themes';
import GlobalStyles from './constants/Theme/GlobalStyles';
import SettingsProvider from './constants/Theme/Settings/SettingsProvider';

const RootApp = (): JSX.Element => {
  const context = React.useContext(SettingsContext);
  const theme = context?.darkMode ? darkTheme : lightTheme;
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainApp />
    </ThemeProvider>
  )
}


export const App = () => {
  return (
    <SettingsProvider>
      <RootApp />
    </SettingsProvider >
  )
};
export default App;
