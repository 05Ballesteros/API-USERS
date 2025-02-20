import mongoose, { Schema } from "mongoose";
import { Roles } from "types/RolesTypes";

const RolSchema: Schema = new Schema<Roles>(
    {
        name: {
            type: String,
            required: true
        }
    },{
        timestamps: true,
        versionKey: false
    }
);

export const RolesModel = mongoose.model<Roles>("Roles", RolSchema);