
import { Request, Response } from "express";

import { CreateSerieService } from "../../services/serie/CreateSerieService";

class CreateSerieController {

    async handle(req: Request, res: Response) {
        
        const { title, synopsis, genre, releaseYear, seasons, userId } = req.body;

        const createSerie = new CreateSerieService();

        const serie = await createSerie.execute({
            title,
            synopsis,
            genre,
            releaseYear,
            seasons,
            userId
        });

        return res.status(201).json(serie);

    }
}

export { CreateSerieController };
