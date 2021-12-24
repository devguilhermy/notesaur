import { ReactNode, createContext, useContext, useState } from 'react';

interface ThemeContextProviderProps {
    children: ReactNode;
}

type Theme = 'dark' | 'light' | 'default';

interface ThemeContextData {
    theme: Theme;
    toggleTheme: () => void;
    resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState(
        (localStorage.getItem('theme') || 'default') as Theme
    );

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    function toggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.theme = 'light';
        } else if (theme === 'light') {
            setTheme('dark');
            localStorage.theme = 'dark';
        }
    }

    function resetTheme() {
        localStorage.removeItem('theme');
        setTheme('default');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    return context;
}
