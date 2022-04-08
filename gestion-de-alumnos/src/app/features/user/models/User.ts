export class User {

    private _name:string;
    private _lastname1:string;
    private _lastname2:string;
    private _email:string;
    //private _password:string;
  
    constructor(name:string, lastname1:string, lastname2:string, email:string,){
      this._name = name;
      this._lastname1 = lastname1;
      this._lastname2 = lastname1;
      this._email = email;
    }
  
    get name():string{
      return this._name;
    }
  
    get lastname1():string{
      return this._lastname1;
    }

    get lastname2():string{
        return this._lastname2;
      }
  
    get email():string{
      return this._email;
    }
    
  }