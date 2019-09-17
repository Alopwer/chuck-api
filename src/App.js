import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import FactInfo from './components/FactInfo';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState();
  const [fact, setFact] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getCategory();
  }, [])

  const getCategory = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = await response.json();
    setCategories(data);
  }

  const getFact = async (header) => {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${header}`);
      const data = await response.json();
      setFact(data.value);
      return data.value
  }

  const showFact = (e) => {
    getFact(e.target.innerText.toLowerCase())
    setName(e.target.innerText.toLowerCase());
  }

  const reloadFact = (e) => {
    getFact(name)
  }

  return (
    <div className='container'>
      <p id='info'>Choose the category you want the fact about</p>
      {categories ? <Categories categories={categories} showFact={showFact}/> : 'Waiting for result'}
      {fact ? <FactInfo fact={fact} reloadFact={reloadFact}/> : ''}
    </div>
  )
}

export default App;