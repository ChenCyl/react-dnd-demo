import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import Example from './single-target'
// import Example from './lifecycle'
// import Example from './multiple-targets'
// import Example from './drag-around-naive'
// import Example from "./nest-drag-source";
// import Example from './nest-drop-target'
import Example from './sortable'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
				<Example />
			</DndProvider>
    </div>
  );
}

export default App;
