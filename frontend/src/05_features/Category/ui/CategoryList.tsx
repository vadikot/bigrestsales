import React from 'react';
import {ICategoryModel} from "../model/CategoryModel";

interface ICategoryListProps {
    categories: ICategoryModel[];
}

const CategoryList: React.FC<ICategoryListProps> = ({categories}) => {

    return (
        <div>
            <h2>Categories:</h2>
            {
                categories.length > 0
                    ? <ul>
                        {
                            categories.map(category => (
                                <li key={category._id}>{category.name}</li>
                            ))
                        }
                    </ul>
                    : <p>There are no categories in this menu</p>
            }

        </div>
    );
};

export default CategoryList;