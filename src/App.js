import React from 'react';
import './App.css';
import "./index.css"// Import your CSS file

import TodoListContainer from './TodoListContainer'; // Import your main component


function App() {
    return (
        <Routes>
            <Route  path="/" element = {<TodoListContainer />}/>
            </Routes> 
    );
}

export default App;

