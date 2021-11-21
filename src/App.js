import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
      <div className='container text-center pt-4'>
          <h1>React-Redux-Example</h1>
          <div className='row m-5'>
              <div className='col'>
                  <PostForm />
              </div>
          </div>

          <div className='row'>
              <div className='col'>
                  <h4 className='m-4'>Sync. Posts</h4>
                  <Posts posts={[1,2,3]} />
              </div>
              <div className='col'>
                  <h4 className='m-4'>Fetched Posts</h4>
                  <FetchedPosts posts={[]} />
              </div>
          </div>
      </div>
  );
}

export default App;
