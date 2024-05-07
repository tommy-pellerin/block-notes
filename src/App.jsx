import React from 'react';
import './App.css'
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import SideBar from './components/SideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteText: "",
      selectedBlocNote:{},
    };

    this.setNoteTitle = this.setNoteTitle.bind(this);
    this.setNoteText = this.setNoteText.bind(this);
    this.setSelectedBlocNote = this.setSelectedBlocNote.bind(this);
  }

  setNoteTitle(title) {
    this.setState({ noteTitle: title }, () => {
      // console.log(`App notetitle: ${this.state.noteTitle}`); // Log the updated state
    });
  }

  setNoteText(text) {
    this.setState({ noteText: text }, () => {
      // console.log(`App notetext: ${this.state.noteText}`); // Log the updated state
    });
  }

  setSelectedBlocNote(blocNote) {
    this.setState({ selectedBlocNote: blocNote}, () => {
      console.log(`App selected bloc note:`);
      console.log(this.state.selectedBlocNote);
      this.setNoteTitle(blocNote.title)
      this.setNoteText(blocNote.text)
    })
  }
  

  render() {
    const { noteTitle, noteText } = this.state; //declare const here in order to use the const instead of this.state.noteTitle each time

    return (
      <>
      <h1>Hello !</h1>
      <div className='container'>
        <section className='preview'>
          <SideBar setSelectedBlocNote={this.setSelectedBlocNote}/>
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
