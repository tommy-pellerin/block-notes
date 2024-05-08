import React from 'react';
import './index.css'
class MarkdownInput extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { // Initialize state properties before they are set
      id:0,
      textInput: "",
      titleInput:"",
      blocNote:{},
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.noteText !== prevProps.noteText || this.props.noteTitle !== prevProps.noteTitle) {
      this.setState({ 
        
        textInput: this.props.noteText,
        titleInput: this.props.noteTitle,
      });
    }
  }

  saveInLocalStorage(){
    const notes = JSON.stringify(this.state.blocNote)
    localStorage.setItem(this.state.id, notes); // Use id as the key
    // localStorage.setItem(this.state.blocNote.title, notes);
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
    this.setState(prevState => ({ id: prevState.id + 1 }), () => { // Increment id by 1
      if (this.state.textInput === "" || this.state.titleInput === ""){
        alert("Text can't be null")
      } else {
        console.log("in MarkdowInput");
        console.log(this.state.titleInput);
        console.log(this.state.textInput);
        this.setState({blocNote: {id:(this.state.id),title:this.state.titleInput,text:this.state.textInput}}, () => { //setState is asynchronous, which means it doesn't immediately update the state but schedules an update. To fix this, you can pass a callback function to setState which will be executed after the state update is committed.
          this.saveInLocalStorage();
        })      
      }
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
        
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default MarkdownInput;