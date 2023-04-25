//import logo from './logo.svg';
//import  './cseg.css';
import About from './components/About';
import  { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  HashRouter ,
  Routes,
  Route
 } from "react-router-dom";

function App() {

  const [mode, setM] = useState('light');
  const [check,toggle]= useState("Enable Dark mode");
  const [mes,setAlert] = useState(null);

  // const classremove=()=>
  // {
  //     document.body.classList.remove('bg-primary')
  //     document.body.classList.remove('bg-danger')
  //     document.body.classList.remove('bg-success')
  // }
  
  const tog=(cls)=>
  { 
    // classremove();
    // document.body.classList.add('bg-'+cls);   coloor pallet 
        if(mode==='light')
        {
            setM('dark');
            document.body.style.backgroundColor="#343a40";
            toggle('Enable Light Mode')
            showAlert('Dark mode Enabled','success');
            document.title="TextUtils - DarkMode"
  
        }
        else
        {
              setM('light');
              document.body.style.backgroundColor="#ced4da";
              toggle('Enable Dark Mode')
              showAlert('Light mode Enabled','success');
              document.title="TextUtils - LightMode"
  
        }
  }

  const showAlert=(message,type)=>
  {
      setAlert(
        {
           mesg:message,
           type:type
        }
      )
     setTimeout(() => {
       setAlert(null);
     }, 1000);
  }       


  return(
   <>

<HashRouter basename='/'> 
 <Navbar title="TextUtils" a="About Us" mode={mode} tog={tog} mo={check}/>
 <Alert msg={mes}/>
 {/* <TextForm heading="Enter the text to analyse" mode={mode}  showAlert={showAlert}/>   */}
 <div className="container my-3">
                                          {/* Go this way or directlly uninstall react-router-dom and install @5.2.0 */}
 
  <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>             
          <Route exact path="/home"  element={<TextForm heading="Enter the text to analyse" mode={mode}  showAlert={showAlert}/>}/>
  </Routes> 
   

</div>

 </HashRouter>


 </> 

);
  
}
export default App;


// <>   </> using jsx fragment we can add/return another element like h1 
// class and function based component
// this file jsx havinn  html with sytax chnge like classname
//should retur one thing
//<div className='cseg'> i am blue </div> 
//babbel is javascript compiler 
//props (properties)  used to pass the data between component iin unidirection flow p=>c


//Previous code
        //   let name="Utkarsha";
        //return (
        //  <>
          
        //  <div className="blank">"this is good"</div>
        //    <nav><li>Home</li>       
        //     <li>about</li>
        //     <li>setteing</li>   
        //    </nav>
        //    <div className="container">
        //     <p>
        //     <h1> Hello  {name} </h1>     
          
        //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet distinctio dicta pariatur et illo voluptatem incidunt saepe quia enim voluptatum minima eligendi eaque mollitia alias
        //       ,ipsam temporibus nobis consequatur tempora rerum veniam. Hic, ut!
        //     </p>
        //    </div>
          
        //</>
        //);

