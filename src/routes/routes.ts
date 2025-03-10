import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesController ";
import { createUser, deleteUsers, findUsers, findUsersById, updateUsers } from "@controllers/userController";
import { RolesRepository } from "@repositories/rolesRepositories";
import { UserRepository } from "@repositories/userRepositories";
import { RolesService } from "@services/rolesService";
import { UserService } from "@services/userService";
import { Router } from "express";
import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";
import { IUserRepository, IUserService, User} from "types/UsersTypes";

const router = Router();
 
export default () => {
   
    //Rutas para los usuarios
    router.get("/users", findUsers);
    router.get("/users/:id", findUsersById);
    router.post("/users", createUser);
    router.put("/users/:id", updateUsers);
    router.delete("/users/:id", deleteUsers);

    // //Rutas para los roles
    router.get("/roles", findRoles);
    router.get("/roles/:id", findRolesById);
    router.post("/roles", createRoles);
    router.put("/roles/:id", updateRoles);
    router.delete("/roles/:id", deleteRoles);

    return router;  
};