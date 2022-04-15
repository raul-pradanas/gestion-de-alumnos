export class User {
  private _name: string;
  private _lastname1: string;
  private _lastname2: string;
  private _email: string;
  private _dni: string;
  private _phone: string;
  private _anotherPhone?: string;
  private _country: string;
  private _province: string;
  private _postalCode: number;
  private _locality: string;
  private _nickname: string;
  //private _password:string;

  constructor(
    name: string,
    lastname1: string,
    lastname2: string,
    email: string,
    dni: string,
    phone: string,
    anotherPhone: string,
    country: string,
    province: string,
    postalCode: number,
    locality: string,
    nickname: string
  ) {
    this._name = name;
    this._lastname1 = lastname1;
    this._lastname2 = lastname2;
    this._email = email;
    this._dni = dni;
    this._phone = phone;
    this._anotherPhone = anotherPhone;
    this._country = country;
    this._province = province;
    this._postalCode = postalCode;
    this._locality = locality;
    this._nickname = nickname;
  }

  get name(): string {
    return this._name;
  }

  get lastname1(): string {
    return this._lastname1;
  }

  get lastname2(): string {
    return this._lastname2;
  }

  get email(): string {
    return this._email;
  }

  get dni(): string {
    return this._dni;
  }
}
