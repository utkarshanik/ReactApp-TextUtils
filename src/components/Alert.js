import React from 'react'

function Alert(props) {

  const capatalize=(word)=>{
      const lower= word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
 }


  return (
<div style={{height:'30px'}}>  
  {props.msg &&<div className={`alert alert-${props.msg.type}  alert-dismissible fade show`} style={{height:'45px'}} role="alert">
        <strong>{capatalize(props.msg.type)} : {props.msg.mesg}</strong>     
</div>}
</div>
)
}

export default Alert

// props.msg && when the original state is null we have to use this syntax like in app.js usestate is null

