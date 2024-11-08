export interface Course {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  roleDescription: string,
  key: string;
}

export interface Event {
  id: string;
  name: string;
  title: string;
  description: string;
  startDate: string;
  key: string;
}
