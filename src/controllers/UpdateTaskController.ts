import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const service = new UpdateTaskService();

    try {
      const result = await service.execute({
        id,
        title,
        content,
        author,
      });

      return res.json({ msg: "Atualizado com sucesso!" });
    } catch (err) {
      return res.json({
        error:
          "Verifique se o id foi passado, ou se as informações estão corretas.",
      });
    }
  }
}

export { UpdateTaskController };
