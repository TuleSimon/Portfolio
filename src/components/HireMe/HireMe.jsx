import * as React from "react";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import DialogActions from "@mui/material/DialogActions";
import emailjs from "emailjs-com";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ContactMeForm, ContactMeInput, ContactMeInput2, Dialogs } from "./HireMeStyle";
import { RiCloseCircleFill, RiMailFill } from "react-icons/ri";
import { Slide, useMediaQuery, useTheme } from "@mui/material";

export default function FormDialog({ open, handleClose, setSB }) {
  const nameref = React.useRef();
  const emailref = React.useRef();
  const subjectref = React.useRef();
  const messageref = React.useRef();
  const form = React.useRef();
  
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("md"));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  const onSubmit = (e) => {
    const name = nameref.current.value;
    const email = emailref.current.value;
    e.preventDefault();
    const subject = subjectref.current.value;
    const message = messageref.current.value;
    
    if (
      name.length > 2 &&
      email.length > 5 &&
      subject.length > 3 &&
      message.length > 3
    ) {
      emailjs.send(
        "service_s74ep57",
        "template_yp82p4n",
        {"name":name,"email":email,"subject":subject,"message":message},
        "user_cozVpqgMHDZyInQOCOYCD"
      )
      .then(
        (result) => {
            alert('sent')
            handleClose()
        },
        (error) => {
          console.log(error);
          alert('error')
        }
      ).catch((error) => {
          console.log(error)
          alert(error.message)
      });
     
    } 
    else {
        alert('invalid inputs')
    }
  };

  return (
    <Dialogs
      open={open}
      onClose={handleClose}
      fullScreen={fullscreen}
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <span className="text-white flex text-4xl text-white">{fullscreen && <><RiCloseCircleFill  onClick={handleClose}/> &nbsp;  &nbsp;</>} Leave a Message</span>
      </DialogTitle>
      <ContactMeForm ref={form} onSubmit={onSubmit}>
        <DialogContent>
          <span
            className="text-white text-2xl text-white py-4"
            style={{ marginBottom: "20px" }}
          >
            Send a Message about the Job Details to me Now!!{" "}
          </span>

          <ContactMeInput
            id="name"
            placeholder="name"
            type="text"
            ref={nameref}
            fullWidth
          />
          <ContactMeInput
            id="email"
            placeholder="email"
            type="email"
            ref={emailref}
            fullWidth
          />
          <ContactMeInput
            id="subject"
            placeholder="Subject"
            type="text"
            ref={subjectref}
            fullWidth
          />
          <ContactMeInput2
            id="message"
            placeholder="message"
            type="multiline"
            ref={messageref}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="contained"
            size="large"
            sx={{ color: "white", fontSize: "1.2rem", background: "black" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            
            type="contained"
            size="large"
            sx={{ color: "white", fontSize: "1.2rem", background: "black" }}
            onClick={onSubmit}
            startIcon={<RiMailFill />}
          >
            Send
          </Button>
        </DialogActions>
      </ContactMeForm>
    </Dialogs>
  );
}
