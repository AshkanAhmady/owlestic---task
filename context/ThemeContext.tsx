import React, { createContext, useEffect, useState } from "react";
import { ChildsComponentsType } from "../types";

export const ThemeContext = createContext<any>({ theme: "light", undefined })

export const ThemeProvider: React.FC<ChildsComponentsType> = ({ children }) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem("theme")
            setTheme(data || "light")
        }
    }, [])

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}