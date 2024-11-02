import {Router, Request, Response} from "express";
import {dishService} from "../services/dishService";
import {isMongoIdValid} from "../global";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const {categoryId} = req.query;

        if (!isMongoIdValid(categoryId)) {
            res.status(400).json({message: 'Invalid or missing "categoryId"'});
            return;
        }

        const allDishesByCategoryId = await dishService.getAll(categoryId);
        res.json(allDishesByCategoryId);
    } catch (e) {
        res.status(500).json({message: 'Error getting dishes by categoryId', error: e})
    }
});

router.post('/add', async (req: Request, res: Response) => {
    try {
        const {categoryId} = req.query;

        if (!isMongoIdValid(categoryId)) {
            res.status(400).json({message: 'Invalid or missing "menuId"'});
            return;
        }

        const dish = {...req.body};

        if (!dish.name || !dish.ingredients) {
            res.status(400).json({message: 'Missing name or ingredients'});
            return;
        }

        const newCategory = await dishService.addDishToCategory(dish, categoryId);

        res.json(newCategory);
    } catch (e) {
        res.status(500).json({message: 'Error add new category', e})
    }
})
// router.post('/add-multiple',(req: Request, res: Response)=>{})

export {router as dishesRouter}