// test/rehypeThumbhash.test.js

import { describe, it, expect } from "vitest";
import { rehype } from "rehype";
import rehypeInputDisable from "./index.js";

describe("rehypeInputDisable Plugin", () => {
  it("should disable input element", async () => {
    const expectedOutput =
      '<html><head></head><body><input type="text" id="name" value="a" disabled></body></html>';
    const file = await rehype()
      .use(rehypeInputDisable, {})
      .process('<input type="text" id="name" value="a"/>');

    const output = String(file).trim();
    expect(output).toBe(expectedOutput);
  });

  it("should enable a disabled checkbox", async () => {
    const expectedOutput =
      '<html><head></head><body><input type="checkbox" id="genre" value="pop"></body></html>';
    const file = await rehype()
      .use(rehypeInputDisable, { inputType: "checkbox", disabled: false })
      .process('<input type="checkbox" id="genre" value="pop" disabled/>');

    const output = String(file).trim();
    expect(output).toBe(expectedOutput);
  });

  it("should ignore non-input elements", async () => {
    const expectedOutput =
      '<html><head></head><body><img src="example.jpg"></body></html>';
    const file = await rehype()
      .use(rehypeInputDisable, {})
      .process('<img src="example.jpg">');

    const output = String(file).trim();
    expect(output).toBe(expectedOutput);
  });
});
