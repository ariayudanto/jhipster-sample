import { BaseEntity } from './../../shared';

export class Bank implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public accountNumber?: string,
        public accountHolder?: string,
    ) {
    }
}
