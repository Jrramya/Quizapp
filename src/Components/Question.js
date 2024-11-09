import React from 'react';

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <h2>{question.questionText}</h2>
            {question.options.map((option) => (
                <div key={option}>
                    <label>
                        <input
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                        />
                        {option}
                    </label>
                </div>
            ))}
            <button type="submit">Next</button>
        </form>
    );
};

export default Question; // Ensure this is a default export