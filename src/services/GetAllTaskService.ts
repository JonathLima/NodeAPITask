import { prismaClient } from "../prisma";

class GetAllTaskService {
  async execute(id: string) {
    const allTasks = await prismaClient.task.findMany({
      where: {
        id,
      },
    });

    return allTasks;
  }
}

export { GetAllTaskService };
