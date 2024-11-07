import {Router, Request, Response} from "express";
import menuService from "../services/menuService";
import MenuService from "../services/menuService";
import {isMongoIdValid} from "../global";

const router = Router();

// get all menu
router.get('/all', async (req: Request, res: Response) => {
    try {
        const menus = await menuService.getMenus();
        res.json(menus);
    } catch (e) {
        res.status(500).json({message: 'Error getting menus', e})
    }
});

// add menu
router.post('/add', async (req: Request, res: Response) => {
    const {name, userId} = req.body;

    try {
        const menu = await MenuService.addMenu(name, userId);
        res.json(menu);
    } catch (e) {
        res.status(500).json({message: 'Error add new menu', e})
    }
});

//delete menu
router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        if (!isMongoIdValid(id)) {
            res.status(400).json({message: 'Invalid or missing "ID"'});
            return;
        }

        const menu = await MenuService.deleteMenu(id);

        if (!menu) {
            res.status(404).json({message: 'Menu not found'});
            return;
        }

        res.json({message: 'Menu successfully deleted', data: menu});
    } catch (e) {
        res.status(500).json({message: 'Error deleting menu', e})
    }
});

export {router as menuRouter};