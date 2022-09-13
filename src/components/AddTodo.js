import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Description can not be blank");
    }
    props.addTodo(title,desc);
    setTitle("");
    setDesc("");
  };
  return (
    <form onSubmit={Submit}>
      <div className="container my-3">
        <h3>Add a Todo</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Type Title Here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-sm btn-success" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
