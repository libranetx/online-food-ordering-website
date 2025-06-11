import React, { useState } from "react";
import '../pages/feedback.css'

const CustemerFeedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const newFeedback = {
      id: Date.now(),
      name,
      message,
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setName("");
    setMessage("");
  };

  return (
    <div className="formCont">
      <h2 >Leave Your Feedback</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="iname"
        />

        <textarea
          placeholder="Your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="itext"
          rows={4}
        />

        <button
          type="submit"
          className="ibtn"
        >
          Submit Feedback
        </button>
      </form>

      <div className="mt-8">
          <ul className="msg">
            {feedbackList.map((fb) => (
              <li key={fb.id} className="msgs">
                <p className="name">{fb.name}</p>
                <p className="mesage">{fb.message}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default CustemerFeedback;
