import React, {useState} from 'react';
import {addMenu} from "../api/menuApi";
import '../menu.scss';

const MenuAddForm = () => {
    const [menuInput, setMenuInput] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleAddMenuFormClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (menuInput.length === 0) {
            setError('Menu name field cannot be empty, please fill the form');
            return;
        }

        addMenu(menuInput)
            .then(response => {
                console.log(response);
                setSuccessMessage('Menu successfully added')
                setError(null);
                setMenuInput('');
            })
            .catch(error => {
                setError('Error adding new categories to DB: ' + error.message)
                setSuccessMessage(null);
            })
    };

    return (
        <form className={'menuAddForm'}>
            <div className={'menuAddForm-wrap'}>
                <label htmlFor="menuName">Enter menu name:</label>
                <input
                    type="text"
                    id="menuName"
                    name="menuName"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMenuInput(e.target.value)}
                    value={menuInput}
                    placeholder={'Name'}
                />
                <button className={'menuAddForm-btn'} onClick={handleAddMenuFormClick} type={"button"}>Add Menu</button>
            </div>
            <p className={'error'}>{error}</p>
            <p className={'success'}>{successMessage}</p>
        </form>
    );
};

export default MenuAddForm;