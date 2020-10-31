import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Aadish
                </h4>

                <p>Hello !!</p>
            </div>
            
        </div>
    )
}

export default Message;
