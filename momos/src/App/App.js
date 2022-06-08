import React from 'react';
import { Meme } from '../Meme/Meme';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { MemeGenerate } from '../MemeGenerated/MemeGenerate';

//import styles from './styles.module.css';

export const App = () => {
  return (
    <div>
      <h1>Meme Generate!</h1>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Meme/>}/>
      <Route path="/generated" element={<MemeGenerate/>}/>
      </Routes>
    </BrowserRouter>
    </div>
      );
}
