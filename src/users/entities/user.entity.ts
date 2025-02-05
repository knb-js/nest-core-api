export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(id: number, name: string, email: string, password: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  
    updateEmail(newEmail: string): void {
      this.email = newEmail;
      this.updatedAt = new Date();
    }
  
    updatePassword(newPassword: string): void {
      this.password = newPassword;
      this.updatedAt = new Date();
    }
  
    getProfile(): { id: number; name: string; email: string } {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
      };
    }
  }
  