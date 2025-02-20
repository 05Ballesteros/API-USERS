import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import { Request, Response } from "express";


const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const findUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findUsers();
        if (users.length === 0) return res.status(400).json({ message: "No se encontraron usuarios." });
        res.json(users);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json(error);
    }
};

export const findUsersById = async (req: Request, res: Response) => {
    try {
        const user = await userService.findUsersById(req.params.id);
        if (!user) return res.status(404).json({ message: "No se encontro el usuario." });
        res.json(user);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser: User = req.body;
        const result = await userService.createUser(newUser);
        if (!result) return res.status(404).json({ message: "No se pudo crear el usuario." });
        res.json(result);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};

export const updateUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.updateUsers(req.params.id, req.body);
        if (!result) return res.status(404).json({ message: "No se pudo editar el usuario." });
        res.status(200).json(result);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};

export const deleteUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.deleteUsers(req.params.id);
        if(!result) return res.status(404).json({message: "No se pudo eliminar el usuario."});
        res.status(200).json({message: "Se elimino el usuario"});
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};