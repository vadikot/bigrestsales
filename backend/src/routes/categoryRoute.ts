import {Router, Request, Response} from "express";
import {categoryService} from "../services/categoryService";
import {isMongoIdValid} from "../global";


const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const {menuId} = req.query;

        if (!isMongoIdValid(menuId)) {
            res.status(400).json({message: 'Invalid or missing "menuId"'});
            return;
        }

        const allCategoriesByMenuId = await categoryService.getAllCategoryByMenuId(menuId);
        res.json(allCategoriesByMenuId);
    } catch (e) {
        res.status(500).json({message: 'Error getting menus', error: e})
    }
});

router.post('/add', async (req: Request, res: Response) => {
    try {
        const {name, menuId} = req.body;

        if (!isMongoIdValid(menuId)) {
            res.status(400).json({message: 'Invalid or missing "menuId"'});
            return;
        }

        const newCategory = await categoryService.addCategoryToMenu(name, menuId);

        res.json(newCategory);
    } catch (e) {
        res.status(500).json({message: 'Error add new category', e})
    }
});

router.post('/add-multiple', async (req: Request, res: Response) => {
    try {
        const {namesArr, menuId} = req.body;

        if (!isMongoIdValid(menuId)) {
            res.status(400).json({message: 'Invalid or missing "menuId"'});
            return;
        }

        const newCategories = await categoryService.addMultipleCategories(namesArr, menuId);

        res.json(newCategories);
    } catch (e) {
        res.status(500).json({message: 'Error add new categories', e})
    }
});

export {router as categoryRouter};