import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Message({ timestamp, user, message }) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Abhinav
                    <span className="message__timestamp">
                    </span>
                </h4>

                <p>Hello everyone did you guys watch the new episode?</p>
            </div>
            
        </div>
    )
}

export default Message;
