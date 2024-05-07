import React from 'react';
import './index.css'
class MarkdownInput extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { // Initialize state properties before they are set
      textInput:"",
      titleInput:"",
      blocNote:{},
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  saveInLocalStorage(){
    const notes = JSON.stringify(this.state.blocNote)
    localStorage.setItem(this.state.blocNote.title, notes);
    // const notesInLocal = localStorage.getItem('blocNote');
    const notesInLocal = JSON.parse(localStorage.getItem('blocNote'))
    console.log(notesInLocal);
  }
  handleTitleChange(event){
    this.setState({titleInput: event.target.value}, () => {
      //passing inputs to App
      const {setNoteTitle} = this.props // Destructure at the same time
      if (setNoteTitle) { // Check if the functions exist before calling them
          setNoteTitle(this.state.titleInput)// Pass the title as a string
      }
    })    
  }

  handleTextareaChange(event){
    this.setState({textInput: event.target.value}, () => {
      //passing inputs to App
      const {setNoteText} = this.props // Destructure at the same time
      if (setNoteText) { // Check if the functions exist before calling them
          setNoteText(this.state.textInput)// Pass the text as a string
      }
    });    
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.textInput === ""){
      alert("Text can't be null")
    } else {
      console.log("in MarkdowInput");
      console.log(this.state.titleInput);
      console.log(this.state.textInput);
      this.setState({blocNote: {title:this.state.titleInput,text:this.state.textInput}}, () => { //setState is asynchronous, which means it doesn't immediately update the state but schedules an update. To fix this, you can pass a callback function to setState which will be executed after the state update is committed.
      
      this.saveInLocalStorage();
      })

      
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='titleInput'>
          <label>    
            <input type="text" placeholder="Your title here" value={this.state.titleInput} minLength="1" onChange={this.handleTitleChange} />
          </label>
        </div>        
        <div className='textInput'>
          <label>
            <textarea placeholder="Your text here" rows="10" value={this.state.textInput} minLength="1" onChange={this.handleTextareaChange} />
          </label>
        </div>
        
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default MarkdownInput;