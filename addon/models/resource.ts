import Model, { attr } from '@ember-data/model';
import Base from '@opendatafit/ember-models/models/base';

import { Resource } from '@opendatafit/types';

export default class ResourceModel extends Base {
  @attr('string') declare format: Resource['format'];

  @attr() declare data: Resource['data'];
  @attr() declare metadata: Resource['metadata'];
  @attr() declare schema: Resource['schema'];
}
