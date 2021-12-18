import Note, { NoteData } from '../components/Note';
import { useEffect, useState } from 'react';

import Masonry from 'react-masonry-css';

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
        <>
            {/* <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files}
            /> */}
            <Masonry
                className="p-10 my-masonry-grid"
                breakpointCols={{
                    default: 5,
                    1920: 6,
                    1536: 5,
                    1152: 3,
                    768: 2,
                    640: 1,
                }}
                columnClassName="my-masonry-grid_column"
            >
                {notes.map((filename, index) => {
                    if (index < 500) {
                        return <Note filename={filename} key={index} />;
                    } else {
                        return <div></div>;
                    }
                })}
            </Masonry>
        </>
    );
}
