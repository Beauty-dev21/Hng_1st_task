import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <img src='Icon1.png' alt=''className='share'></img>
        <img src='Icon2.png' alt=''className='share first'></img>
        <div id='app1'>
          <div id='profile_img'>
            <img src='propic.jpg' alt=''></img>
          </div>
          <div id='twitter'>
            <p>REACTive_Beauty</p>
          </div>
          {/* <div id='slack'>Beauty</div>  */}
          <section>
            <button> <a href='https://twitter.com/REACTive_Beauty' id='twitter'>Twitter Link</a></button>
            <button> <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a></button>
            <button> <a href='http://books.zuri.team/' id='books'>Zuri Books</a></button>
            <button> <a href='https://books.zuri.team/' id='book__python'>Python Books</a></button>
            <button> <a href='https://background.zuri.team/' id='pitch'>Background check for coders</a></button>
            <button> <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a></button>
          </section>

          <div id='socials'>
            <a href=''><img src='slack.png' alt=''></img></a>
            <a href='https://github.com/Beauty-dev21'><img src='Icon.png' alt=''></img></a>
          </div>
        </div>
        <hr></hr>
        <div id='foot'>
          <img src='Zuri.Internship_Logo.png' alt=''></img>
          <p>HNG Internship 9 Frontend Task</p>
          <img src='I4G.png' alt=''></img>
        </div>

      </div>

    );
  }
}

export default App;
