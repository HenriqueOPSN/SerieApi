
import { Request, Response } from "express";

import { ListSerieService } from "../../services/serie/ListSerieService";

class ListSerieController {

    async handle(req: Request, res: Response) {

        const listSerie = new ListSerieService();

        const series = await listSerie.execute();

        res.status(200).json(series);
    }
}

export { ListSerieController };
