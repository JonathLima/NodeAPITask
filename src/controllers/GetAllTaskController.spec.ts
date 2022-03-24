import request from "supertest";
import { serverHttp } from "../app";

describe("Get all Tasks", () => {
  it("Should be able to get all tasks", async () => {
    const response = await request(serverHttp).get("/tasks").send({
      id: "id-test",
      title: "test-title",
      created_at: "created-date-test",
      updated_at: "updated-date-test",
      content: "test-content",
      author: "test-author",
    });
  });
});
