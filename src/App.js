
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div>
    {/* Navigation bar for the whole application*/}
      <TopBar />
      {/* Main content on the landing page of the website */}
      <Home />
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
