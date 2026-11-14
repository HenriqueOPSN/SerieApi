
import { Request, Response, Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

import { AuthUserController } from "./controllers/user/AuthUserController";

import { validateSchema } from "./middlewares/validateSchema";

import { createUserSchema, authUserSchema } from "./schemas/userSchema";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAdmin } from "./middlewares/isAdmin";

import { createSerieSchema } from "./schemas/serieSchema";

import { CreateSerieController } from "./controllers/serie/CreateSerieController";
import { ListSerieController } from "./controllers/serie/ListSerieController";

const router = Router();

router.post("/users",
    validateSchema(createUserSchema),

    new CreateUserController().handle
);

router.post("/session",
    validateSchema(authUserSchema),

    new AuthUserController().handle
);

router.get("/me",
    isAuthenticated,

    new DetailUserController().handle
);

router.post(
    "/serie",
    isAuthenticated,
    isAdmin,
    validateSchema(createSerieSchema),
    new CreateSerieController().handle
);

router.get(
    "/serie",
    isAuthenticated,
    new ListSerieController().handle
);

export { router };
