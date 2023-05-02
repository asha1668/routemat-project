
import { Header,Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import './App.css';


function App() {
  // const user = true;

  return (
    <div className="App">
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;