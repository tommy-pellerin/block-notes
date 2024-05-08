import React from 'react';
import Showdown from 'showdown';

class NoteDisplay extends React.Component {
  converter = new Showdown.Converter();

  createMarkup(content) {
    return {__html: content};
  }

  render() {
    const { noteTitle, noteText } = this.props;
    let content = this.converter.makeHtml(noteText)

    return (
      <div>
        <h1>{noteTitle || "Select a bloc-note to see"}</h1>
        <div dangerouslySetInnerHTML={this.createMarkup(content)} />
      </div>      
    );
  }
}

export default NoteDisplay;

// //another method => However, it wraps the entire content in a <p> tag. event if you write ## that normaly give you a <h2>
// import React from 'react';
// import ReactMarkdown from 'react-markdown';

// class NoteDisplay extends React.Component {
//   render() {
//     const { noteTitle, noteText } = this.props;

//     return (
//       <div>
//         <h2>{noteTitle}</h2>
//         <ReactMarkdown>{noteText}</ReactMarkdown>
//       </div>      
//     );
//   }
// }

// export default NoteDisplay;