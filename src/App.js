import Navigation from "./components/navigation"
import Header from "./components/header"
import Partnership from "./components/partnership"
import Recommend from "./components/recommend"
import About from "./components/about"
import Packages from "./components/package"
import Article from "./components/article"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Partnership />
      <Recommend />
      <About />
      <Packages />
      <Article />
      <Footer />
    </div>
  );
}

export default App;