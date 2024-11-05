import React, {useEffect} from 'react';
import {ICategoryModel} from "../model/CategoryModel";

interface ICategoryListProps {
    categories: ICategoryModel[];
    onCategorySelect: (category: ICategoryModel) => void;
}

const CategorySelect: React.FC<ICategoryListProps> = ({categories, onCategorySelect}) => {
    const defaultValue = categories.length > 0 ? categories[0]._id : "";

    useEffect(() => {
        if (categories.length > 0) {
            onCategorySelect(categories[0]); //return initial category from select (first in array)
        }
    }, []);

    return (
        <div>
            <label htmlFor={'categories'}>Choose a category:</label>

            <select
                defaultValue={defaultValue}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selectedCategory = categories.find(category => category._id === e.target.value);
                    if (selectedCategory) {
                        onCategorySelect(selectedCategory);
                    }
                }}
                name={'categories'} id={'categories'}>
                {
                    categories.map(category => (
                            <option
                                key={category._id}
                                value={category._id}
                            >{category.name}</option>
                        )
                    )
                }
            </select>
        </div>
    );
};

export default CategorySelect;