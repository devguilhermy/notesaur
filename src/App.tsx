import Login from './pages/Login';
import NewPassword from './pages/NewPassword';
import NoteList from './pages/NoteList';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LabelsContextProvider } from './hooks/useLabels';
import { NotesContextProvider } from './hooks/useNotes';
import { ThemeContextProvider } from './hooks/useTheme';
import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <ThemeContextProvider>
            <LabelsContextProvider>
                <BrowserRouter>
                    <ToastContainer />
                    <Routes>
                        <Route index element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/new-password" element={<NewPassword />} />

                        <Route
                            path="/home"
                            element={
                                <NotesContextProvider>
                                    <NoteList />
                                </NotesContextProvider>
                            }
                        />

                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </BrowserRouter>
            </LabelsContextProvider>
        </ThemeContextProvider>
    );
}
