import React from "react";
import './index.css';

class SideBar extends React.Component {
  state = { blocNotes:[]}

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const blocNotes = Object.values(localStorage).map(JSON.parse);
    this.setState({ blocNotes }, () => {
      console.log(this.state.blocNotes);
    });
  }

  sendClickedBlocNote(blocNote){
    // console.log(blocNote);
    const {setSelectedBlocNote} = this.props
    if (setSelectedBlocNote) {
      setSelectedBlocNote(blocNote)
    }
  }
  
  render () {
    const { blocNotes } = this.state;

    return (
      <div className="sideBarBox">
        <button>Add a note</button>
        <div className="blocNotesBox">
          {blocNotes.map(blocNote => (
            <div key={blocNote.title} className="blocNote" onClick={() => this.sendClickedBlocNote(blocNote)}>
              <h1>{blocNote.title}</h1>
              <p>{blocNote.text}</p>
            </div>
          ))}
        </div>        
      </div>
      
    )
  }
  
}

export default SideBar