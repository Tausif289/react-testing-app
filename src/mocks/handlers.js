import { rest } from "msw";

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: "Tausif" },
        { id: 2, name: "Nehal" },
      ])
    );
  }),
];