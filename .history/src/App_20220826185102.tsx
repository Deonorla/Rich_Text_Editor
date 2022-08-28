import { LexicalComposer } from '@lexical/react/LexicalComposer';
import {isDevPlayground} from './appSettings';
import {SettingsContext, useSettings} from './context/SettingsContext';
import {SharedAutocompleteContext} from './context/SharedAutocompleteContext';
import {SharedHistoryContext} from './context/SharedHistoryContext';
import Editor from './Editor';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import PasteLogPlugin from './plugins/PasteLogPlugin';
import TestRecorderPlugin from './plugins/TestRecorderPlugin';
import TypingPerfPlugin from './plugins/TypingPerfPlugin';
import Settings from './Settings';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';


function App() {
  const {
    settings: {isCollab, emptyEditor, measureTypingPerf},
  } = useSettings();

  const initialConfig = {
    editorState: isCollab
      ? null
      : emptyEditor
      ? undefined
      : "",
    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <SharedAutocompleteContext>
          <header>
         
          </header>
          <div className="editor-shell">
            <Editor />
          </div>
          {/* <Settings /> */}
          {isDevPlayground ? <PasteLogPlugin /> : null}
          {isDevPlayground ? <TestRecorderPlugin /> : null}
          {measureTypingPerf ? <TypingPerfPlugin /> : null}
        </SharedAutocompleteContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}

export default function PlaygroundApp() {
  return (
    <SettingsContext>
      <App />
    </SettingsContext>
  );
}
