import Model, { attr, belongsTo, AsyncBelongsTo } from '@ember-data/model';

import UserModel from './user';

export default class BaseModel extends Model {
  @attr('string') declare name: string;
  @attr('string') declare title: string;
  @attr('string') declare description: string;
  @attr('string') declare profile: string;
  @attr('string') declare viewPermission: string;
  @attr('number') declare lastUpdated: number;

  @belongsTo('user') declare owner: AsyncBelongsTo<UserModel>;
}
