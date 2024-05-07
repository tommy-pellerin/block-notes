import React from 'react';
import './App.css'
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteText: ""
    };

    this.setNoteTitle = this.setNoteTitle.bind(this);
    this.setNoteText = this.setNoteText.bind(this);
  }

  setNoteTitle(title) {
    this.setState({ noteTitle: title }, () => {
      console.log(`App notetitle: ${this.state.noteTitle}`); // Log the updated state
    });
  }

  setNoteText(text) {
    this.setState({ noteText: text }, () => {
      console.log(`App notetext: ${this.state.noteText}`); // Log the updated state
    });
  }
  

  render() {
    const { noteTitle, noteText } = this.state; //declare const here in order to use the const instead of this.state.noteTitle each time

    return (
      <>
      <h1>Hello !</h1>
      <div className='container'>
        <section className='preview'>

        </section>
        <div className='rightColumn'>
          <section className='noteDisplay'>
            <NoteDisplay noteTitle={noteTitle} noteText={noteText}/>
          </section>
          <section className='markdownInput'>
            <MarkdownInput setNoteTitle={this.setNoteTitle} setNoteText={this.setNoteText}/>
          </section>
        </div>
        
      </div>
      
      </>
    );
  }
}

export default App;
