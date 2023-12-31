import Model, { attr, belongsTo } from '@ember-data/model';
import type { AsyncBelongsTo } from '@ember-data/model';

import UserModel from '@opendatafit/ember-models/models/user';

export default class BaseModel extends Model {
  @attr('string') declare name: string;
  @attr('string') declare title: string;
  @attr('string') declare description: string;
  @attr('string') declare profile: string;
  @attr('string') declare viewPermission: string;
  @attr('number') declare lastUpdated: number;

  @belongsTo('user', { async: true, inverse: null} )
      declare owner: AsyncBelongsTo<UserModel>;
}
