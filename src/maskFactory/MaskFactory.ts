import MaskFactoryType from './MaskFactoryType';
import { Mask } from '../Mask';
import MaskType from '../MaskType';

/**
 * Abstract class that creates [Mask] instances by [MaskFactoryType].
 * @author Caio Mansho
 */
/* eslint-disable @typescript-eslint/no-use-before-define */
abstract class MaskFactory {
  /**
     * Abstracts the creation of a [Mask].
     * @param index position of the string.
     * @return [Mask] created.
     */
  public abstract createMask: (index: number) => Mask;

  /**
     * Get [MaskFactory]  implementation by [MaskFactoryType].
     *
     * @param maskFactoryType with the type of the [Mask] to be created.
     * @return [MaskFactory] implementation of the [Mask] creation.
     */
  static getMaskFactory(maskFactoryType: string): MaskFactory {
    switch (maskFactoryType) {
      case MaskFactoryType.LETTER:
        return new LetterMaskFactory();
      case MaskFactoryType.NUMBER:
        return new NumberMaskFactory();
      default:
        return new AlphanumericMaskFactory();
    }
  }
}

/**
 * Inner implementation class that creates char only mask mask.
 */
class LetterMaskFactory extends MaskFactory {
  public createMask = (index: number): Mask => ({
    maskType: MaskType.REGEX,
    value: '^[a-zA-Z]+$',
    index,
  });
}

/**
 * Inner implementation class that creates numbers only mask.
 */
class NumberMaskFactory extends MaskFactory {
  public createMask = (index: number): Mask => ({
    maskType: MaskType.REGEX,
    value: '^[0-9]*$',
    index,
  });
}

/**
 * Inner implementation class that creates alphanumeric mask.
 */
class AlphanumericMaskFactory extends MaskFactory {
  public createMask = (index: number): Mask => ({
    maskType: MaskType.REGEX,
    value: '^[a-zA-Z0-9]*$',
    index,
  });
}

export default MaskFactory;
