
import prismaCliente from "../../prisma";

class ListSerieService {

    async execute() {

        try {

            const series = await prismaCliente.serie.findMany({

                select: {
                    id: true,
                    title: true,
                    synopsis: true,
                    genre: true,
                    releaseYear: true,
                    seasons: true,
                    userId: true,
                    createdAt: true,
                },

                orderBy: {
                    createdAt: "desc",
                },
            });

            return series;

        } catch (erro) {

            throw new Error("Falha ao buscar séries");
        }
    }
}

export { ListSerieService };
