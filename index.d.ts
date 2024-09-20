import { Plugin } from "unified";
import { Root } from "hast";

export interface Options {
  /**
   * The type of input to modify.
   */
  inputType?: string;
  /**
   * Set the state to disabled or not.
   */
  disabled?: boolean;
}

declare const rehypeInputDisable: Plugin<[Options?], Root, Root>;

export default rehypeInputDisable;
