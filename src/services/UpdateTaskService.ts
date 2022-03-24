import { prismaClient } from "../prisma";

type UpdateTaskProps = {
  id: string;
  title: string;
  content: string;
  author: string;
};

class UpdateTaskService {
  async execute({ id, title, content, author }: UpdateTaskProps) {
    const updateTask = await prismaClient.task.updateMany({
      where: { id },
      data: {
        title,
        content,
        author,
      },
    });

    return updateTask;
  }
}

export { UpdateTaskService };
