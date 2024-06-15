import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        return word[0].toUpperCase() + word.slice(1);
    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>
  )
}

export default Alert