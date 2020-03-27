export class Incident {

    constructor() {}

    public id!: number
    public title!: string
    public description!: string
    public value!: number
    public ngo_id!: string

    // NGO atributtes
    public name!: string
    public email!: string
    public whatsapp!: string
    public city!: string
    public uf!: string
}