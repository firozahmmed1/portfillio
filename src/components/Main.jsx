import Navbar from "./Navbar";
import background from '../assets/background/backgroungimg.jpeg'

const Main = () => {
    const mystyle ={
        backgroundImage:`url(${background})`,
    }
   
    return (
        <div style={mystyle}>
           <Navbar></Navbar>
        </div>
    );
};

export default Main;