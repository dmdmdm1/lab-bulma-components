import React from 'react';


const CoolButton = (props) => {
  const { isSmall, isDanger, isSuccess, className, buttonsValue } = props;
  let classes = "button"

  if (isSmall) {
    classes += " is-small"
  }
  if (isDanger) {
    classes += " is-danger"
  }

  if (isSuccess) {
    classes += " is-success"
  }
  console.log(className)

  if (typeof className !== 'undefined') {
    classes += " " + className
  }


  return (
    <input type="submit" value={buttonsValue} className={classes} />
  )
}


export default CoolButton; 