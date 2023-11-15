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

import { Repository } from '@opendatafit/types';

export default class DatapackageModel extends Base {
  @attr() declare repository: Repository;

  @hasMany('resource', 
      { async: false, inverse: null }) 
      declare resources: AsyncHasMany<ResourceModel>;
  @hasMany('algorithm', 
      { async: false, inverse: null }) 
      declare algorithms: AsyncHasMany<AlgorithmModel>;
  @hasMany('view', 
      { async: false, inverse: null }) 
      declare views: AsyncHasMany<ViewModel>;
  @hasMany('display', 
      { async: false, inverse: null }) 
      declare displays: AsyncHasMany<DisplayModel>;
}
