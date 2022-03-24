import request from "supertest";
import { serverHttp } from "../app";

describe("Create Task Controller", () => {
  it("Should be able to create a new task", async () => {
    const response = await request(serverHttp).post("/task").send({
      title: "test-title",
      content: "test-content",
      author: "test-author",
    });
  });
});
