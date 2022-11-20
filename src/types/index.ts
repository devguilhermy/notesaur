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