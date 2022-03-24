import { CreateTaskService } from "./CreateTaskService";

type TaskDataProps = {
  title: string;
  content: string;
  author: string;
};

describe("Create task", () => {
  it("should be able to create a new task", async () => {
    const createTaskService = new CreateTaskService();

    const taskData: TaskDataProps = {
      title: "Title",
      content: "Content",
      author: "name",
    };

    const task = await createTaskService.execute(taskData);

    expect(task).toHaveProperty("id");
    expect(task.author).toBe("name");
  });
});
