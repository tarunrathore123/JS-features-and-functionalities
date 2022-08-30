import React, { useState, useEffect } from "react";
import "./style.scss";
import { avatar } from "./images";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveUser } from "./action";

export default function Index() {
  const dispatch = useDispatch();

  const [inputMessage, setInputMessage] = useState("");

  const users = useSelector((state) => state.users);
  const { activeUser, currentUser } = useSelector((state) => state);

  const [toggleActiveConversations, setToggleActiveConversations] =
    useState(true);

  const [currentChatId, setCurrentChatId] = useState(
    currentUser.chatId + "-" + activeUser.chatId + "-" + currentUser.chatId
  );

  const [chats, setChats] = useState(
    useSelector((state) => state.chats[currentChatId.slice(0, 5)])
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setChats((chats) => [...chats, currentUser.chatId + inputMessage]);
    setInputMessage("");
  };

  useEffect(() => {
    setCurrentChatId(
      currentUser.chatId + "-" + activeUser.chatId + "-" + currentUser.chatId
    );
  }, [activeUser.name, currentUser.name]);

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
              <div className="name">
                {currentUser.name}
                <AiOutlineSetting />
              </div>
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
                            activeUser === index ? "active" : ""
                          }`}
                          onClick={() => {
                            dispatch(updateActiveUser(index));
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
            {chats?.map((chat, index) => {
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
        <div className="right">right</div>
      </div>
    </div>
  );
}
