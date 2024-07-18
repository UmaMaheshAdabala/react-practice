import React from "react";
import ReactDOM from"react-dom/client";
// Nested tags
//------------Clean React Code

// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"Hi im h1 tag"),React.createElement("h2",{}," I'm a h2 tag")]));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//-----------JSX Code this is HTML like syntax but not HTML
//-----------Babel is an transpiler that converts JSX to React

// const heading= <h1 id="heading">JSX Code</h1>
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX Element
const Ele=(
    <h2> This is from Element</h2>

)
const Title= ()=> (
    <h2>Title</h2>
)

// Functional Component

const Funcomp= () =>

    ( <div><h2>This is a Functional Component</h2>
        {/* // To Keep Element in Component */}
        <Title/>
        <div>{Ele}</div></div>
    );
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Funcomp/>);