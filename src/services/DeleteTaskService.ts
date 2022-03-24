import { prismaClient } from "../prisma";

class DeleteTaskService {
  async execute(id: string) {
    const deleteTask = await prismaClient.task.delete({
      where: {
        id,
      },
    });

    return deleteTask;
  }
}

export { DeleteTaskService };
