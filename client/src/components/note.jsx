import React from "react";

var title = "This is the title";
var content = "This is the Content";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
      }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;