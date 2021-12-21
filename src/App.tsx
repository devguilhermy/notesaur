import NoteList from './pages/NoteList';
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
        <>
            <NoteList toggleTheme={toggleTheme} />
        </>
    );
}
