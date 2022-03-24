import { GetAllTaskService } from "./GetAllTaskService";

describe("Get all tasks", () => {
  it("Should be able to get all tasks", async () => {
    const createTaskService = new GetAllTaskService();
    const id: string = "test-id";
    const task = await createTaskService.execute(id);

    const tasksData = {
      id: "id-test",
      title: "test-title",
      created_at: "created-date-test",
      updated_at: "updated-date-test",
      content: "test-content",
      author: "test-author",
    };
  });
});
