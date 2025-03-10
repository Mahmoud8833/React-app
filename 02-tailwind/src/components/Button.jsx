import React from 'react';

function Button(props) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
