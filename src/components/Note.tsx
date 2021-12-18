import { useEffect, useState } from 'react';

import { Icons } from '../assets/icons';
import { dateFormatter } from '../utils/utils';

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

interface NoteProps {
    filename: string;
    className?: string;
}

export default function Note({ filename, className }: NoteProps) {
    const [noteData, setNoteData] = useState<NoteData>();

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_URL}/files/${filename}`
            );

            const notesList = await response.json();

            setNoteData(notesList);
        })();
    }, [filename]);

    function renderColor(color: string) {
        switch (color) {
            case 'DEFAULT':
                return 'bg-gray-100 dark:bg-gray-700';
            case 'BLUE':
                return 'bg-blue-600 dark:bg-blue-600 border-blue-600 dark:border-blue-600';
            case 'BROWN':
                return 'bg-stone-500 dark:bg-stone-400 border-stone-500 dark:border-stone-400';
            case 'RED':
                return 'bg-red-600 dark:bg-red-600';
            case 'GREEN':
                return 'bg-green-600 dark:bg-green-600';
            case 'GRAY':
                return 'bg-gray-600 dark:bg-gray-600';
            case 'PINK':
                return 'bg-pink-600 dark:bg-gray-600';
            case 'CERULEAN':
                return 'bg-sky-600 dark:bg-aky-700';
            case 'ORANGE':
                return 'bg-orange-600 dark:bg-orange-700';
            case 'YELLOW':
                return 'bg-yellow-600 dark:bg-yellow-700';
            case 'TEAL':
                return 'bg-teal-600 dark:bg-teal-700';
            case 'PURPLE':
                return 'bg-purple-600 dark:bg-purple-600';
        }
    }

    return (
        <div
            className={`bg-pink relative mb-7 sm:max-w-xs overflow-hidden rounded-xl ${renderColor(
                noteData?.color || 'DEFAULT'
            )}  border`}
        >
            <div className="absolute w-full h-full inset-0 group">
                <button className="hidden group-hover:block absolute z-20 p-2 transition bg-white bg-opacity-50 rounded-bl-xl top-0 right-0 hover:shadow-md hover:bg-opacity-100">
                    <Icons.DotsMenu className="w-4 h-4" />
                </button>
            </div>
            {/* IMAGE ATTACHMENTS */}
            <div className="flex flex-col overflow-hidden rounded-xl">
                {noteData?.attachments &&
                    noteData.attachments
                        .filter(
                            (attachment) =>
                                attachment.mimetype === 'image/png' ||
                                attachment.mimetype === 'image.jpg' ||
                                attachment.mimetype === 'image/jpeg' ||
                                attachment.mimetype === 'image/gif'
                        )
                        .map((attachment, index) => {
                            return (
                                <div className="relative group" key={index}>
                                    <img
                                        src={`${process.env.REACT_APP_SERVER_URL}/files/${attachment.filePath}`}
                                        alt="Attachment"
                                        className="object-cover object-center w-full"
                                    />
                                    {/* DELETE IMAGE BUTTON OVERLAY */}
                                    {/* <div className="absolute inset-0 items-center justify-center hidden w-full h-full transition bg-black group-hover:block bg-opacity-20">
                                        <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-xl">
                                            <Icons.Close className="w-5 h-5" />
                                        </button>
                                    </div> */}
                                </div>
                            );
                        })}
            </div>
            <div className="px-5 py-4">
                {/*  TITLE */}
                <h2
                    className={`text-xl font-semibold ${
                        noteData?.title !== '' ? 'block mb-2' : 'hidden'
                    }`}
                >
                    {noteData?.title}
                </h2>
                {/*  TEXT */}
                <div
                    className={`text-content text-lg  ${
                        noteData?.textContent !== '' ? 'mb-2' : ''
                    }`}
                >
                    {noteData?.textContent}
                </div>
                {/*  CHECKLIST */}
                <div
                    className={`text-lg max-h-64 overflow-y-auto  ${
                        noteData?.listContent &&
                        noteData?.listContent.length > 0
                            ? 'mb-4'
                            : ''
                    }`}
                >
                    <ul>
                        {noteData?.listContent?.map((listItem) => {
                            return <li>{listItem.text}</li>;
                        })}
                    </ul>
                </div>
                {/*  LINKS */}
                <div
                    className={`flex flex-col gap-2 ${
                        noteData?.annotations ? 'mb-4' : ''
                    }`}
                >
                    {noteData?.annotations &&
                        noteData.annotations.map((annotation, index) => {
                            return (
                                <div
                                    className="flex overflow-hidden bg-gray-100 bg-opacity-50 rounded-lg"
                                    key={index}
                                >
                                    <div className="relative flex-none w-14">
                                        <img
                                            src={`https://picsum.photos/320/320?random=${
                                                index + 3
                                            }`}
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
                        noteData?.attachments &&
                        noteData.attachments.filter(
                            (attachment) => attachment.mimetype === 'audio/3gp'
                        ).length > 0
                            ? 'mb-4'
                            : ''
                    }`}
                >
                    {noteData?.attachments &&
                        noteData.attachments
                            .filter(
                                (attachment) =>
                                    attachment.mimetype === 'audio/3gp'
                            )
                            .map((attachment, index) => {
                                return (
                                    <div
                                        className="flex overflow-hidden bg-gray-100 rounded-lg"
                                        key={index}
                                    >
                                        <audio controls className="">
                                            <source
                                                src={`${process.env.REACT_APP_SERVER_URL}/files/${attachment.filePath}`}
                                            />
                                        </audio>
                                    </div>
                                );
                            })}
                </div>
                {/* LABELS */}
                <div
                    className={`flex flex-wrap gap-2 ${
                        noteData?.labels ? 'mb-4' : ''
                    }`}
                >
                    {noteData?.labels &&
                        noteData.labels.map((label, index) => {
                            return (
                                <span
                                    className="relative group flex items-center px-3 py-0.5 bg-gray-200 bg-opacity-50 rounded-full font-medium"
                                    key={index}
                                >
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
                        noteData?.sharees ? 'mb-2' : ''
                    }`}
                >
                    {noteData?.sharees &&
                        noteData.sharees.map((sharee, index) => {
                            return (
                                <span
                                    className="relative flex items-center px-3 font-medium bg-gray-200 bg-opacity-50 rounded-full group"
                                    key={index}
                                >
                                    {sharee.email}
                                    <button className="absolute hidden w-4 h-4 bg-white rounded-full right-2 group-hover:block">
                                        <Icons.Close className="" />
                                    </button>
                                </span>
                            );
                        })}
                </div>
                {/* EDIT TIME */}
                <div className="text-sm font-light tracking-wide">
                    {noteData?.userEditedTimestampUsec &&
                        String(
                            dateFormatter(
                                noteData.userEditedTimestampUsec / 1000
                            )
                        )}
                </div>
            </div>
        </div>
    );
}
