import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <Navbar title ="Chanded Text" disabledText="Changed"/>
   {/* <Navbar/> */}
   <TextForm heading="Text Field"/>
  </>
  );
}
export default App;
