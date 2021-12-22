import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import NoteList from './pages/NoteList';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import { useState } from 'react';

export default function App() {
    const [theme, setTheme] = useState('');

    const toggleTheme = (reset?: 'reset') => {

        if (reset) { // Guard clause
            localStorage.removeItem('theme');
            setTheme('');
            return;
        }
        
        let new_theme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', new_theme);
        setTheme(new_theme);
    };

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login toggleTheme={toggleTheme} />} />
                <Route
                    path="/login"
                    element={<Login toggleTheme={toggleTheme} />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp toggleTheme={toggleTheme} />}
                />
                <Route
                    path="/new-password"
                    element={<NewPassword toggleTheme={toggleTheme} />}
                />
                <Route
                    path="/home"
                    element={<NoteList toggleTheme={toggleTheme} />}
                />
                <Route
                    path="/settings"
                    element={<Settings toggleTheme={toggleTheme} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
