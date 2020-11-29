import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import Example from './single-target'
// import Example from './lifecycle'
import Example from './multiple-targets'

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
