import mongoose from "mongoose";

export function isMongoIdValid(id: any): id is string {
    return id && typeof id === 'string' && mongoose.Types.ObjectId.isValid(id);
}