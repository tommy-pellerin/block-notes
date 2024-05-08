import React from 'react';
import './index.css'
import { v4 as uuidv4 } from 'uuid';
class MarkdownInput extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { // Initialize state properties before they are set
      id:uuidv4(),
      textInput: "",
      titleInput:"",
      blocNote:{},
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
      // console.log("Selected bloc note pass to markdown:");
      // console.log(this.props.selectedBlocNote);
      const { selectedBlocNote } = this.props
    if (selectedBlocNote && prevProps.selectedBlocNote && selectedBlocNote.id !== prevProps.selectedBlocNote.id) {
      this.setState({ 
        id: selectedBlocNote.id,
        titleInput: selectedBlocNote.title,
        textInput: selectedBlocNote.text,
      });
    }
  }

  saveInLocalStorage(){
    const notes = JSON.stringify(this.state.blocNote)
    localStorage.setItem(this.state.id, notes); // Use id as the key
    // localStorage.setItem(this.state.blocNote.title, notes);
    // Dispatch a custom event
    window.dispatchEvent(new Event('localStorageUpdated'));
  }

  handleSubmit() {
    // event.preventDefault();    
    // if (this.state.textInput === "" || this.state.titleInput === ""){
    //   alert("Text can't be null")
    // } else {
      // console.log("in MarkdowInput");
      // console.log(this.state.titleInput);
      // console.log(this.state.textInput);
      this.setState({blocNote: {id:this.state.id, title:this.state.titleInput, text:this.state.textInput}}, () => { //setState is asynchronous, which means it doesn't immediately update the state but schedules an update. To fix this, you can pass a callback function to setState which will be executed after the state update is committed.
        this.saveInLocalStorage();
      })      
    // }
  }

  handleTitleChange(event){
    this.setState({titleInput: event.target.value}, () => {
      //passing inputs to App
      const {setNoteTitle} = this.props // Destructure at the same time
      if (setNoteTitle) { // Check if the functions exist before calling them
        setNoteTitle(this.state.titleInput)// Pass the title as a string
      }
      this.handleSubmit()
    })    
  }

  handleTextareaChange(event){
    this.setState({textInput: event.target.value}, () => {
      //passing inputs to App
      const {setNoteText} = this.props // Destructure at the same time
      if (setNoteText) { // Check if the functions exist before calling them
          setNoteText(this.state.textInput)// Pass the text as a string
      }
      this.handleSubmit()
    });
  }

  

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='titleInput'>
          <label>    
            <input type="text" value={this.state.titleInput} minLength="2" onChange={this.handleTitleChange} />
          </label>
        </div>        
        <div className='textInput'>
          <label>
            <textarea rows="10" value={this.state.textInput} minLength="2" onChange={this.handleTextareaChange} />
          </label>
        </div>
        
        {/* <button type="submit">Save</button> */}
      </form>
    );
  }
}

export default MarkdownInput;