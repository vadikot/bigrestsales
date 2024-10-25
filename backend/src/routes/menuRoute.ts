import {Router, Request, Response} from "express";
import menuService from "../services/menuService";
import MenuService from "../services/menuService";

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

export {router as menuRouter};