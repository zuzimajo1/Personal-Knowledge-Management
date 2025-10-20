
import { Container, GridContainer, NotesContentSection, NotesCreateSection, NotesOptionsSection, NotesStyled, NotesText } from '../../styles';
import { TypographyText } from '../Text/TypographyText';
import { Edit, Info, Visibility, Add, Note, ManageAccounts } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router';

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
    content: "# This is my first note.",
    createdAt: '2023-10-01T10:00:00Z',
    updatedAt: '2023-10-01T10:00:00Z',
    sharedWith: ['user2', 'user3'],
  },
  {
    id: '2',
    title: 'Second Note',
    content: "## This is my second note.",
    createdAt: '2023-10-02T11:00:00Z',
    updatedAt: '2023-10-02T11:00:00Z',
    sharedWith: ['user4'],
  },
  {
    id: '3',
    title: ' Third Note',
    content: "This is my third note. **Hello World!** [Link](https://example.com)",
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
    id: '5',
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

const location = useLocation();
  return (
    <>
    <GridContainer>
      {location.pathname === '/' && <NotesStyled>
        <NotesCreateSection>
        <NotesText className='notetext' margin='1rem' color='#707070' fontSize='2rem'>Create Note</NotesText>
        <Container height='150px' width='100%'>
        <Note className='AddIcon' sx={{ fontSize: 100, color: '#707070'}}/>
        </Container>
        </NotesCreateSection>
      </NotesStyled> }
    {notes.map((note, index)=>(
      <NotesStyled key={index}>
        <TypographyText margin='var(--margin-sm) 0 0 0' textAlign='center' variant='inherit' text={note.title} />
        <NotesContentSection >
        <Markdown>{`${note.content}`}</Markdown>
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
          <Tooltip title="Manage">
          <ManageAccounts sx={{ marginLeft: '8px', fontSize: 20, cursor: 'pointer'}} />
          </Tooltip>
        </NotesOptionsSection>
      </NotesStyled>
    ))}
    </GridContainer>
    </>
  )
}
