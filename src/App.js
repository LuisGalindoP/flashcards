import { useState } from "react";

const questions = [
    {
        id: 1111,
        question: "What language is React based on",
        answer: "JavaScript",
    },
    {
        id: 2222,
        question: "What are the building blocks of React apps",
        answer: "Components",
    },
    {
        id: 3333,
        question:
            "What is the name of the syntax we use to describe a UI in React",
        answer: "JSX",
    },
    {
        id: 4444,
        question: "How to pass data from parent to child components",
        answer: "Using props",
    },
    {
        id: 5555,
        question: "How to give components memory",
        answer: "Using the useState hook",
    },
    {
        id: 6666,
        question:
            "What do we call an input element that is completely synchronised with state",
        answer: "managed state",
    },
];

function App() {
    return <FlashCards />;
}

function FlashCards() {
    const [selectedId, setSelectedId] = useState(null);

    function handleSelection(id) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "10px",
                margin: "10px",
            }}
        >
            {questions.map((q, index) => (
                <div
                    key={index}
                    style={q.id === selectedId ? styleCardSelected : styleCard}
                    onClick={() => handleSelection(q.id)}
                >
                    <p>{q.id === selectedId ? q.answer : q.question}</p>
                </div>
            ))}
        </div>
    );
}

//Styles

const styleCard = {
    backgroundColor: "#f9f9f9",
    padding: "24px",
    // border: "solid",
    // borderColor: "#f0f0f0",
    borderRadius: "10px",
    width: "300px",
    fontSize: "24px",
    fontWeight: "bold",
};

const styleCardSelected = {
    backgroundColor: "#ff6600",
    padding: "24px",
    color: "white",
    borderRadius: "10px",
    width: "300px",
    fontSize: "24px",
    fontWeight: "bold",
};
export default App;
