import {Router, Request, Response} from "express";
import {categoryService} from "../services/categoryService";
import mongoose from "mongoose";


const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const {menuId} = req.query;

        if (!menuId || typeof menuId !== 'string' || !mongoose.Types.ObjectId.isValid(menuId)) {
            res.status(400).json({message: 'Invalid or missing "menuId"'});
            return;
        }

        const allCategoriesByMenuId = await categoryService.getAllCategoryByMenuId(menuId);

        res.json(allCategoriesByMenuId);

    } catch (e) {
        res.status(500).json({message: 'Error getting menus', e})
    }
});

router.post('/add', async (req: Request, res: Response) => {
    try {
        const {name, menuId} = req.body;

        if (!menuId || typeof menuId !== 'string' || !mongoose.Types.ObjectId.isValid(menuId)) {
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

        if (!menuId || typeof menuId !== 'string' || !mongoose.Types.ObjectId.isValid(menuId)) {
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