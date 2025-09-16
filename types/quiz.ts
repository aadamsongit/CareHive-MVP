export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizData {
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  fullName: string;
} 