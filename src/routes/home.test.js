import "core-js/stable";
import "regenerator-runtime/runtime";
import request from "supertest";
import app from "../app";

describe("Test the home path", () => {
	test("It should response the GET method", async () => {
		const res = await request(app).get("/");
		expect(res.text).toBe("Welcome to Open Data Stage!");
	});
});
