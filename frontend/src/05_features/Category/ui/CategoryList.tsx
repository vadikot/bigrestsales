import React, {FC, useEffect, useState} from 'react';
import {ICategoryModel} from "../model/CategoryModel";
import axios from "axios";


interface ICategoryListProps {
    menuId: string;
}

const CategoryList: FC<ICategoryListProps> = ({menuId}) => {
    const [categories, setCategories] = useState<ICategoryModel[]>([]);

    useEffect(() => {
        axios.get<ICategoryModel[]>('api/category/all', {
            params: {
                menuId,
            }
        })
            .then(response => setCategories(response.data))
            .catch(e => console.log(e.message));

    }, [menuId]);

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