export interface I_LoginModal {
  buttonColor: string;
  textColor: string;
  onLogin: (email: string, password: string) => void;
}
