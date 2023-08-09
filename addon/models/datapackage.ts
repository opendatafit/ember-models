import Model, {
  attr,
  hasMany,
  belongsTo,
  AsyncHasMany,
} from '@ember-data/model';
import Base from './base';

import AlgorithmModel from './algorithm';
import ResourceModel from './resource';
import ViewModel from './view';
import DisplayModel from './display';

export default class DatapackageModel extends Base {
  @hasMany('resource') declare resources: AsyncHasMany<ResourceModel>;
  @hasMany('algorithm') declare algorithms: AsyncHasMany<AlgorithmModel>;
  @hasMany('view') declare views: AsyncHasMany<ViewModel>;
  @hasMany('display') declare displays: AsyncHasMany<DisplayModel>;
}
