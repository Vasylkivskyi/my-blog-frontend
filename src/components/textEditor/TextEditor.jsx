/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  FaBold, FaItalic, FaLink, FaUnderline, FaListUl, FaListOl, FaHeading, FaQuoteLeft,
} from 'react-icons/fa';
import './textEditor.scss';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { MdSave } from 'react-icons/md';
import { stateToHTML } from 'draft-js-export-html';
import addLinkPlugin from './addLinkPlugin';


const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  const plugins = [addLinkPlugin];

  const onChange = (someState) => setEditorState(someState);

  const handleKeyCommand = (command) => {
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
  const _onBulletPoints = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };
  const _onOrderedList = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  const _onHeading = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'header-three'));
  };

  const onSubmit = () => {
    const content = editorState.getCurrentContent();
    const html = stateToHTML(content); // converting editor state to HTML
    console.log(html);
    /* To convert HTML editor state use https://www.npmjs.com/package/draft-js-import-html
    in componentDidMount convert html to editor state using something like this:
      const newEditorState = EditorState.push(
        editorState,
        contentWithEntity,
        entityKey,
      );
    */
  };

  const _onAddLink = () => {
    const selection = editorState.getSelection();
    // eslint-disable-next-line no-alert
    const link = window.prompt('Paste the link -');
    if (!link) {
      onChange(RichUtils.toggleLink(editorState, selection, null));
      return 'handled';
    }
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
      url: link,
    });
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      entityKey,
    );
    onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
    return 'handled';
  };

  const _onAddQuote = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'blockquote'));
    return 'handled';
  };


  return (
    <div className="text-editor-container">
      <div className="control-panel">
        <div className="edit-text-icon" onClick={_onBoldClick}><FaBold className="icon" /></div>
        <div className="edit-text-icon" onClick={_onItalicClick}><FaItalic className="icon" /></div>
        <div className="edit-text-icon" onClick={_onUnderlineClick}><FaUnderline className="icon" /></div>
        <div className="edit-text-icon" onClick={_onAddLink}><FaLink className="icon" /></div>
        <div className="edit-text-icon" onClick={_onAddQuote}><FaQuoteLeft className="icon" /></div>
        <div className="edit-text-icon" onClick={_onBulletPoints}><FaListUl className="icon" /></div>
        <div className="edit-text-icon" onClick={_onOrderedList}><FaListOl className="icon" /></div>
        <div className="edit-text-icon" onClick={_onHeading}><FaHeading className="icon" /></div>
      </div>
      <div className="post-text">
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          plugins={plugins}
          placeholder="New article's text..."
        />
      </div>
      <div className="btn save" onClick={onSubmit}>
Save
        <MdSave className="icon" />
      </div>
    </div>
  );
};

export default TextEditor;
