import './App.css';
import { Route, Routes } from 'react-router-dom';
import BodyWrapper from './features/BodyWrapper/view';
import QRGenerator from './features/QrGenerator/view';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BodyWrapper/>}>
        <Route index element={<QRGenerator/>} />
      </Route>
    </Routes>
  );
}

export default App;
