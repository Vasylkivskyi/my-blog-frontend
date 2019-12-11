import React from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import PostList from "./containers/postsList/PostList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <PostList />
    </div>
  );
};

export default App;
