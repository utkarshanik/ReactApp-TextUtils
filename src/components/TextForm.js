import React,{useState} from 'react'

export default function TextForm(props) {

    const handlUpclick=()=>{
   //   console.log("upper class clicked"+text);      
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase","success")
      
        //  setText("You have clicked on handle"); 
      // setText is useed to change the text In "useSate" and assign in "text"
      }

      const handlLoclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase","success")

      }

    const handle =(event) =>{
       // console.log("text box changed");         
         setText(event.target.value);   // adds to the text area 
      }

      const handlclrclick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared","success")

        // if(document.getElementById.mybox.value==null)
        // {
        //   props.showAlert("nothing to remove","danger")
        // }
       }
     
       const handlespac=()=>
       {
          //  let newText=text.split(/[   ]+/);
          //  setText(newText.join(" "));
           navigator.clipboard.writeText(text);
           props.showAlert("Space Has Removed","success")

          //  if(newText)
          //  {
          //   props.showAlert("Nothing to Remove","danger")
         
          //  }
          //  else
          //  {
          //   props.showAlert("Space Has Removed","success")
          //  }
     
        }

       const handlecopy=()=>
       {
            let text= document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Coppied","success")
       }
       
      const[text,setText]=useState('');

    //  let[count,setCount]=useState('');
    // //  let[count1,setCount1]=useState(0);
      
    //  let countChar=0;

    //   let handlvo =()=>
    //   {
    //         for(count=0;count<=text.length;count++)
    //         {
    //            if(text.charAt(count).match(/[aeiouAEIOU]/))
    //            {
    //                 countChar ++;
    //                 setCount=(countChar);
    //                   //return setCount();
    //               }
    //         }
    //   }
  
        // let handlvo=()=>
        // {
        //   let newText=text.split(" ");
        //   let a= newText.reverse();
        //   setText(a);
        // }
        
  




  return (
   
   <>
    <div className={`container text-${props.mode==='light'?'Dark':'white'} `}>
    <h1>{props.heading} </h1>
    
<div className="mb-3">
  <textarea className="form-control  "  value={text} onChange={handle} 
  style={{backgroundColor:props.mode==='dark' ? '#a97f6d':'white'
  ,color:props.mode==='dark' ?'white':'black',border:'1px solid black'}}   id="mybox" rows="8" >
  </textarea>
  </div>  
   
<button className="btn btn-bs-btn-border-color:#212529  my-2 mx-2" disabled={text.length===0  } style={{backgroundColor:props.mode==='dark' ? '#807f85':'#bb7c66'
  ,color:props.mode==='dark' ?'white':'white'}}  onClick={handlUpclick} >Convert to Uppercase</button>

<button className="btn btn-bs-btn-border-color:#212529 my-2 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark' ? '#807f85':'#bb7c66'
  ,color:props.mode==='dark' ?'white':'white'}} onClick={handlLoclick} >Convert to Lowercase</button>

<button className="btn btn-bs-btn-border-color:#212529 my-2 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark' ? '#807f85':'#bb7c66'
  ,color:props.mode==='dark' ?'white':'white'}} onClick={handlclrclick} >Clear Text</button>

<button className="btn btn-bs-btn-border-color:#212529 my-2 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark' ? '#807f85':'#bb7c66'
  ,color:props.mode==='dark' ?'white':'white'}} onClick={handlespac} >Remove Space</button>

<button className="btn btn-bs-btn-border-color:#212529 my-2 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark' ? '#807f85':'#bb7c66'
  ,color:props.mode==='dark' ?'white':'white'}} onClick={handlecopy} >Copy Text</button>


 {/* <button className="btn btn-primary my-2 mx-2" onClick={handlvo} > Text</button>  */}
{/*   
  here 'mx' and 'my' used to spacing from x(mx) and y(my) axix */}

</div>
  <div className={`container my-3 text-${props.mode==='light' ? 'dark':'white'} `} >
      <h2>Your text summary</h2>
      <p>
           {text.trim().split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words {text.trim().length} characters         
          
      </p>
      <p> { 0.008 * text.trim().split(/\s+/).filter((ele)=>{return ele.length!==0}).length}  Minutes to read</p>
        
      
      <h2>Preview</h2>
      <p>
         {text.length>0 ? text:'Enter data to preview'}
      </p>
      
  </div>
</>
  );
}

// usestate is hook , hook let us use react without class component
// usestate is like placeholder 
// settext changes  the state of component without refreshing
// and also whatever we write in "setText" will be assigned to "Text"
// my-3 gives spacing {sd}