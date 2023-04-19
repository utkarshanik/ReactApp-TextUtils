import React from "react"

export default function About(props) {

//    const[mystyle ,setColor]=useState({
//       color: 'black',
//       backgroundColor:'white',
    
//     })

//     const[btnn, btnstate]=useState("Enable Dark Mode")

//    let stylee=()=>
//    {
//         if(mystyle.color==="white")
//         {
//             setColor({
//                 color:'black',
//                 backgroundColor:'white',
//                  })
    
//             btnstate("Enable dark mode")
//         }
//         else
//         {
//             setColor({
//                 color: 'white',
//                 backgroundColor:'black'
//             })
            
//             btnstate("Enable light mode")
//         }
    
//     }

  return (
    
    <div className="container"   style={{backgroundColor:props.mode==='dark' ? '#343a40':'#ced4da'
    ,color:props.mode==='dark' ?'white':'black',border:props.mode==='dark' ?'1px solid #343a40 ':'1px solid #ced4da',marginTop:'50px',blockSize:400}}>
    <h1 className={`'my-2' text-${props.mode==='light' ? 'dark':'light' } `} >About Us</h1>
    <div className="accordion"  id="accordionExample"  >
        <div className="accordion-item" style={{border:'1px solid black'}} >
            <h2 className="accordion-header" >
            <button className="accordion-button" style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{border:'1px solid black'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}}    type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"    >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"   style={{border:'1px solid black'}} >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" style={{backgroundColor:props.mode==='dark' ? '#5e4b43':'#ced4da'
  ,color:props.mode==='dark' ?'white':'black'}} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"    >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
                    {/* <div className='container my-3'>
                    <button className="btn btn-primary " onClick={stylee}  >{btnn}</button>
                    </div>    */}
            </div>
        )
        }
