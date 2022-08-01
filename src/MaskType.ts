/** Type of the mask char */
const enum MaskType {
  /** Add a fixed value */
  FIXED = 'FIXED',
  /**  Do a regex validation, if true returns the value */
  REGEX = 'REGEX',
}

export default MaskType;
