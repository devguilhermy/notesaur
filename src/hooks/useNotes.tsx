import {
	createContext,
	ReactNode,
	useContext,
	useState
	} from 'react';
import { NoteData } from '../types';

interface NotesContextProviderProps {
	children: ReactNode;
}

interface NotesContextData {
	noteList: NoteData[];
	addNote: (note: NoteData) => void;
	addNotes: (notes: NoteData[]) => void;
}

const NotesContext = createContext<NotesContextData>({} as NotesContextData);

export function NotesContextProvider({ children }: NotesContextProviderProps) {
	const [noteList, setNoteList] = useState<NoteData[]>([]);

	function addNote(note: NoteData) {
		setNoteList((noteList) => [...noteList, note]);
	}

	function addNotes(notes: NoteData[]) {
		setNoteList((noteList) => [...noteList, ...notes]);
	}

	return (
		<NotesContext.Provider value={{ noteList, addNote, addNotes }}>
			{children}
		</NotesContext.Provider>
	);
}

export function useNotes() {
	const context = useContext(NotesContext);

	return context;
}
