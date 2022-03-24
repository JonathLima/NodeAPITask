import { Request, Response } from "express";
import { GetAllTaskService } from "../services/GetAllTaskService";

class GetAllTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const service = new GetAllTaskService();
    const result = await service.execute(id);

    return res.json(result);
  }
}

export { GetAllTaskController };
