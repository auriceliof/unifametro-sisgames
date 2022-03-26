import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Home from "pages/Home";
import Navbar from "components/Navbar";
import FootBar from "components/FootBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />        
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
      <FootBar />
    </BrowserRouter>
  );
}

export default App;
