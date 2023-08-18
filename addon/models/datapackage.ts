import Model, {
  attr,
  hasMany,
  belongsTo,
  AsyncHasMany,
} from '@ember-data/model';
import Base from '@opendatafit/ember-models/models/base';

import AlgorithmModel from '@opendatafit/ember-models/models/algorithm';
import ResourceModel from '@opendatafit/ember-models/models/resource';
import ViewModel from '@opendatafit/ember-models/models/view';
import DisplayModel from '@opendatafit/ember-models/models/display';

export default class DatapackageModel extends Base {
  @hasMany('resource', { async: true }) declare resources: AsyncHasMany<ResourceModel>;
  @hasMany('algorithm', { async: true }) declare algorithms: AsyncHasMany<AlgorithmModel>;
  @hasMany('view', { async: true }) declare views: AsyncHasMany<ViewModel>;
  @hasMany('display', { async: true }) declare displays: AsyncHasMany<DisplayModel>;
}
