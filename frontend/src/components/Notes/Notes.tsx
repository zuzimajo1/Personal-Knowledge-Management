import React from 'react'
import { NotesStyled } from '../../styles/Notes.styled'
import { TypographyText } from '../Text/TypographyText';
import { GridContainer } from '../../styles/Container.styled';

const Notes = () => {


interface Note {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    sharedWith: string[];

}

const notes: Note[] = [
  {
    id: '1',
    title: 'First Notes',
    content: "This is my first note.",
    createdAt: '2023-10-01T10:00:00Z',
    updatedAt: '2023-10-01T10:00:00Z',
    sharedWith: ['user2', 'user3'],
  },
  {
    id: '2',
    title: 'Second Note',
    content: "This is my second note.",
    createdAt: '2023-10-02T11:00:00Z',
    updatedAt: '2023-10-02T11:00:00Z',
    sharedWith: ['user4'],
  },
  {
    id: '3',
    title: 'Third Note',
    content: "This is my third note.",
    createdAt: '2023-10-03T12:00:00Z',
    updatedAt: '2023-10-03T12:00:00Z',
    sharedWith: ['user5'],

  },
  {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note.",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note.",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },

   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
   {
    id: '4',
    title: 'Fourth Note',
    content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },
  
]


  return (
    <GridContainer>
    {notes.map((note)=>(
      <NotesStyled key={note.id}>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <p>{`Created at ${note.createdAt}`}</p>
      </NotesStyled>
    ))}
    </GridContainer>
  )
}

export default Notes