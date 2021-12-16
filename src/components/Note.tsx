import { Icons } from '../assets/icons';
import NoteList from '../pages/NoteList';
import { dateFormatter } from '../utils/utils';

interface NoteData {
    title: string;
    color: string;
    isTrashed: boolean;
    isPinned: boolean;
    isArchived: boolean;
    userEditedTimestampUsec: number;
    textContent?: string;
    listContent?: [{ text: string; isChecked: boolean }];
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

interface NoteProps {
    noteData: NoteData;
    className?: string;
}

export default function Note({ noteData, className }: NoteProps) {
    function renderColor(color: string) {
        switch (color) {
            case 'DEFAULT':
                return 'bg-white dark:bg-gray-700';
            case 'BLUE':
                return 'bg-blue-600 dark:bg-blue-600';
            case 'BROWN':
                return 'bg-stone-500 dark:bg-stone-400';
            case 'RED':
                return 'bg-red-600 dark:bg-red-600';
            case 'GREEN':
                return 'bg-white dark:bg-gray-700';
            case 'GRAY':
                return 'bg-white dark:bg-gray-700';
            case 'PINK':
                return 'bg-white dark:bg-gray-700';
            case 'CERULEAN':
                return 'bg-white dark:bg-gray-700';
            case 'ORANGE':
                return 'bg-white dark:bg-gray-700';
            case 'YELLOW':
                return 'bg-white dark:bg-gray-700';
            case 'TEAL':
                return 'bg-white dark:bg-gray-700';
            case 'PURPLE':
                return 'bg-purple-600 dark:bg-purple-600';
        }
    }

    return (
        <div
            className={`relative  max-w-sm overflow-hidden border rounded-xl ${renderColor(
                noteData.color
            )}`}
        >
            <button className="absolute z-20 p-2 transition bg-white bg-opacity-50 rounded-full top-3 right-3 hover:shadow-md hover:bg-opacity-100">
                <Icons.DotsMenu className="w-5 h-5" />
            </button>
            {/* IMAGE ATTACHMENTS */}
            <div className="flex flex-col overflow-hidden rounded-xl">
                {noteData.attachments &&
                    noteData.attachments
                        .filter(
                            (attachment) =>
                                attachment.mimetype === 'image/png' ||
                                attachment.mimetype === 'image.jpg' ||
                                attachment.mimetype === 'image/jpeg' ||
                                attachment.mimetype === 'image/gif'
                        )
                        .map((attachment) => {
                            return (
                                <div className="relative group">
                                    <img
                                        src={attachment.filePath}
                                        alt="Attachment"
                                        className="object-cover object-center w-full h-48"
                                    />
                                    <div className="absolute inset-0 items-center justify-center hidden w-full h-full transition bg-white group-hover:flex bg-opacity-20">
                                        <button className="p-2 bg-white rounded-full shadow-xl">
                                            <Icons.Close className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
            </div>
            <div className="px-5 py-4">
                {/*  TITLE */}
                <h2 className="text-xl font-semibold">{noteData.title}</h2>
                {/*  TEXT */}
                <div
                    className={`mt-2 text-lg ${
                        noteData.textContent ? 'mt-2' : ''
                    }}`}
                >
                    {noteData.textContent}
                </div>
                {/*  LINKS */}
                <div
                    className={`flex flex-col gap-2 ${
                        noteData.annotations ? 'mt-4' : ''
                    }`}
                >
                    {noteData.annotations &&
                        noteData.annotations.map((annotation) => {
                            return (
                                <div className="flex overflow-hidden bg-gray-100 bg-opacity-50 rounded-lg">
                                    <div className="relative flex-none w-14">
                                        <img
                                            src="https://picsum.photos/320/320?random=3"
                                            alt="Link preview"
                                            className="absolute inset-0 object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="px-3 py-2 truncate">
                                        <h3 className="overflow-hidden font-semibold text-ellipsis whitespace-nowrap">
                                            {annotation.title}
                                        </h3>
                                        <p className="overflow-hidden text-sm text-gray-600 text-ellipsis whitespace-nowrap">
                                            {annotation.url}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-between p-1">
                                        <button className="p-1 transition rounded-full hover:bg-gray-300">
                                            <Icons.Link className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 transition rounded-full hover:bg-gray-300">
                                            <Icons.Close className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {/*  AUDIO ATTACHMENTS */}
                <div
                    className={`flex flex-col gap-2 ${
                        noteData.attachments?.filter(
                            (attachment) => attachment.mimetype === 'audio/3gp'
                        )
                            ? 'mt-4'
                            : ''
                    }`}
                >
                    {noteData.attachments &&
                        noteData.attachments
                            .filter(
                                (attachment) =>
                                    attachment.mimetype === 'audio/3gp'
                            )
                            .map((attachment) => {
                                return (
                                    <div className="flex overflow-hidden bg-gray-100 rounded-lg">
                                        <audio controls className="">
                                            <source src={attachment.filePath} />
                                        </audio>
                                    </div>
                                );
                            })}
                </div>
                {/* LABELS */}
                <div className={`flex gap-2 ${noteData.labels ? 'mt-4' : ''}`}>
                    {noteData.labels &&
                        noteData.labels.map((label) => {
                            return (
                                <span className="relative group flex items-center px-3 py-0.5 bg-gray-200 bg-opacity-50 rounded-full font-medium">
                                    {label.name}
                                    <button className="absolute hidden w-4 h-4 bg-white rounded-full right-2 group-hover:block">
                                        <Icons.Close className="" />
                                    </button>
                                </span>
                            );
                        })}
                </div>
                {/* SHAREES */}
                <div
                    className={`flex flex-wrap gap-1 ${
                        noteData.sharees ? 'mt-4' : ''
                    }`}
                >
                    {noteData.sharees &&
                        noteData.sharees.map((sharee) => {
                            return (
                                <span className="relative flex items-center px-3 font-medium bg-gray-200 bg-opacity-50 rounded-full group">
                                    {sharee.email}
                                    <button className="absolute hidden w-4 h-4 bg-white rounded-full right-2 group-hover:block">
                                        <Icons.Close className="" />
                                    </button>
                                </span>
                            );
                        })}
                </div>
                {/* EDIT TIME */}
                <div className="mt-2 text-sm font-light tracking-wide">
                    {String(
                        dateFormatter(noteData.userEditedTimestampUsec / 1000)
                    )}
                </div>
            </div>
        </div>
    );
}
