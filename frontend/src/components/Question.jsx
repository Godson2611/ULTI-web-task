import React, { useState } from "react";

const Question = ({ addQuestion, updateQuestion }) => {
  const [question, setQuestion] = useState({
    type: "MCQ",
    questionText: "",
    options: [],
    continueTo: "",
  });

  const handleQuestionChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = question.options.map((option, idx) =>
      idx === index ? { ...option, optionText: value } : option
    );
    setQuestion({ ...question, options: newOptions });
  };

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, { optionId: Date.now(), optionText: "" }],
    });
  };

  const removeOption = (index) => {
    setQuestion({
      ...question,
      options: question.options.filter((_, idx) => idx !== index),
    });
  };

  const handleSave = () => {
    if (question.id) {
      updateQuestion(question);
    } else {
      addQuestion({ ...question, id: Date.now() });
    }
    setQuestion({
      type: "MCQ",
      questionText: "",
      options: [],
      continueTo: "",
    });
  };

  return (
    <div className='container'>
      <div className='form'>
        <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-4'>
          <h5>Question</h5>
          <div className='form-floating mt-3'>
            <textarea
              className='form-control'
              placeholder='Enter your Question'
              name='questionText'
              value={question.questionText}
              onChange={handleQuestionChange}
              style={{ height: "100px" }}
            ></textarea>
            <label>Enter your Question</label>
          </div>
          <div className='mt-4'>
            <h5>Options</h5>
            <button
              type='button'
              className='btn btn-info text-white mb-3'
              onClick={addOption}
            >
              Add Option
            </button>
            {question.options.map((option, index) => (
              <div
                key={option.optionId}
                className='d-flex gap-2 align-items-center mb-2'
              >
                <input
                  type='text'
                  className='form-control'
                  value={option.optionText}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => removeOption(index)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleSave}
          >
            Save Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
