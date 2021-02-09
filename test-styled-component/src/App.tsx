import React from 'react';
import Button from './component/button';

const App = () => {

  const test = () => {
    console.log(1);
  }
  
  return (
    <Button title="done" onClick={test} />
  );
};

export default App;
