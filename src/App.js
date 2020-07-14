/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer"
import PostPage from "./components/PostsContainer/PostsPage"
import dummydata from "./dummy-data"

const App = () => {
const [data] = useState(dummydata)
const [isSearch, setSearch] = useState('')

const handleChange = searchValue => {
  setSearch(searchValue)
}
console.log(data)
  return (
    <div className="App">
      
      {/* Add imported components here to render them */}
      <SearchBar handleChange={handleChange}/>
      <PostPage postData = {data} searchValue={isSearch}/>
    </div>
  );
};

export default App;
