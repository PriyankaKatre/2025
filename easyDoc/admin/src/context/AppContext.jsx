import { createContext, memo } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={ value}>{ props.children}</AppContext.Provider>
    )
}

export default memo(AppContextProvider);
