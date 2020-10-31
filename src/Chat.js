import { AddCircle, EmojiEmotionsSharp } from '@material-ui/icons';
import {React, useEffect, useState} from 'react';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import Message2 from "./Message2";
import Message3 from "./Message3";
import Message4 from "./Message4";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/counter/appSlice";
import { selectUser } from "./features/counter/userSlice";
import db from "./firebase";
import firebase from "firebase";

function Chat(){

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
              setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    };

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/> 

            <div className="chat__messages">
                <>
                <Message></Message>
                <Message2 />
                <Message3 />
                <Message4 />
                </>
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input 
                    value={input}
                    disabled={!channelId}
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder={'Message'} 
                    />

                    <button
                    disabled = {!channelId} 
                    className="chat__inputButton"
                    type = "submit"
                    onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftIcon fontSize="large" />
                    <GifIcon fontsize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>

            
            </div>
            
        </div>
    );
}

export default Chat;
