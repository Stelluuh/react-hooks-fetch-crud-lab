import React, { useState, useEffect } from "react";


function QuestionList() {
  const [questions, setQuestions] = useState([])
  console.log('questions: ', questions)


  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then(data => setQuestions(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
