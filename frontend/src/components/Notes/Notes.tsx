
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
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [markdown, setmarkdown] = useState('Start writing your note here');

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
      
    } else {
// TOGGLE ON: Add the surrounding markers
        newText = before + marker + selected + marker + after;
        
        // Place the cursor after the inserted markers
        newCursorStart = start + marker.length;
        // If text was selected, keep the selection, otherwise place cursor after first marker
        newCursorEnd = end + marker.length;
  }
  // 3. Update the React state
    setmarkdown(newText);
    // 4. Restore the cursor/selection *after* React updates the DOM
    // We use a slight delay or queue the operation to ensure the DOM updates first.
    setTimeout(() => {
        textArea.focus();
        textArea.setSelectionRange(newCursorStart, newCursorEnd);
        // textArea.selectionEnd = newCursorEnd;
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
        {/* <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button> */}
      </NotesStyled> }
    {/* {notes.map((note, index)=>(
      <NotesStyled key={index}>
        <TypographyText margin='var(--margin-sm) 0 0 0' textAlign='center' variant='inherit' text={note.title} />
        <NotesContentSection >
        */}
      


    {/*
        <textarea ref={textAreaRef} value={markdown} onChange={handleMarkdownChange} />
        <Markdown>{`${note.content}`}</Markdown> */}

{/* <NotesContentSection>

  <div style={{ position: 'relative', width: '100%' }}>

    <div
      ref={previewRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        padding: 12,
        pointerEvents: 'none',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        overflow: 'auto',
        minHeight: 180,
        color: '#111', // preview text color
        zIndex: 1,
        fontSize: '1rem',
      }}
    >
      <Markdown>{markdown}</Markdown>
    </div> */}

    {/* <textarea
      ref={textAreaRef}
      value={markdown}
      onChange={handleMarkdownChange}
      onScroll={(e) => {
        const t = e.target as HTMLTextAreaElement;
        if (previewRef.current) previewRef.current.scrollTop = t.scrollTop;
      }}
      style={{
        fontSize: '1rem',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        minHeight: 180,
        padding: 12,
        resize: 'vertical',
        backgroundColor: 'transparent',
        background: 'transparent',
        color: 'transparent',       // hide raw text
        caretColor: '#000',         // keep visible caret
        border: '1px solid rgba(0,0,0,0.12)',
        lineHeight: '1.5',
        fontFamily: 'inherit',
        overflow: 'auto',
      }}
    />
  </div>
</NotesContentSection> */}

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
      {/* { </NotesStyled>
    ))} */}
    </GridContainer>
    </>
  )
} 