
import { Container, GridContainer, NotesContentSection, NotesOptionsSection, NotesStyled } from '../../styles';
import { TypographyText } from '../Text/TypographyText';
import { Edit, Info, Visibility } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

export const Notes = () => {


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
    content: "ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis consectetur cupiditate suscipit mollitia! ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis consectetur cupiditate suscipit mollitia! ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis",
    
    createdAt: '2023-10-04T13:00:00Z',
    updatedAt: '2023-10-04T13:00:00Z',
    sharedWith: ['user6'],
  },

]


  return (
    <GridContainer>
    {notes.map((note)=>(
      <NotesStyled key={note.id}>
        <TypographyText textAlign='center' variant='inherit' text={note.title} />
        <NotesContentSection >
        <TypographyText textAlign='justify' variant='caption' text={note.content} />
        </NotesContentSection>
        <NotesOptionsSection className='notes-options-section'>
          <Tooltip title="Edit">
          <Edit  sx={{ fontSize: 20, cursor: 'pointer'}} />
          </Tooltip>
          <Tooltip title="View">
          <Visibility  sx={{marginLeft: '8px', fontSize: 20, cursor: 'pointer'}} />
          </Tooltip>
          <Tooltip title="Info">
          <Info  sx={{ marginLeft: '8px', fontSize: 20, cursor: 'pointer'}} />
          </Tooltip>
        </NotesOptionsSection>
      </NotesStyled>
    ))}
    </GridContainer>
  )
}
