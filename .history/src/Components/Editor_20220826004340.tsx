import { $getRoot, $getSelection } from 'lexical';
import { useEffect } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const theme = {

}

const onChange = (editorState: any) =>{
 editorState.read(() =>{
   const root = $getRoot();
   const selection = $getSelection();

   console.log(root, selection)
 })
}

const MyCustomAutoFocusPlugin =() => {
    const [editor] = useLexicalComposerContext();
    useEffect(() =>{
        editor.focus();
    },[editor])

    return null;
}

const onError = (error: any) =>{
    console.log(error);
}



const Editor = () => {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
    }

  return (
    <LexicalComposer initialConfig={initialConfig}>
   <RichTextPlugin
    contentEditable={<ContentEditable />}
    placeholder={<div>Enter some text...</div>}
    />
    <OnChangePlugin onChange={onChange} />
    <HistoryPlugin />
    <MyCustomAutoFocusPlugin />
  </LexicalComposer>
  )
}

export default Editor