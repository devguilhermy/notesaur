import {
	createContext,
	ReactNode,
	useContext,
	useState
	} from 'react';
export interface Label {
    name: string;
}

interface LabelsContextData {
    labels: Label[];
    handleAddLabels: (newLabels: Label[]) => Promise<void>;
}

interface LabelsContextProviderProps {
    children: ReactNode;
}

const LabelsContext = createContext<LabelsContextData>({} as LabelsContextData);

export function LabelsContextProvider({
    children,
}: LabelsContextProviderProps) {
    const [labels, setLabels] = useState<Label[]>([]);

    async function handleAddLabels(newLabels: Label[]) {
        await setLabels([...labels, ...newLabels]);
        return;
    }

    return (
        <LabelsContext.Provider value={{ labels, handleAddLabels }}>
            {children}
        </LabelsContext.Provider>
    );
}

export function useLabels() {
    const ctx = useContext(LabelsContext);

    return ctx;
}
