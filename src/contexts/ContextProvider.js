import React,{createContext,useContext,useState}from 'react';

const StateContext = createContext();//we can call that as a function

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider =({children}) => {
    const [activeMenu,setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor,setCurrentColor]=useState('#03C9D7');
    const [currentMode,setCurrentMode]=useState('Light');
    const [themeSettings,setThemeSettings]=useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
    
    
    localStorage.setItem('themeMode',e.target.value);//so when the user comes next time he sees the same value;
    setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
    
    
    localStorage.setItem('colorMode',color);//so when the user comes next time he sees the same value;
    setThemeSettings(false);
    }

    const handleClick=(clicked) => {
        setIsClicked({
            ...initialState,
            [clicked]:true
        });
    }

    return (
        <StateContext.Provider
        value={{ //what we are passing is inside the value
            //test:'test'
            activeMenu:activeMenu,//if key value same so then we can omit the later so activeMenu, will also work.
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setColor,
            setMode,
            themeSettings,
            setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>

    )
}
export const useStateContext = () => useContext(StateContext);