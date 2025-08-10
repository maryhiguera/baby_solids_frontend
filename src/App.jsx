import axios from "axios";
import { Header } from "./Header";
import { FoodsPage } from "./FoodsPage";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <FoodsPage />
      <Footer />
    </div>
  )
}

export default App;