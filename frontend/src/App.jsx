import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Question from "./components/Question";
import Section from "./components/Section";
import Preview from "./components/Preview";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/questions")
      .then(response => setQuestions(response.data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const addQuestion = (newQuestion) => {
    axios.post("http://localhost:3000/questions", newQuestion)
      .then(response => setQuestions([...questions, response.data]))
      .catch(error => console.error("Error adding question:", error));
  };

  const updateQuestion = (updatedQuestion) => {
    axios.put(`http://localhost:3000/questions/${updatedQuestion.id}`, updatedQuestion)
      .then(response => {
        setQuestions(questions.map(q => q.id === updatedQuestion.id ? response.data : q));
      })
      .catch(error => console.error("Error updating question:", error));
  };

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/questions/${id}`);
      setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };
  

  return (
    <Router>
      <div className='display-6 text-center my-4 fw-semibold'>Untitled Form</div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Question addQuestion={addQuestion} updateQuestion={updateQuestion} />} />
        <Route path='question' element={<Question addQuestion={addQuestion} updateQuestion={updateQuestion} />} />
        <Route path='section' element={<Section />} />
        <Route path='preview' element={<Preview questions={questions} deleteQuestion={deleteQuestion} />} />
      </Routes>
    </Router>
  );
};
export default App;
