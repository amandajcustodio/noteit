export interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
}
  
export interface RegisterPayload extends CreateUserPayload {
    confPassword: string;
    confEmail: string;
}