import MaskFactoryType from './MaskFactoryType';
import MaskType from '../MaskType';
class MaskFactory {
    static getMaskFactory(maskFactoryType) {
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
class LetterMaskFactory extends MaskFactory {
    constructor() {
        super(...arguments);
        this.createMask = (index) => ({
            maskType: MaskType.REGEX,
            value: '^[a-zA-Z]+$',
            index,
        });
    }
}
class NumberMaskFactory extends MaskFactory {
    constructor() {
        super(...arguments);
        this.createMask = (index) => ({
            maskType: MaskType.REGEX,
            value: '^[0-9]*$',
            index,
        });
    }
}
class AlphanumericMaskFactory extends MaskFactory {
    constructor() {
        super(...arguments);
        this.createMask = (index) => ({
            maskType: MaskType.REGEX,
            value: '^[a-zA-Z0-9]*$',
            index,
        });
    }
}
export default MaskFactory;
//# sourceMappingURL=MaskFactory.js.map