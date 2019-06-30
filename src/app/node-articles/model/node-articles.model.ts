import { Model } from '../../core/model/model';

export class NodeArticlesModel extends Model {
    _id: string;
    author: string;
    title: string;
    story_title: string;
    url: string;
    story_url: string;
    created_at: Date;
    deleted_at: Date;
    objectID: string;
    constructor(data?: any) {
        super(data);
    }
}
