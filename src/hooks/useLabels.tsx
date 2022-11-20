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
	labelList: Label[];
	handleAddLabels: (newLabels: Label[]) => void;
}

interface LabelsContextProviderProps {
	children: ReactNode;
}

const LabelsContext = createContext<LabelsContextData>({} as LabelsContextData);

export function LabelsContextProvider({
	children,
}: LabelsContextProviderProps) {
	const [labelList, setLabelList] = useState<Label[]>([]);

	function handleAddLabels(newLabels: Label[]) {
		setLabelList((labelList) => [...labelList, ...newLabels]);
	}

	return (
		<LabelsContext.Provider value={{ labelList, handleAddLabels }}>
			{children}
		</LabelsContext.Provider>
	);
}

export function useLabels() {
	const ctx = useContext(LabelsContext);

	return ctx;
}
