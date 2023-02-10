import * as React from 'react'
// Hook
// Parameter is the boolean, with default "false" value
export const useToggleTheme = (initialState = false) => {
    // Initialize the state
    const [state, setState] = React.useState(initialState);
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = React.useCallback(() => setState(state => !state), []);

    return [state, toggle]
}

export default useToggleTheme