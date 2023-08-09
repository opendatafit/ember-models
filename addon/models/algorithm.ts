import Model, { attr } from '@ember-data/model';
import Base from './base';

import { Algorithm } from '@opendatafit/types';

export default class AlgorithmModel extends Base {
  @attr('string') declare code: Algorithm['code'];
  @attr() declare inputs: Algorithm['inputs'];
  @attr() declare outputs: Algorithm['outputs'];
}
