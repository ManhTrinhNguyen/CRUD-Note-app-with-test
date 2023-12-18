const app = require("./app");
const supertest = require("supertest");

test("GET /note", async () => {
  const response = await supertest(app)
    .get("/note")
    .expect("Content-Type", /json/)
    .expect(200);
});

test("POST /note", async () => {
  const response = await supertest(app)
    .post("/note")
    .send({
      title: "Some Title",
      description: "Some Description",
    })
    .set("Accept", "application/json")
    .expect(200);
});

test("DELETE /note", async () => {
  const response = await supertest(app).delete("/note/3").expect("Deleted!");
});
