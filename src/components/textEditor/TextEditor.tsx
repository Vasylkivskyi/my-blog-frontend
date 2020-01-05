/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  FaBold, FaItalic, FaLink, FaUnderline,
} from 'react-icons/fa';
import './textEditor.scss';
import { Editor, EditorState, RichUtils } from 'draft-js';

const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  const onChange = (someState: any) => setEditorState(someState);

  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(
      editorState,
      command,
    );
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };


  const _onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  return (
    <div className="text-editor-container">
      <div className="control-panel">
        <div className="edit-text-icon" onClick={_onBoldClick}><FaBold className="icon" /></div>
        <div className="edit-text-icon" onClick={_onItalicClick}><FaItalic className="icon" /></div>
        <div className="edit-text-icon" onClick={_onUnderlineClick}><FaUnderline className="icon" /></div>
        <div className="edit-text-icon" onClick={() => { console.log('hello'); }}><FaLink className="icon" /></div>
      </div>
      <div className="post-text">
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default TextEditor;
