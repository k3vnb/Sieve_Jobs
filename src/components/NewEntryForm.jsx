import React from 'react';

function NewEntryForm(){
  return (
    <div>
      <h1>Form</h1>
      <form>
        <input
          type='text'
          id='anchor'
          placeholder='Anchor'/>
        <textarea
          id='goal'
          placeholder='Describe Your Goal'/>
        <textarea
          id='obstacle'
          placeholder='Describe your Obstacle.'/>
        <textarea
          id='decision'
          placeholder='Describe what Decision you made to overcome your obstacle.'/>
        <textarea
          id='result'
          placeholder='Describe the Result.'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewEntryForm;
