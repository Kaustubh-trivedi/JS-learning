const root = ReactDOM.createRoot(document.querySelector("#root"));
const h2 = React.createElement('h2', { className: "hello-class" }, "attribute is here");
root.render(h2)