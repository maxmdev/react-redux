import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import {Theme} from "./components/Theme";
import {useSelector} from "react-redux";
import {Autocomplete} from "./components/Autocomplete";

function App() {
    const isChangeTheme = useSelector(state => state.app.changeTheme);
    const toggleThemeClass = isChangeTheme ? 'bg-info' : '';

    return (
          <div className={'container text-center pt-4 ' + toggleThemeClass}>
              <h1>React-Redux-Example</h1>
              <div className='row m-5'>
                  <div className='col'>
                      <PostForm />
                  </div>
              </div>

              <div className='row'>
                  <div className='col'>
                      <h4 className='m-4'>Sync. Posts</h4>
                      <Posts />
                  </div>
                  <div className='col'>
                      <h4 className='m-4'>Fetched Posts</h4>
                      <FetchedPosts />
                  </div>
              </div>

              <div className='row'>
                  <div className='col text-center'>
                      <Theme />
                  </div>
              </div>

              <div className='row'>
                  <div className='col text-center'>
                      <Autocomplete />
                  </div>
              </div>
          </div>
    );
}

export default App;
