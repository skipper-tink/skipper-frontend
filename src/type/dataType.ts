export type Employee = {
  id: number;
  name: string;
  specialization: string;
  qualification: string;
  stack: string[];
  rating?: string;
  freeTimePerWeek: number;
  freeTimeUntilDate?: string;
  email?: string;
  phoneNumber?: string;
  description?: string;
  userId: number;
};

export type Skill = {
  id: number;
  name: string;
  specialization: string;
};

export type Creds = {
  login: string;
  password: string;
};

export type Contacts = {
  fullname: string;
  mail: string;
  telegram: string;
  git: string;
};

export type WorkInfo = {
  role: string;
  specialization: string;
  grade: string;
  freeHours: number;
  skills: Skill[];
};
