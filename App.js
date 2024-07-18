import React from "react";
import ReactDOM from"react-dom/client";
// Nested tags

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Hi im h1 tag"),React.createElement("h2",{}," I'm a h2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);