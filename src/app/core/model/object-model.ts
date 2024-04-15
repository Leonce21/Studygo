export class User {
    role!: string;
    name!: string;
    email!: string;
    password!: string;
    confirmPassword!: string;
    // uploadPhoto!:string;
    language!:string;
}

export class Product {
    id!:number;
    name!: string;
    uploadPhoto!:string;
    desc!:string;
    status!:boolean;
}

export class Order {
    id!:number;
    userId!: number;
    sellerId!: number;
    product!: string;
    dateTime!:string;
}

