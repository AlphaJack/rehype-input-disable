import { visit } from "unist-util-visit";

export default setInputStatus;
export { setInputStatus };

/**
 * rehype plugin to disable or enable specific input elements.
 *
 * @param {Object} [options]
 *   @property {string} [inputType=""] - input type to target, or any type if not specified
 *   @property {boolean} [disabled=true] - whether to disable or enable the input
 * @return {Function} transformer function
 */
function setInputStatus(options = {}) {
  const { inputType = "", disabled = true } = options;

  return function transformer(tree) {
    visit(tree, "element", (node) => {
      // Check if the node is an input element and matches the given inputType (or any type if not specified)
      if (
        node.tagName === "input" &&
        (inputType === "" || node.properties.type === inputType)
      ) {
        if (disabled) {
          node.properties.disabled = true;
        } else {
          delete node.properties.disabled;
        }
      }
    });
  };
}