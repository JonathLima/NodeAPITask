import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { GetAllTaskController } from "./controllers/GetAllTaskController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";

const router = Router();

router.post("/task", new CreateTaskController().handle);
router.get("/tasks", new GetAllTaskController().handle);
router.put("/task/:id", new UpdateTaskController().handle);
router.delete("/task/:id", new DeleteTaskController().handle);

export { router };
