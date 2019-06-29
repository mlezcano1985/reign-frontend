import { Model } from './model';

export class ListResponse<T> extends Model {
    items: Array<T>;
    total: number;

    constructor(data?: any) {
        super(data);
        if (!data) {
            this.items = [];
            this.total = 0;
        }
    }
}
