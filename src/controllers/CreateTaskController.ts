import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { title, content, author } = req.body;
    const service = new CreateTaskService();

    try {
      const result = await service.execute({ title, content, author });
      return res.json(result);
    } catch (err) {
      return res.json({ error: "Verifique se as informações estão corretas." });
    }
  }
}

export { CreateTaskController };
