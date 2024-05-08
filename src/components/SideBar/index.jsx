import React from "react";
import './index.css';
import { v4 as uuidv4 } from 'uuid';

class SideBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      blocNotes: [],
      blocNote: {}
      // ...
    };
  
    // Bind the this context to the method
    this.createNewBlocNote = this.createNewBlocNote.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
    // Listen for the custom event
    window.addEventListener('localStorageUpdated', this.getLocalStorage);
  }
  componentWillUnmount() {
    // Remove the event listener when the component unmounts
    window.removeEventListener('localStorageUpdated', this.getLocalStorage);
  }

  getLocalStorage() {
    const blocNotes = Object.values(localStorage).map(JSON.parse);
    this.setState({ blocNotes }, () => {
      // console.log(this.state.blocNotes);
    });
  }

  sendClickedBlocNote(blocNote){
    // console.log(blocNote);
    const {setSelectedBlocNote} = this.props
    if (setSelectedBlocNote) {
      setSelectedBlocNote(blocNote)
    }
  }
  saveInLocalStorage(blocNote){
    const note = JSON.stringify(blocNote)
    localStorage.setItem(blocNote.id, note); // Use id as the key
  }
  
  createNewBlocNote() {
    const newBlocNote = {id: uuidv4(), title: "Default Title", text: "Default Text"};
    
    this.setState(prevState => ({
      blocNotes: [...prevState.blocNotes, newBlocNote],
      blocNote: newBlocNote
    }), () => {
      this.saveInLocalStorage(newBlocNote);
    });
  }
  
  render () {
    const { blocNotes } = this.state;

    return (
      <div className="sideBarBox">
        <button onClick={this.createNewBlocNote}>Add a note</button>
          {blocNotes.map(blocNote => {
            let words = blocNote.text.split(' ');
            let visibleText = words.slice(0, 15).join(' ');

            if (words.length > 15) {
              visibleText += '...';
            }

            return (
              <div key={blocNote.id} className="blocNote" onClick={() => this.sendClickedBlocNote(blocNote)}>
                <h1>{blocNote.title}</h1>
                <p>{visibleText}</p>
              </div>
            );
          })}     
      </div>
      
    )
  }
  
}

export default SideBar