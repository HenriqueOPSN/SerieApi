import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

import prismaCliente from "../../prisma/index";

interface AuthUserServiceProps {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password } : AuthUserServiceProps) {

        const user = await prismaCliente.user.findFirst({
            where: {
                email: email,
            },
        });

        if(!user) {
            throw new Error("Email/Senha são obrigatórios!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Senha Incorretos!");
        }

        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET as string,
            {
                subject: user.id,
                expiresIn: "30d",
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token,
        };

    }
}

export { AuthUserService }