/** Describes one char mask */
export interface Mask {
  /** Type of the mask chars, [MaskType.FIXED] or [MaskType.REGEX] */
  maskType: string
  /** If the [maskType] is [MaskType.FIXED] it returns the value it self
   * else if is [MaskType.REGEX] returns a regex validation for the input char */
  value: string
}
