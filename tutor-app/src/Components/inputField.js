//March 12th - Hannah 
import React from 'react';
//can be used for multople things (user name or password)
class InputField extends React.Component {
  render(){
  return (
    <div className="inputField">
      <input 
        className = 'input'
        type = {this.props.type}
        placeholder = {this.props.placeholder}
        value = {this.props.value}
        //call back to pop function
        onChange ={ (e) => this.props.onChange(e.target.value)}
        />
    </div>
  );
}
}

export default InputField;