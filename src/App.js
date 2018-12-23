import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood : 'sad',
      age  : 13,
    };
  }
  handleMoodClick(newMood) {
    this.setState({
     mood : newMood
    });
 
   }

   handleAgeClick(newAge) {
    this.setState({
     age : newAge
    });
 
   }

  renderMoods() {
    const moods = ['sad', 'happy', 'glad', 'angry', 'hungry'];
    return (
      <div>
        {moods.map((moodItem, idx) => {

          return (
            <a  key={idx} 
                href="/" 
                onClick={(ev) => { ev.preventDefault();this.handleMoodClick(moodItem); }}>
              {moodItem}
            </a>
          );
        })}

      </div>
    );
  }

  renderAge() {
    const age = [1,2,3,4,5,6,7,8,9,10];
    return (
      <div>
        {age.map((ageItem, idx) => {

          return (
            <a  key={idx} 
                href="/" 
                onClick={(ev) => { ev.preventDefault();this.handleAgeClick(ageItem); }}>
              {ageItem}
            </a>
          );
        })}

      </div>
    );
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            I am {this.state.age} and my mood is {this.state.mood}.
          </div>

          {this.renderAge()}
          {this.renderMoods()}

        </header>
      </div>
    );
  }
}

export default App;
