import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';


const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  return (
    // eslint-disable-next-line no-shadow
    <Slate editor={editor} value={value} onChange={(value: any) => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default TextEditor;
