import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ServiceList from './components/ServiceList';
import ListItem from './components/ListItem';

function App() {
  return (
    <Router>
      <div className="container" style={{margin: 50, width: 550}}>
        <Routes>
          <Route path="/:id/details" element={<ListItem/>} />
          <Route path="/" element={<ServiceList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
