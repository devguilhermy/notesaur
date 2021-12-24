import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import NoteList from './pages/NoteList';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import { ThemeContextProvider } from './hooks/useTheme';

export default function App() {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/home" element={<NoteList />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </ThemeContextProvider>
    );
}
