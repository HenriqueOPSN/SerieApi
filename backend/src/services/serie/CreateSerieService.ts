import prismaCliente from "../../prisma";

interface CreateSerieProps {
    title: string;
    synopsis: string;
    genre: string;
    releaseYear: number;
    seasons: number;
    userId: string;
}

class CreateSerieService {

    async execute({ title, synopsis, genre, releaseYear, seasons, userId }: CreateSerieProps) {

        try {

            const serie = await prismaCliente.serie.create({

                data: {
                    title: title,
                    synopsis: synopsis,
                    genre: genre,
                    releaseYear: releaseYear,
                    seasons: seasons,
                    userId: userId
                },

                select: {
                    id: true,
                    title: true,
                    synopsis: true,
                    genre: true,
                    releaseYear: true,
                    seasons: true,
                    userId: true,
                    createdAt: true
                }
            })

            return serie;

        } catch (erro) {
            throw new Error("Falha ao criar Série")
        }
    }
}

export { CreateSerieService };

