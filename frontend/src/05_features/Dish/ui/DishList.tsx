import React, {useEffect, useState} from 'react';
import {IDishModel} from "../model/DishModel";
import {fetchDishes} from "../api/dishApi";

interface IDishListProps {
    categoryId: string | null | undefined;
    // dishes: IDishModel[];
}

const DishList: React.FC<IDishListProps> = ({categoryId}) => {
    const [dishes, setDishes] = useState<IDishModel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (categoryId) {
            fetchDishes(categoryId)
                .then(data => setDishes(data))
                .catch(e => setError(e.message));
        }
    }, [categoryId]);

    if (categoryId === undefined) return <p>You need choose category first</p>
    if (error) return <p>Error load dishes: {error}</p>

    return (
        <div>
            {
                dishes.length > 0
                    ? (<ul>
                        {
                            dishes.map(dish => (
                                <li key={dish._id}>{dish.name} ({dish.ingredients})</li>
                            ))
                        }
                    </ul>)
                    : <p>There are no dishes in this category</p>
            }
        </div>
    );
};

export default DishList;