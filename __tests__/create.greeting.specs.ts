import { createGreeting } from "../src/create_greeting";

describe("should create a greeting for a user", () => {
  it("should return a greeting with the name", () => {
    const user = {
      name: "John",
    };
    expect(createGreeting(user)).toBe("Hello John");
  });

  it("should return a greeting with the name and surname", () => {
    const user = {
      name: "John",
      surname: "Doe",
    };
    expect(createGreeting(user)).toBe("Hello John Doe");
  });
});
