export class User{

    constructor(
        public username:string,
        public email:string,
        public password: string,
        public id?:string,
        public photoProfil?:string
    ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.photoProfil = photoProfil;
        this.id = id;
    }
}