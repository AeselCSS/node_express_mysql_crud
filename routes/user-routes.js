import express from "express";
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/user-controller.js";
const userRoutes = express.Router();

// GET /users
userRoutes.get('/users', getAllUsers);
userRoutes.get('/users/:id', getUserById);
userRoutes.post('/users', createUser);
userRoutes.put('/users/:id', updateUser);
userRoutes.delete('/users/:id', deleteUser);

export {
    userRoutes
}