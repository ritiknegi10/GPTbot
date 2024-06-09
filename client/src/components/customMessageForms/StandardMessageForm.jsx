import {
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { create } from "domain";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

const StandardMessageForm = (porps, activeChat) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");
  const handleChange = (e) => setMessage(e.target.value);
  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.random()}+00:00`);
      const at = attachment > [{blob : attachment, file : attachment.name}];
      const form ={
        attachments: at,
        created: date,
        sender_username: props.username ,
        text: message,
        activeChat: activeChat.id,
      }
      
  };
  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            className="message-form-preview-image"
            src={preview}
            alt="message-form-preview"
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="send a message.."
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg, .jpeg, .png"
            multiplr={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttachment(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
