import React from "react";
import Book from "./Book";

// function Book({ title, onClick }) {
//   return (
//     <div
//       className="answer"
//       onClick={() => {
//         onClick(title);
//       }}
//     >
//       <h4>{title}</h4>
//     </div>
//   );
// }

function Turn({ author, books, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: "",
      correct: "green",
      wrong: "red",
    };
    return mapping[highlight];
  }

  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
}

export default Turn;
