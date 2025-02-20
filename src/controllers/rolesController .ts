import { RolesRepository } from "@repositories/rolesRepositories";
import { RolesService } from "@services/rolesService";
import { IRolesRepository, IRolesService, Roles } from "types/RolesTypes";
import { Request, Response } from "express";


const rolesRepository: IRolesRepository = new RolesRepository();
const rolesService: IRolesService = new RolesService(rolesRepository);

export const findRoles = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.findRoles();
        if (roles.length === 0) return res.status(400).json({ message: "No se encontraron roles." });
        res.json(roles);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json(error);
    }
};

export const findRolesById = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.findRolesById(req.params.id);
        if (!roles) return res.status(404).json({ message: "No se encontro el rol." });
        res.json(roles);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
}

export const createRoles = async (req: Request, res: Response) => {
    try {
        const newRoles: Roles = req.body;
        const result = await rolesService.createRoles(newRoles);
        if (!result) return res.status(404).json({ message: "No se pudo crear el rol." });
        res.json(result);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};

export const updateRoles = async (req: Request, res: Response) => {
    try {
        const result = await rolesService.updateRoles(req.params.id, req.body);
        if (!result) return res.status(404).json({ message: "No se pudo editar el rol." });
        res.status(200).json(result);
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};

export const deleteRoles = async (req: Request, res: Response) => {
    try {
        const result = await rolesService.deleteRoles(req.params.id);
        if(!result) return res.status(404).json({message: "No se pudo eliminar el rol."});
        res.status(200).json({message: "Se elimino el rol."});
    } catch (error) {
        console.log("error :>> = ", error);
        res.status(500).json(error);
    }
};