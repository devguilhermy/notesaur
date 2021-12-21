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
    isActionsMenuOpen: boolean;
    setOpenActionsMenu: any;
    ind: number;
}

export default function Note({ filename, className, isActionsMenuOpen, setOpenActionsMenu, ind }: NoteProps) {
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
                return 'bg-gray-100 dark:bg-gray-900 border-gray-200 dark:bg-gray-700';
            case 'BLUE':
                return 'bg-blue-200 dark:bg-blue-700 border-blue-200 dark:border-blue-600';
            case 'BROWN':
                return 'bg-stone-200 dark:bg-stone-700 border-stone-200 dark:border-stone-600';
            case 'RED':
                return 'bg-red-200 dark:bg-red-700 border-red-200 dark:border-red-700';
            case 'GREEN':
                return 'bg-green-200 dark:bg-green-700 border-green-200 dark:border-green-700';
            case 'GRAY':
                return 'bg-gray-200 dark:bg-gray-700 border-gray-200 dark:border-gray-700';
            case 'PINK':
                return 'bg-pink-200 dark:bg-pink-700 border-pink-200 dark:border-pink-700';
            case 'CERULEAN':
                return 'bg-cyan-200 dark:bg-cyan-700 border-cyan-200 dark:border-cyan-700';
            case 'ORANGE':
                return 'bg-orange-200 dark:bg-orange-700 border-orange-200 dark:border-orange-700';
            case 'YELLOW':
                return 'bg-yellow-200 dark:bg-yellow-700 border-yellow-200 dark:border-yellow-700';
            case 'TEAL':
                return 'bg-teal-200 dark:bg-teal-700 border-teal-200 dark:border-teal-700';
            case 'PURPLE':
                return 'bg-purple-200 dark:bg-purple-700 border-purple-200 dark:border-purple-700';
        }
    }

    return (
        <div className="relative note group" onMouseLeave={() => setOpenActionsMenu(-1)}>
            <div
                className={`note-content inline-block bg-pink relative rounded-xl overflow-hidden w-full ${renderColor(
                    noteData?.color || 'DEFAULT'
                )}  border`}
            >

                {/* IMAGE ATTACHMENTS */}
                <div className="flex flex-col gap-2 overflow-hidden rounded-xl">
                    {noteData?.attachments &&
                        noteData.attachments
                            .filter(
                                (attachment) => ['image/png', 'image.jpg', 'image/jpeg', 'image/gif'].includes(attachment.mimetype)
                            )
                            .map((attachment, index) => {
                                return (
                                    <img
                                        src={`${process.env.REACT_APP_SERVER_URL}/files/${attachment.filePath}`}
                                        alt="Attachment"
                                        className="flex-1 object-cover object-center"
                                        key={index}
                                    />
                                );
                            })}
                </div>
                <div className="px-5 py-4" 
                    onMouseDown={() => setOpenActionsMenu(ind)}>
                    {/*  TITLE */}
                    <h2 
                        className={`text-xl font-semibold leading-tight ${
                            noteData?.title !== '' ? 'block mb-2' : 'hidden'
                        }`}
                    >
                        {noteData?.title}
                    </h2>
                    {/*  TEXT */}
                    <div
                        className={`text-content text-lg whitespace-pre-line ${
                            noteData?.textContent !== '' ? 'mb-2' : ''
                        }`}
                    >
                        {noteData?.textContent}
                    </div>
                    {/*  CHECKLIST */}
                    <ul
                        className={`text-content text-lg overflow-y-auto  ${
                            noteData?.listContent &&
                            noteData?.listContent.length > 0
                                ? 'mb-4'
                                : ''
                        }`}
                    >
                        {noteData?.listContent?.map((listItem) => {
                            return (
                                <li>
                                    <input
                                        type="checkbox"
                                        defaultChecked={listItem.isChecked}
                                        className="bg-gray-400"
                                    />{' '}
                                    <span>{listItem.text}</span>
                                </li>
                            );
                        })}
                    </ul>
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
                                        className="flex overflow-hidden bg-gray-100 bg-opacity-50 rounded-lg shadow"
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
                                (attachment) =>
                                    attachment.mimetype === 'audio/3gp'
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
                                            className="flex overflow-hidden bg-gray-100 rounded-lg shadow"
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
                                        className="shadow relative flex items-center px-3 py-0.5 bg-gray-200 bg-opacity-50 rounded-full font-medium"
                                        key={index}
                                    >
                                        {label.name}
                                        {/* DELETE LABEL BUTTON */}
                                        {/* <button className="absolute hidden w-4 h-4 bg-white rounded-full right-2 group-hover:block">
                                            <Icons.Close className="" />
                                        </button> */}
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
            {/* ACTION MENU */}
            <div
                className={
                    `flex-col shadow-lg dark:bg-gray-700 gap-2 absolute -top-2 -right-6 z-30 p-2 rounded-xl bg-white justify-between ${ !isActionsMenuOpen && 'hidden' }`
                }
            >
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full block dark:bg-gray-800 hover:shadow-md hover:bg-opacity-100">
                    <Icons.Open className="w-5 h-5" />
                </button>
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full block dark:bg-gray-800 hover:shadow-md hover:bg-opacity-100">
                    <Icons.Pin className="w-5 h-5" />
                </button>
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full block dark:bg-gray-800 hover:shadow-md hover:bg-opacity-100">
                    <Icons.Star className="w-5 h-5" />
                </button>
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full block dark:bg-gray-800 hover:shadow-md hover:bg-opacity-100">
                    <Icons.Colors className="w-5 h-5" />
                </button>
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full block dark:bg-gray-800 hover:shadow-md hover:bg-opacity-100">
                    <Icons.Label className="w-5 h-5" />
                </button>
                {/* <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full dark:bg-gray-800 group-hover:block hover:shadow-md hover:bg-opacity-100">
                    <Icons.People className="w-5 h-5" />
                </button> */}
                {/* <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full group-hover:block hover:shadow-md hover:bg-opacity-100">
                    <Icons.Copy className="w-5 h-5" />
                </button>
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full group-hover:block hover:shadow-md hover:bg-opacity-100">
                    <Icons.Archive className="w-5 h-5" />
                </button> */}
                <button className="p-2 transition bg-gray-200 bg-opacity-50 rounded-full dark:bg-gray-800 block hover:shadow-md hover:bg-opacity-100">
                    <Icons.Trash className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
