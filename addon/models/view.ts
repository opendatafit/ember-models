import Model, { attr } from '@ember-data/model';
import Base from '@opendatafit/ember-models/models/base';

import { GenericView } from '@opendatafit/types';

export default class ViewModel extends Base {
  @attr() declare spec: GenericView['spec'];
  @attr() declare resources: GenericView['resources'];
  @attr('string') declare specType: GenericView['specType'];
}
