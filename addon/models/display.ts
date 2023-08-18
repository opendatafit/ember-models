import Model, { attr } from '@ember-data/model';
import Base from '@opendatafit/ember-models/models/base';

import { Display } from '@opendatafit/types';

export default class DisplayModel extends Base {
  @attr('string') declare icon: Display['icon'];
  @attr() declare layout: Display['layout'];
  @attr() declare algorithms: Display['algorithms'];
}
