interface User {
  id: string;
  username: string;
}

interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string; 
  updatedAt: string; 
}

interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string; 
  updatedAt: string;
}


export interface Question {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;   
  shortAnswer: string;  
  status: "public" | "private"; 
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: User;
  updatedBy: User;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
}


export interface QueryParams {
  id: string | undefined;
}


