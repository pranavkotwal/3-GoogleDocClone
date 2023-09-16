import React, { useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'
import Box from '@mui/material/Box';
import { useEffect,useRef } from 'react';
import styled from '@emotion/styled';
import '../App.css';

const Component = styled.div`
    background-color:#f5f5f5;
    margin-top:0px;

`

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const Editor = () => {


    const wrapperRef = useCallback((wrapper)=>{
        if(wrapper==null) return
        wrapper.innerHTML ='';
        const editor = document.createElement('div');
        wrapper.append(editor)
        new Quill(editor,{theme:'snow',modules: {
            toolbar: toolbarOptions
            }})

        },[])

    return (
       <Component>
            <Box className='container' id='container' ref={wrapperRef}></Box>
        </Component>
    );
}

export default Editor;
