import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextEditor from "./TextEditor/TextEditor";

function App() {
  return (
    <div>
      <li>
        <a href='/text-editor'>Text Editor</a>
      </li>
      <Router>
        <Routes>
          <Route path='/text-editor' element={<TextEditor />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
