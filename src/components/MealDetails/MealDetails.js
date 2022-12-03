import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealID } = useParams();
    const [singleMeal, setSingleMeal] = useState({});
    const { idMeal, strMeal, strInstructions, strMealThumb, strArea, strCategory } = singleMeal;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
            .then(res => res.json())
            .then(data => setSingleMeal(data.meals[0]))
    }, [mealID])
    return (
        <div className="border-2 rounded-3xl border-gray-300 p-3 bg-gray-300 w-1/2 mx-auto mt-11">
            <img className="w-96 pt-8 mx-auto rounded-xl" src={strMealThumb} alt="" />
            <div className='my-8'>
                <h3 className='text-xl font-bold'>{strMeal}</h3>
                <h4 className='text-lg my-4'>{strArea}</h4>
                <p>{strInstructions?.slice(0, 200)}</p>
            </div>


        </div>
    );
};

export default MealDetails;