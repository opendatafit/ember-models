import Model, { AsyncBelongsTo } from '@ember-data/model';
import UserModel from './user';
export default class BaseModel extends Model {
    name: string;
    title: string;
    description: string;
    profile: string;
    viewPermission: string;
    lastUpdated: number;
    owner: AsyncBelongsTo<UserModel>;
}
//# sourceMappingURL=base.d.ts.map