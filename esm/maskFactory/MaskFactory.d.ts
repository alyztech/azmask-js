import MaskFactoryType from './MaskFactoryType';
import { Mask } from '../Mask';
declare abstract class MaskFactory {
    abstract createMask: (index: number) => Mask;
    static getMaskFactory(maskFactoryType: MaskFactoryType): MaskFactory;
}
export default MaskFactory;
//# sourceMappingURL=MaskFactory.d.ts.map