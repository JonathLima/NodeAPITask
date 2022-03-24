import { prismaClient } from "../prisma";

type TaskProps = {
  title: string;
  content: string;
  author: string;
};

class CreateTaskService {
  async execute({ title, content, author }: TaskProps) {
    const task = await prismaClient.task.create({
      data: {
        title,
        content,
        author,
      },
    });

    return task;
  }
}

export { CreateTaskService };
