import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') declare email: string;
  @attr('string') declare mugshot: string;

  @attr('string') declare first_name: string;
  @attr('string') declare last_name: string;

  @attr('string') declare short_bio: string;
}
