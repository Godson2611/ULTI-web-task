import React from "react";

const Preview = ({ questions, deleteQuestion }) => {
  return (
    <div className='container'>
      <h3>Preview Questions</h3>
      {questions.map((q) => (
        <div key={q.id} className='card my-3'>
          <div className='card-body'>
            <h5>{q.questionText}</h5>
            <ul>
              {q.options.map((opt) => (
                <li key={opt.optionId}>{opt.optionText}</li>
              ))}
            </ul>
            <button
              className='btn btn-danger'
              onClick={() => deleteQuestion(q.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preview;
