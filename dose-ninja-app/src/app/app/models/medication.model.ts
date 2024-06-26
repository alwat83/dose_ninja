export class Medication {
  id: number = 0;
  name: string = '';
  dose: string = ''; 
  frequency: string = '';
  route: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  constructor() {}
}