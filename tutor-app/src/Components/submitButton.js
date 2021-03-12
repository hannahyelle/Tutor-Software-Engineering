//March 12th - Hannah 
import React from 'react';

class submitButton extends React.Component {
  render(){
    return (
        <div className="submitButton">
        <button 
            className = 'btn'
            disabled = {this.props.disabled}
            onClick ={() => this.props.onCLick()}
        >
            {this.props.text}
        </button>
        </div>
    );
}
}

export default submitButton;