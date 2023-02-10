import React from "react";
interface AppContextInterface {
  darkMode: boolean;
  onSetDarkMode?(darkMode: boolean): void
}
export default React.createContext<AppContextInterface | null>({
  darkMode: false
});
