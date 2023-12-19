const app = require("./app");
const supertest = require("supertest");

test("GET /note", async () => {
  const response = await supertest(app)
    .get("/note")
    .expect("Content-Type", /json/)
    .expect(200);
});

describe('POST /note', () => { 
  // Working case
  test("POST /note Hanle working case", async () => {
    const response = await supertest(app)
      .post("/note")
      .send({
        title: "Some Title",
        description: "Some Description",
      })
      .set("Accept", "application/json")
      .expect(200);
  });
  
  // Error case
  test("POST /note Handle Error case", async () => {
    const response = await supertest(app)
      .post("/note")
      .send({
        title: "Some Title",
      })
      .set("Accept", "application/json")
      .expect(400);
  });
})


test("DELETE /note", async () => {
  const response = await supertest(app).delete("/note/3").expect("Deleted!");
});


