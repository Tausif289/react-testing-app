import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { TextEncoder, TextDecoder } from "util";

// ✅ Fix for MSW in Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// MSW server lifecycle
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());