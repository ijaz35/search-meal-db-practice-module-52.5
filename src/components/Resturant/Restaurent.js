import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handlerAddToSearch = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <div className='px-24 '>
            <input className='w-80 border-2 border-gray-400 my-12 p-1 bg-gray-100 rounded-lg' onChange={handlerAddToSearch} type="text" name="" id="" />
            <div className='grid grid-cols-3 gap-11'>
                {
                    meals.map(meal => <Meal key={meal.idMeal}
                        meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurent;