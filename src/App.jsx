import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

export default App;
