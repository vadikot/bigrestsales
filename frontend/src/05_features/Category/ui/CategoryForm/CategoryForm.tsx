import React, {useState} from 'react';
import axios from "axios";

interface ICategoryFormProps {
    menuId: string;
}

const CategoryForm: React.FC<ICategoryFormProps> = ({menuId}) => {
    const [categoryInput, setCategoryInput] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);


    const cleanAndSplitCategoryNames = (categoryString: string): string[] => categoryString.replace(/\s+/g, '').split(',');
    const handleAddCategoriesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (categoryInput.length === 0) {
            setError('Category field cannot be empty, please fill the form');
            return;
        }

        const splitCategoryNames = cleanAndSplitCategoryNames(categoryInput);

        axios.post('api/category/add-multiple',
            {
                namesArr: splitCategoryNames, // backend expects array of strings
                menuId
            })
            .then(response => {
                setSuccessMessage('Categories successfully added')
                setError(null);
                setCategoryInput('');
            })
            .catch(error => {
                setError('Error adding new categories to DB: ' + error.message)
                setSuccessMessage(null);
            })
    }

    return (
        <form>
            <h3>Add new categories:</h3>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoryInput(e.target.value)}
                value={categoryInput}
                placeholder={'Categories list (Salad, soup, desert...)'}
                style={{width: '350px', fontSize: '18px'}}
            />
            <p style={{color: 'red'}}>{error}</p>
            <p style={{color: 'green'}}>{successMessage}</p>
            <button onClick={handleAddCategoriesClick} type={"button"}>Add categories</button>
        </form>
    );
};

export default CategoryForm;