import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from './cardsSlice';
import { nanoid } from '@reduxjs/toolkit';

function CardForm() {
    const dispatch = useDispatch();
    const  [title,setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange =(e)=>{

        setTitle(e.target.value)
    }
    const onContentChange =(e)=>{

        setContent(e.target.value)
    }
const onSavePostClicked=()=>{
    if(title && content){

        dispatch(addCard({
            id:nanoid(),
            title,
            content,
        }));

    }
    setTitle('');
    setContent('');
}
  return (
    <form>
           
                <input onChange={onTitleChange} type="text" id="postTitle" name="postTitle" value={title} />
           

            <label>
                <textarea type="textarea" onChange={onContentChange} id="postContent" name="postContent" value={content} />

                
            </label>
            <button onClick={onSavePostClicked} type="button">Save Post</button>
        </form>
  )
}

export default CardForm
