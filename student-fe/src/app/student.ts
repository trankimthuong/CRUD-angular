export class Student {
  id: any;
  phoneNumber: string;
  address: string;
  name: string;

  constructor(name: string, address: string, phoneNumber: string){
      this.name = name;
      this.address = address;
      this.phoneNumber = phoneNumber;
  }
}
