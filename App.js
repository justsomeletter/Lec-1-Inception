const heading1 = React.createElement(
  "h1",
  {
    id: "head-1",
    style: {
      color: "pink",
    },
  },
  "Heading 1 !"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "head-2",
    style: {
      color: "orange",
    },
  },
  "Heading 2 !"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2] // passing the childrens as array of objects
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
