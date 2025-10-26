
import { Container, GridContainer, NotesContentSection, NotesCreateSection, NotesOptionsSection, NotesStyled, NotesText } from '../../styles';
import { TypographyText } from '../Text/TypographyText';
import { Edit, Info, Visibility, Add, Note, ManageAccounts } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router';

export const Notes = () => {

  const location = useLocation();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [markdown, setmarkdown] = useState('# Start writing your note here');

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setmarkdown(e.target.value);
  }



  /**
   * Core function to wrap the selected text with a given marker.
   * @param {string} marker - The character(s) to wrap the text with (e.g., '*' or '**').
   */


  const wrapSelectedText = (marker : string) => {
    const textArea = textAreaRef.current; //current value of the textarea
    if (!textArea) return;

    const start = textArea.selectionStart;   //cursor start position
    const end = textArea.selectionEnd;  //cursor end position
    const currentText = markdown; //current markdown text



// 1. Get the parts of the text
    const before = currentText.substring(0, start); //text before selection
    const selected = currentText.substring(start, end);  //selected text
    const after = currentText.substring(end); //text after selection

    // 2. Check if the text is already formatted to toggle it off (optional feature)
    const isAlreadyFormatted = 
        before.endsWith(marker) && 
        after.startsWith(marker) && 
        (start - marker.length >= 0) &&
        (end + marker.length <= currentText.length); //ensures we don't go out of bounds

    let newText;
    let newCursorStart;
    let newCursorEnd;

    // console.log(after.startsWith(marker));
    // TOGGLE OFF: Remove the surrounding markers
    if (isAlreadyFormatted) {
// TOGGLE OFF: Remove the surrounding markers
        newText = 
            before.substring(0, before.length - marker.length) + 
            selected + 
            after.substring(marker.length);
            
        newCursorStart = start - marker.length;
        newCursorEnd = end - marker.length;

    }else {
// TOGGLE ON: Add the surrounding markers
        newText = before + marker + selected + marker + after;
        
        // Place the cursor after the inserted markers
        newCursorStart = start + marker.length;
        // If text was selected, keep the selection, otherwise place cursor after first marker
        newCursorEnd = end + marker.length;

  }
    console.log(isAlreadyFormatted);
    console.log('newtext', newText);
  // 3. Update the React state
    setmarkdown(newText);
    // 4. Restore the cursor/selection *after* React updates the DOM
    // We use a slight delay or queue the operation to ensure the DOM updates first.
    setTimeout(() => {
        textArea.focus();
        textArea.setSelectionRange(newCursorStart, newCursorEnd);
    }, 0)
};


  const handleBold = ()=> wrapSelectedText('**');
  const handleItalic = ()=> wrapSelectedText('*');


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
    content: markdown,
    createdAt: '2023-10-01T10:00:00Z',
    updatedAt: '2023-10-01T10:00:00Z',
    sharedWith: ['user2', 'user3'],
  },
  // {
  //   id: '2',
  //   title: 'Second Note',
  //   content: "## This is my second note.",
  //   createdAt: '2023-10-02T11:00:00Z',
  //   updatedAt: '2023-10-02T11:00:00Z',
  //   sharedWith: ['user4'],
  // },
  // {
  //   id: '3',
  //   title: ' Third Note',
  //   content: "This is my third note. **Hello World!** [Link](https://example.com)",
  //   createdAt: '2023-10-03T12:00:00Z',
  //   updatedAt: '2023-10-03T12:00:00Z',
  //   sharedWith: ['user5'],

  // },
  // {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note.",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '5',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note.",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },

  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "This is my fourth note. This is my fourth note This is my fourth note This is my fourth note ",
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
  //  {
  //   id: '4',
  //   title: 'Fourth Note',
  //   content: "ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis consectetur cupiditate suscipit mollitia! ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis consectetur cupiditate suscipit mollitia! ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat quas, ut odit quisquam similique provident veniam atque dolore earum libero maxime sint animi omnis perferendis",
    
  //   createdAt: '2023-10-04T13:00:00Z',
  //   updatedAt: '2023-10-04T13:00:00Z',
  //   sharedWith: ['user6'],
  // },
]


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
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <textarea ref={textAreaRef} value={markdown} onChange={handleMarkdownChange} />
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
