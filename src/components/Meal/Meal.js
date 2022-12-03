import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { meal } = props.meal;
    const { idMeal, strMeal, strInstructions, strMealThumb, strArea, strCategory } = props.meal;
    const navigate = useNavigate();
    return (
        <div className="border-2 rounded-3xl border-gray-300 p-3 bg-gray-300">
            <img className="h-90 rounded-lg" src={strMealThumb} alt="" />
            <div className='my-8'>
                <h3 className='text-xl font-bold'>{strMeal}</h3>
                <h4 className='text-lg my-4'>{strArea}</h4>
                <p>{strInstructions.slice(0, 200)}</p>
            </div>
            <Link className='bg-gray-600 px-7 py-3 mb-3 rounded-lg text-white mr-4' to={`/meal/${idMeal}`}>Go To Meal</Link>
            <button onClick={() => navigate(`/meal/${idMeal}`)} className='bg-gray-700 px-7 py-3 mb-3 rounded-lg text-white'>Show Details</button>
        </div>
    );
};

export default Meal;