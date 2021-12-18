import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Note from '../components/Note';
import Sidebar from '../components/Sidebar';

// import Masonry from 'react-masonry-css';

// import noteList from '../notes';

export default function NoteList() {
    const [notes, setNotes] = useState<[]>([]);

    console.log(`${process.env.REACT_APP_SERVER_URL}/notes`);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_SERVER_URL}/notes`
                );

                setNotes(await response.json());

                // console.log(await response.json());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="min-h-screen antialiased bg-gray-200 flex flex-col h-screen">
            <Header className="flex-shrink-0" />
            <div className="flex flex-1 overflow-y-hidden">
                <Sidebar className="" />
                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        350: 1,
                        768: 2,
                        1024: 3,
                        1280: 4,
                        1536: 5,
                        1792: 6,
                        2048: 7,
                        2304: 8,
                        2560: 9,
                        2816: 10,
                    }}
                    className="w-full overflow-y-auto mt-6"
                >
                    <Masonry gutter="30px" className="px-6">
                        {notes.map((filename, index) => {
                            if (index > 100 && index < 300) {
                                return <Note filename={filename} key={index} />;
                            } else {
                                return <></>;
                            }
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}
