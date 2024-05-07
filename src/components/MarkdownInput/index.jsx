import React from 'react';

class MarkdownInput extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { // Initialize state properties before they are set
      textInput:"",
      titleInput:""
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event){
    this.setState({titleInput: event.target.value});
  }

  handleTextareaChange(event){
    this.setState({textInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.textInput === ""){
      alert("Text can't be null")
    } else {
      console.log("in MarkdowInput");
      console.log(this.state.titleInput);
      console.log(this.state.textInput);
      const {setNoteTitle, setNoteText} = this.props // Destructure at the same time
        if (setNoteTitle && setNoteText) { // Check if the functions exist before calling them
            setNoteTitle(this.state.titleInput)// Pass the title as a string
            setNoteText(this.state.textInput)// Pass the text as a string
        }
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Title:
            <input type="text" value={this.state.titleInput} onChange={this.handleTitleChange} />
          </label>
        </div>        
        <div>
          <label>
            Notes:
            <textarea value={this.state.textInput} onChange={this.handleTextareaChange} />
          </label>
        </div>
        
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default MarkdownInput;