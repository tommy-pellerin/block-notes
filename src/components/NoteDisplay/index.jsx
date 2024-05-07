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
        <h2>{noteTitle}</h2>
        <div dangerouslySetInnerHTML={this.createMarkup(content)} />
      </div>      
    );
  }
}

export default NoteDisplay;