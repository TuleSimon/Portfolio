import { Dialog } from '@mui/material'
import styled from 'styled-components'

export const ContactMeForm = styled.form `
    width: 100%;
    display:flex;
    height:max-content;
    flex-direction: column;
    gap:20px;
    padding:10px;
`

export const ContactMeInput = styled.input `
    width:100%;
    background: rgb(255,255,255,0.1);
    color:white;
    padding:10px;
    margin-top:15px;
    border-radius:10px;
    box-shadow:2px 2px 8px gray;
    outline:none;
    border:none;

`
export const ContactMeInput2 = styled.textarea `
    width:100%;
    background: rgb(255,255,255,0.1);
    color:white;
    min-height: 200px;
    padding:20px;
    height:max-content;
    margin-top:20px;
    border-radius:10px;
    outline:none;
    border:none;

`


export const FieldDIv = styled.div `
    display:flex; 
    flex-direction: column;
    gap:10px;
`

export const Dialogs = styled(Dialog)
`
    
    .MuiDialog-paper{
        background:linear-gradient(270deg, #333232 0%, #531c33 100%) !important;
        color:white !important;
        font-size:2rem !important;
    }
`