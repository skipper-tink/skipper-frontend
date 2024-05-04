export type Employee = {
  id: number;
  name: string;
  specialization: string;
  qualification: string;
  stack: string[];
  rating: string;
  freeTimePerWeek: number;
  freeTimeUntilDate: string;
  userId: number;
};

export type Skill = {
  id: number;
  name: string;
  specialization: string;
}