import { useState } from 'react';
import Note from '../components/Note';

export default function NoteList() {
    const [notes, setNotes] = useState([
        {
            title: 'Defenestração',
            color: 'BROWN',
            isTrashed: false,
            isPinned: false,
            isArchived: false,
            userEditedTimestampUsec: 1573146720154000,
            textContent:
                'O ato de jogar algo através de uma janela\nOrigem italiana: fenestra',
            attachments: [
                {
                    filePath: '170566013a7.8b91d6d019264d8c.3gp',
                    mimetype: 'audio/3gp',
                },
                // { filePath: '1569213944449.48271170.gif', mimetype: 'image/gif' },
                // {
                //     filePath: '1569213959468.973618204.jpeg',
                //     mimetype: 'image/jpeg',
                // },
                {
                    filePath: 'https://picsum.photos/320/320?random=1',
                    mimetype: 'image/jpeg',
                },
                {
                    filePath: 'https://picsum.photos/320/320?random=2',
                    mimetype: 'image/jpeg',
                },
            ],
            annotations: [
                {
                    description:
                        'Technology. The 21st century has seen rapid growth in our ability to store and access data.',
                    source: 'WEBLINK',
                    title: 'Superman memory crystal | Official Site | 5D Optical Storage - Technology',
                    url: 'https://www.5dmemorycrystal.com/technology/',
                },
                {
                    description: 'And the way we govern.',
                    source: 'WEBLINK',
                    title: 'Emergent Systems Are Changing the Way We Think - The Aspen Institute',
                    url: 'https://www.aspeninstitute.org/blog-posts/emergent-systems-changing-way-think/',
                },
            ],
            labels: [
                { name: 'Interesting' },
                { name: '2 do' },
                { name: 'Art' },
            ],
        },
        {
            title: 'Anotações são cruciais para uma vida saudável',
            color: 'BLUE',
            isTrashed: false,
            isPinned: false,
            isArchived: false,
            userEditedTimestampUsec: 1573146720154000,
            textContent:
                'Quando se anota ideias e pensamentos, desocupa-se espaço da mente, permitindo ao cérebro aventurar em novos devaneios sem medo de perder pra sempre os anteriores',
            labels: [{ name: 'Thoughts' }],
        },
        {
            color: 'PURPLE',
            isTrashed: false,
            isPinned: false,
            isArchived: false,
            textContent:
                'Estava sala do 3 º ano, duas carteiras a frente de onde eu sentava\nera uma turma nova, e nao conhecia ninguem\n\nEstadio, estava vendo um show. Karen tinha terminado e estavam querendo juntar ela comigo.\n\n',
            title: '',
            userEditedTimestampUsec: 1571927792881000,
            labels: [{ name: 'Dreams' }],
            sharees: [
                {
                    isOwner: false,
                    type: 'USER',
                    email: 'nickolascarlos@gmail.com',
                },
                {
                    isOwner: false,
                    type: 'USER',
                    email: 'josaffaantunes@gmail.com',
                },
                {
                    isOwner: false,
                    type: 'USER',
                    email: 'antonio.henrique.if@gmail.com',
                },
            ],
        },
        {
            color: 'RED',
            isTrashed: false,
            isPinned: false,
            isArchived: false,
            textContent:
                'Eu não sabia que você era crente.\nEu tive que virrar uma para sobreviver nesse lugar\n',
            title: '',
            userEditedTimestampUsec: 1566569551602000,
            labels: [{ name: 'Tale parts' }, { name: 'Dialogues' }],
        },
    ]);

    return (
        <div className="grid grid-cols-4 gap-4 p-10">
            {notes.map((note) => {
                return <Note noteData={note} />;
            })}
        </div>
    );
}
