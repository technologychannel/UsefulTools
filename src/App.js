import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import BodyWrapper from './features/BodyWrapper/view';
import QRGenerator from './features/QrGenerator/view';
import PrivacyPolicy from './features/PrivacyPolicy/view';
import PrivacyPolicyPage from './features/PrivacyPolicy/view/PrivacyPolicyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BodyWrapper/>}>
        <Route index element={<Navigate to="/qrgenerator"/>} />
        <Route path="qrgenerator" element={<QRGenerator/>} />
        <Route path="privacypolicygenerator" element={<PrivacyPolicy/>} />
        <Route path="privacypolicy" element={<PrivacyPolicyPage/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
  );
}

export default App;
