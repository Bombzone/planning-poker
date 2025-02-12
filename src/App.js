import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Planning from './Planning'
import NoSuchPage from './NoSuchPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Home />} />
                    <Route path='planning' element={<Planning />} />

                    <Route path='*' element={<NoSuchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
