import Info from "./Info";
import About from "./About";
import Interests from "./Interests"
import Footer from "./Footer";

// The purpose of the App function is to combine all the components into one function
function App(){
    return(
        <div className="businessCard">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App;