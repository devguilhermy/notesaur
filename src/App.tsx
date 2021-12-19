import NoteList from './pages/NoteList';
import { useState } from 'react';

export default function App() {
    const [theme, setTheme] = useState('');

    const toggleTheme = (reset?: 'reset') => {
        if (!reset) {
            let new_theme;
            if (theme === 'dark') {
                new_theme = 'light';
            } else {
                new_theme = 'dark';
            }

            localStorage.setItem('theme', new_theme);
            setTheme(new_theme);
        } else {
            localStorage.removeItem('theme');
            setTheme('');
        }
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
        <>
            <NoteList toggleTheme={toggleTheme} />
        </>
    );
}
