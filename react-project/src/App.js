import React, { useState } from 'react';
import Search from './feature/SubComponent/Search'; 
import Input from './feature/SubComponent/Input';
import Text from './feature/SubComponent/Text'; 
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        size={"small"}
      />
      <Input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
        size={"small" }
      />
      <Text size={18}>test</Text>
    </div>
    //test
  );
}

export default App;
