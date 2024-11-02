export interface Course {
  key: any;
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  roleDescription: string,
}

export interface Event {
  key: any;
  name: string;
  title: string;
  description: string;
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  startDate: string;
  deadlineDate: string;
}
