import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  nUser!: User;
  user: User = new User("a","a","a","a@","1","6","","es","M",28,"L","R");
  formProfileUser: FormGroup;

  options: string[] = [
    'Alemania',
    'Belgica',
    'Croacia',
    'Dinamarca',
    'España',
    'Francia',
  ];

  constructor(public form: FormBuilder, private userServ: UserService) {
    this.formProfileUser = this.form.group({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastname1: new FormControl(this.user.lastname1, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastname2: new FormControl(this.user.lastname2, [
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      dni: new FormControl(this.user.dni, [
        Validators.pattern('[0-9]{8}[A-Z]'),
        Validators.required,
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern('[6][0-9]{8}$'),
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      anotherPhone: new FormControl(this.user.anotherPhone, [
        Validators.pattern('[6][0-9]{8}$'),
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      country: new FormControl(this.user.country, [Validators.required]),
      province: new FormControl(this.user.province, [Validators.required]),
      postalCode: new FormControl(this.user.postalCode, [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
      ]),
      locality: new FormControl(this.user.locality, [Validators.required]),
      nickname: new FormControl(this.user.nickname, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {
  }

  changeProfileUser() {
    if (!this.formProfileUser.valid) {
      alert('Algunos campos no son válidos');

      return;
    } else {
      this.nUser = new User(
        this.formProfileUser.get('name')?.value,
        this.formProfileUser.get('lastname1')?.value,
        this.formProfileUser.get('lastname2')?.value,
        this.formProfileUser.get('email')?.value,
        this.formProfileUser.get('dni')?.value,
        this.formProfileUser.get('phone')?.value,
        this.formProfileUser.get('anotherPhone')?.value,
        this.formProfileUser.get('country')?.value,
        this.formProfileUser.get('province')?.value,
        this.formProfileUser.get('postalCode')?.value,
        this.formProfileUser.get('locality')?.value,
        this.formProfileUser.get('nickname')?.value
      );
      const oldData = this.userServ.getUsers() || [];
      oldData.push(this.nUser);
      localStorage.setItem('Alumnos', JSON.stringify(oldData));
    }
  }
}
