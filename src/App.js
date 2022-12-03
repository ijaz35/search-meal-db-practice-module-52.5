import './App.css';
import Restaurent from './components/Resturant/Restaurent';
import { Route, Routes } from 'react-router';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="App">
      <h2 className='text-4xl font-bold text-gray-600 pt-10'>Welcome To My Restaurant</h2>

      <Routes>
        <Route path='/' element={<Restaurent></Restaurent>}></Route>
        <Route path='/meal/:mealID' element={<MealDetails></MealDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
