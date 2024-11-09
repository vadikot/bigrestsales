import React, {useState} from 'react';
import {addMultipleDishesToMenu} from "../api/dishApi";

interface IDishFormProps {
    categoryId: string;
}

const DishFormMultiple: React.FC<IDishFormProps> = ({categoryId}) => {
    const [textarea, setTextarea] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleAddDishClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (textarea.length === 0) {
            setError('Field cannot be empty, please fill it!');
            setSuccessMessage(null);
            return;
        }

        addMultipleDishesToMenu(categoryId, textarea)
            .then(response => {
                setSuccessMessage('Multiple-dishes successfully added');
                setError(null);
                setTextarea('');
            })
            .catch(error => {
                setError('Error adding multiple-dishes to DB: ' + error.message)
            })
    }

    return (
        <form>
            <h3>Add multiple dishes:</h3>
            <textarea
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value)}
                value={textarea}
                placeholder={'TATAR WOLOWY (Smazone kapary, chrupki ze sioniny, cebula marynowana, krem z zortka, ciabatta),' +
                    'PASTRAMI Z CZERWONEGO LOSOSIA (Losos, marynata riverside, sos muhammara, granat, pomarance, orzechy),'}
                style={{width: '100%', height: '300px'}}
            />
            <p style={{color: 'red'}}>{error}</p>
            <p style={{color: 'green'}}>{successMessage}</p>
            <button onClick={handleAddDishClick} type={"button"}>Add multiple dishes</button>
        </form>
    );
};

export default DishFormMultiple;