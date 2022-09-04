import React, { useState, useEffect } from "react";
import "./style.scss";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  updateActiveUser,
  updateChats,
  updateCurrentUser,
  updateFirstTimeChat,
} from "./action";

export default function Index() {
  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);

  const myFunction = () => {
    if (!isActive) setActive(true);
    else setActive(false);
  };

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
    setActive(false);

    setCurrentChatId(
      currentUser.chatId + "-" + activeUser.chatId + "-" + currentUser.chatId
    );
    if (chats[currentChatId.slice(0, 5)]?.length) {
      setCurrentChat(chats[currentChatId.slice(0, 5)]);
    } else if (chats[currentChatId.slice(3)]) {
      setCurrentChat(chats[currentChatId.slice(3)]);
    } else {
      dispatch(updateFirstTimeChat(currentChatId.slice(0, 5)));
      setCurrentChat(chats[currentChatId.slice(0, 5)]);
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
              <p>QuickChat</p>
            </h2>
            <div className="profile-section">
              <img src={currentUser.avatar} alt="" />
              <div className="name">
                {currentUser.name}&nbsp;
                <div className="dropdown">
                  <AiOutlineSetting
                    className="option-icon"
                    onClick={myFunction}
                  />
                  <div className={`dropdown-content ${isActive ? "show" : ""}`}>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      {currentUser.name}
                    </p>
                    <p style={{ fontSize: "12px", paddingTop: "10px" }}>
                      Change current user:
                    </p>
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
              </div>

              <div className="designation">Lead UI/UX designer</div>
              <div className="active-button">Active</div>
            </div>
            <div className="active-conservation">
              <div
                className="heading"
                onClick={() => {
                  setToggleActiveConversations(!toggleActiveConversations);
                }}
              >
                <h5>Active Conversations</h5>
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
                          <img src={user.avatar} alt="" />
                          <p>{user.name}</p>
                        </li>
                      )
                    );
                  })}
              </div>
            </div>
            <div className="archived-conservation">
              <div className="heading">
                <h5>
                  Archived Conversations{" "}
                  <MdKeyboardArrowDown style={{ float: "right" }} />
                </h5>
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
                    <img
                      src={`${
                        currentUser.chatId === chat.slice(0, 2)
                          ? currentUser.avatar
                          : activeUser.avatar
                      }`}
                      alt=""
                    />
                    &nbsp;&nbsp;
                    <span className="message"> {chat.slice(2)}</span>
                  </div>
                </li>
              );
            })}
          </div>
          <div className="send-message-section">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter your message here"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button type="submit">
                Send&nbsp;&nbsp;
                <span>
                  <IoSend />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
