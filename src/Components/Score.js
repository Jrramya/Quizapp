import React from 'react';

const Score = ({ score, totalQuestions, onRestartQuiz }) => {
    return (
        <div>
            <h2>Your Score: {score} out of {totalQuestions}</h2>
            <button onClick={onRestartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default Score; // Ensure this is a default export