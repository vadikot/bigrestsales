import React, {useState} from 'react';
import {addDishToCategory} from "../api/dishApi";

interface IDishFormProps {
    categoryId: string;
}

interface IDishFormType {
    name: string;
    ingredients: string;
}

const dishInitialValue = {
    name: '',
    ingredients: '',
}

const DishForm: React.FC<IDishFormProps> = ({categoryId}) => {
    const [dish, setDish] = useState<IDishFormType>(dishInitialValue);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleAddDishClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (dish.name.length === 0 && dish.ingredients.length === 0) {
            setError('Name and ingredients fields cannot be empty, please fill all fields!');
            setSuccessMessage(null);
            return;
        }

        addDishToCategory(categoryId, dish)
            .then(response => {
                setSuccessMessage('Dish successfully added');
                setError(null);
                setDish(dishInitialValue);
            })
            .catch(error => {
                setError('Error adding new categories to DB: ' + error.message)
            })
    }

    return (
        <form>
            <h3>Add new dish:</h3>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDish(prevState => ({
                    ...prevState,
                    name: e.target.value,
                }))}
                value={dish.name}
                placeholder={'Name'}
                style={{width: '350px', fontSize: '18px'}}
            />
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDish(prevState => ({
                    ...prevState,
                    ingredients: e.target.value,
                }))}
                value={dish.ingredients}
                placeholder={'Ingredients'}
                style={{width: '350px', fontSize: '18px'}}
            />
            <p style={{color: 'red'}}>{error}</p>
            <p style={{color: 'green'}}>{successMessage}</p>
            <button onClick={handleAddDishClick} type={"button"}>Add dish</button>
        </form>
    );
};

export default DishForm;