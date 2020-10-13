import React from 'react';
import DragDrop from './components/DragDrop';

function App() {

  const data = [
    {title: "Grupo 1", items: ["1", "2", "3"]},
    {title: "Grupo 2", items: ["4", "5"]}
  ]

  return (
    <div className="App">
        <DragDrop data={data} />
    </div>
  );
}

export default App;
