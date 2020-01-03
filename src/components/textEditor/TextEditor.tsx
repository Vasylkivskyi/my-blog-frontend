/* eslint-disable default-case */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo, useCallback } from 'react';
import {
  createEditor, Transforms, Editor, Text,
} from 'slate';
import { Slate, Editable, withReact } from 'slate-react';


// Define our own custom set of helpers.
const CustomEditor = {
  isBoldMarkActive(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'code',
    });

    return !!match;
  },

  isLinkMarkActive(editor: any) {
    const [match] = Editor.nodes(editor, { match: (n) => n.type === 'link' });
    return !!match;
  },

  toogleLinkMark(editor: any) {
    const isActive = CustomEditor.isLinkMarkActive(editor);
    // eslint-disable-next-line no-alert
    const result = window.prompt('Please enter url', 'example.com');
    Transforms.setNodes(
      editor,
      { link: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },


  toggleBoldMark(editor: any) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleCodeBlock(editor: any) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'code' },
      { match: (n) => Editor.isBlock(editor, n) },
    );
  },
};

const Leaf = (props: any) => (
  <span
    {...props.attributes}
    style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
  >
    {props.children}
  </span>
);


const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const CodeElement = (props: any) => (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );

  const LinkElement = (props: any) => (
    <a {...props.attributes} href={props.url}>
      {props.children}
    </a>
  );

  const DefaultElement = (props: any) => <p {...props.attributes}>{props.children}</p>;

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      case 'link':
        return <LinkElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    // eslint-disable-next-line no-shadow
    <Slate editor={editor} value={value} onChange={(value: any) => setValue(value)}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case '`': {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }

            case 'b': {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
            case 'l': {
              event.preventDefault();
              CustomEditor.toogleLinkMark(editor);
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

export default TextEditor;
