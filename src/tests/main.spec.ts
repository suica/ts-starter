import { myClone } from "../main";

describe("myClone", () => {
  it("should clone deeply", () => {
    const obj = { a: { b: 1 } };
    const cloned = myClone(obj);
    obj.a.b = 2;
    expect(cloned).toEqual({ a: { b: 1 } });
  });
});
