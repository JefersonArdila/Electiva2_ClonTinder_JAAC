import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3000");

export default function ChatRoom({ token, matchId, currentUserId, matchedUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit("joinMatch", matchId);

    socket.on("newMessage", (msg) => {
      console.log("Mensaje recibido por socket:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [matchId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/messages/${matchId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error cargando mensajes:", err);
      }
    };
    fetchMessages();
  }, [matchId, token]);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = {
      content: input,
      matchId,
      receiverId: matchedUser.id,
    };

    try {
      await axios.post(`http://localhost:3000/api/messages`, newMessage, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInput("");
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    }
  };

  return (
    <div style={styles.chatContainer}>
      <h2 style={styles.header}>Chat con {matchedUser.firstName}</h2>
      <div style={styles.messagesContainer}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.messageBubble,
              ...(msg.senderId === currentUserId ? styles.sent : styles.received),
            }}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button style={styles.button} onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {
    width: "100%",
    maxWidth: 480,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    border: "1px solid #ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  header: {
    margin: 0,
    padding: "16px",
    backgroundColor: "#ff5864",
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.5rem",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  messagesContainer: {
    flex: 1,
    padding: "12px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#f5f5f5",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: "10px 16px",
    borderRadius: 20,
    fontSize: 16,
    lineHeight: 1.3,
  },
  sent: {
    backgroundColor: "#ff5864",
    color: "#fff",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  received: {
    backgroundColor: "#e4e6eb",
    color: "#050505",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  inputContainer: {
    display: "flex",
    padding: 12,
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 20,
    border: "1px solid #ddd",
    fontSize: 16,
    outline: "none",
    marginRight: 8,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  button: {
    backgroundColor: "#ff5864",
    border: "none",
    borderRadius: 20,
    color: "#fff",
    padding: "12px 20px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: 16,
    transition: "background-color 0.3s",
  },
};
