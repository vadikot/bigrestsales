import React, {useEffect, useState} from 'react';
import {ICategoryModel} from "../model/CategoryModel";
import {fetchCategories} from "../api/categoryApi";

interface ICategoryContainerProps {
    menuId: string;
    render: (categories: ICategoryModel[]) => React.ReactNode;
}

const CategoryContainer: React.FC<ICategoryContainerProps> = ({menuId, render}) => {
    const [categories, setCategories] = useState<ICategoryModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchCategories(menuId)
            .then(response => {
                setCategories(response)
            })
            .catch(e => setError(e.message))
            .then(() => setLoading(false));

    }, [menuId]);

    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>Error loading categories: {error}</p>;

    return (<>{render(categories)}</>);
};

export default CategoryContainer;