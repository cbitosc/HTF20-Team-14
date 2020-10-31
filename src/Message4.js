import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Akash
                    <span className="message__timestamp">
                    </span>
                </h4>

                <p>Did anyone watch the GOT movie? </p>
            </div>
            
        </div>
    )
}

export default Message;
