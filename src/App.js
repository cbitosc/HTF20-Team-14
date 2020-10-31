import { React, useEffect } from 'react';
import logo from './logo.svg';
import userSlice from './features/counter/userSlice';
import appSlice from './features/counter/appSlice';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from "./Login";
import { auth } from "./firebase";
import {login, logout} from './features/counter/userSlice';

function App() {

  const dispatch = useDispatch();
  const user =  useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if(authUser) { 
        dispatch(
          login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName,
        })
        );
      }
      else {
        //user is logged out
        dispatch(logout())
      }
    });
  },[dispatch]);

  return (
    <div className= "app">
      {user ?
        (
          <div className="main">
            <Sidebar />
            <Chat />
          </div>
        ): (
          <Login />
        )}
    </div>
  );
}

export default App;