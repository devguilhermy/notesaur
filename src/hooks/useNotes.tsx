import {
	createContext,
	ReactNode,
	useContext,
	useState
	} from 'react';

export interface NoteData {
    title?: string;
    color: string;
    isTrashed: boolean;
    isPinned: boolean;
    isArchived: boolean;
    userEditedTimestampUsec: number;
    textContent?: string;
    listContent?: { text: string; isChecked: boolean }[];
    labels?: { name: string }[];
    attachments?: {
        filePath: string;
        mimetype: string;
        // mimetype: 'image/png' | 'image/jpeg' | 'image/gif' | 'audio/3gp';
    }[];
    annotations?: {
        description: string;
        source: string;
        title: string;
        url: string;
    }[];
    sharees?: { isOwner: boolean; type: string; email: string }[];
}

interface NotesContextProviderProps {
    children: ReactNode;
}

interface NotesContextData {
    note_list: NoteData[];
    addNote: (note: NoteData) => void;
}

const NotesContext = createContext<NotesContextData>({} as NotesContextData);

export function NotesContextProvider({ children }: NotesContextProviderProps) {
    const [note_list, setNoteList] = useState<NoteData[]>([]);

    async function addNote(note: NoteData) {
        setNoteList([...note_list, note]);
    }

    return (
        <NotesContext.Provider value={{ note_list, addNote }}>
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);

    return context;
}
