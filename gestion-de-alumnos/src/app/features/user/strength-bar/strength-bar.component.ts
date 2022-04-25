import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss'],
})
export class StrengthBarComponent implements OnInit {
  @Input() controller: AbstractControl | null = null;

  private readonly COLORS = {
    default: 'black',
    empty: 'grey',
    error: 'red',
    warning: 'orange',
    correct: 'green',
  };

  private readonly OPTIONS = {
    empty: {
      message: '',
      color: this.COLORS.empty,
      styles: [
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
      ],
    },
    minLength: {
      message: 'Introduce al menos 6 caracteres',
      color: this.COLORS.error,
      styles: [
        this.COLORS.error,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
      ],
    },
    soWeak: {
      message: 'Muy débil',
      color: this.COLORS.warning,
      styles: [
        this.COLORS.warning,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
      ],
    },
    weak: {
      message: 'Débil',
      color: this.COLORS.warning,
      styles: [
        this.COLORS.warning,
        this.COLORS.warning,
        this.COLORS.empty,
        this.COLORS.empty,
        this.COLORS.empty,
      ],
    },
    moderate: {
      message: 'Moderada',
      color: this.COLORS.correct,
      styles: [
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.empty,
        this.COLORS.empty,
      ],
    },
    strong: {
      message: 'Fuerte',
      color: this.COLORS.correct,
      styles: [
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.empty,
      ],
    },
    soStrong: {
      message: 'Muy fuerte',
      color: this.COLORS.correct,
      styles: [
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
        this.COLORS.correct,
      ],
    },
  };

  message: string = this.OPTIONS.empty.message;
  styles: string[] = this.OPTIONS.empty.styles;
  color: string = this.OPTIONS.empty.color;
  security: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (!!this.controller) {
      this.controller.valueChanges.subscribe((password: string) => {
        this.security = 0;

        if (!password || password.length === 0) {
          this.color = this.OPTIONS.empty.color;
          this.message = this.OPTIONS.empty.message;
          this.styles = this.OPTIONS.empty.styles;
        } else if (password.length < 6) {
          this.color = this.OPTIONS.minLength.color;
          this.message = this.OPTIONS.minLength.message;
          this.styles = this.OPTIONS.minLength.styles;
        } else if (password.length >= 6 && password.length <= 8) {
          this.security += 1;
        } else if (password.length > 8 && password.length <= 12) {
          this.security += 2;
        } else if (password.length > 12) {
          this.security += 3;
        }
        if (/[0-9]/.test(password)) {
          this.security += 1;
        }
        if (/[a-zA-Z]/.test(password)) {
          this.security += 1;
        }
        if (/[$&+,:;=?@#|'<>.-^*()%!]/.test(password)) {
          this.security += 2;
        }
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
          this.security += 2;
        }
        if (/[0-9]/.test(password) && /[a-zA-Z]/.test(password) && /[$&+,:;=?@#|'<>.-^*()%!]/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password)){
          this.security +=1;
        }

        if (this.security > 0 && this.security <= 2) {
          this.color = this.OPTIONS.soWeak.color;
          this.message = this.OPTIONS.soWeak.message;
          this.styles = this.OPTIONS.soWeak.styles;
        } else if (this.security > 2 && this.security <= 5) {
          this.color = this.OPTIONS.weak.color;
          this.message = this.OPTIONS.weak.message;
          this.styles = this.OPTIONS.weak.styles;
        } else if (this.security > 5 && this.security <= 7) {
          this.color = this.OPTIONS.moderate.color;
          this.message = this.OPTIONS.moderate.message;
          this.styles = this.OPTIONS.moderate.styles;
        } else if (this.security > 7 && this.security <= 9) {
          this.color = this.OPTIONS.strong.color;
          this.message = this.OPTIONS.strong.message;
          this.styles = this.OPTIONS.strong.styles;
        } else if (this.security > 9) {
          this.color = this.OPTIONS.soStrong.color;
          this.message = this.OPTIONS.soStrong.message;
          this.styles = this.OPTIONS.soStrong.styles;
        }
      });
    }
  }

  getBackground(color: string) {
    return { 'background-color': color };
  }
}
