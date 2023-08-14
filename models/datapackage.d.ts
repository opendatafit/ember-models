import { AsyncHasMany } from '@ember-data/model';
import Base from './base';
import AlgorithmModel from './algorithm';
import ResourceModel from './resource';
import ViewModel from './view';
import DisplayModel from './display';
export default class DatapackageModel extends Base {
    resources: AsyncHasMany<ResourceModel>;
    algorithms: AsyncHasMany<AlgorithmModel>;
    views: AsyncHasMany<ViewModel>;
    displays: AsyncHasMany<DisplayModel>;
}
//# sourceMappingURL=datapackage.d.ts.map