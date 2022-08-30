import React, { useState, useEffect } from "react";
import "./style.scss";
import { avatar } from "./images";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveUser, updateChats, updateCurrentUser } from "./action";

export default function Index() {
  const dispatch = useDispatch();

  const [profilePopup, setProfilePopup] = useState(false);

  const [toggleActiveConversations, setToggleActiveConversations] =
    useState(true);

  const [inputMessage, setInputMessage] = useState("");

  const { users, activeUser, currentUser, chats } = useSelector(
    (state) => state
  );

  const changeActiveUser = (index) => {
    dispatch(updateActiveUser(index));
  };

  const changeCurrentUser = (index) => {
    dispatch(updateCurrentUser(index));
  };

  const [currentChat, setCurrentChat] = useState([]);

  const [currentChatId, setCurrentChatId] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setInputMessage("");
    dispatch(updateChats(currentUser.chatId + inputMessage));
  };

  useEffect(() => {
    setCurrentChatId(
      currentUser.chatId + "-" + activeUser.chatId + "-" + currentUser.chatId
    );
    console.log(chats[currentChatId.slice(0, 5)]);
    if (chats[currentChatId.slice(0, 5)]) {
      setCurrentChat(chats[currentChatId.slice(0, 5)]);
    } else {
      setCurrentChat(chats[currentChatId.slice(3)]);
    }
  }, [currentUser.chatId, activeUser.chatId, currentChatId]);

  return (
    <div className="chat-assignment">
      <div className="overlay">
        <div className="left">
          <div className="heading">
            <h2>
              <div className="icon">
                <BsLightningChargeFill color="blue" />
              </div>
              <p>Quick Chat</p>
            </h2>
            <div className="profile-section">
              <img src={avatar} alt="" />
              <div className="name" onClick={() => setProfilePopup(true)}>
                {currentUser.name}
                <AiOutlineSetting />
              </div>
              {profilePopup && (
                <div className="profile-popup">
                  <div className="popup">
                    <p className="close" onClick={() => setProfilePopup(false)}>
                      close
                    </p>
                    <p>Current User: {currentUser.name}</p>
                    <p>Change Current User: </p>
                    {users.map((user, index) => {
                      return (
                        <p
                          key={index}
                          className="user"
                          onClick={() => changeCurrentUser(index)}
                        >
                          {user.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="designation">Lead UI/UX designer</div>
              <div className="active-button">
                {/* <input type="button" /> */}
              </div>
            </div>
            <div className="active-conservation">
              <div
                className="heading"
                onClick={() => {
                  setToggleActiveConversations(!toggleActiveConversations);
                }}
              >
                <h4>Active Conversations</h4>
                {toggleActiveConversations ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
              <div className="conversations">
                {toggleActiveConversations &&
                  users?.map((user, index) => {
                    return (
                      currentUser.name !== user.name && (
                        <li
                          key={index}
                          className={`user ${
                            activeUser.name === user.name ? "active" : ""
                          }`}
                          onClick={() => {
                            changeActiveUser(index);
                          }}
                        >
                          <img src={avatar} alt="" />
                          <p>{user.name}</p>
                        </li>
                      )
                    );
                  })}
              </div>
            </div>
            <div className="archived-conservation">
              <div className="heading">
                <h4>Archived Conversations</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="chat-section">
            {currentChat?.map((chat, index) => {
              return (
                <li key={index}>
                  <div
                    className={`${
                      currentUser.chatId === chat.slice(0, 2)
                        ? "message-right"
                        : "message-left"
                    }`}
                  >
                    <span className="message">{chat.slice(2)}</span>
                  </div>
                </li>
              );
            })}
          </div>
          <div className="send-message-section">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
