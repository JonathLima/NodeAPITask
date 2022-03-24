import { Request, Response } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteTaskService();

    try {
      await service.execute(id);
      return res.json({ msg: "Task deletada com sucesso!" });
    } catch (err) {
      return res.json({ error: "Task não existe ou não foi encontrada!" });
    }
  }
}

export { DeleteTaskController };
