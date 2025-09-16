import { QuizData, QuizResult } from '@/types/quiz';

export async function loadQuizData(quizType: 'caregiver' | 'maid'): Promise<QuizData> {
  const data = await import(`@/data/${quizType}-quiz.json`);
  return data.default;
}

export function calculateQuizResult(
  answers: Record<number, string>,
  quizData: QuizData,
  fullName: string
): QuizResult {
  let score = 0;
  const totalQuestions = quizData.questions.length;

  quizData.questions.forEach((question) => {
    const userAnswer = answers[question.id];
    if (userAnswer === question.answer) {
      score++;
    }
  });

  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = score >= quizData.passingScore;

  return {
    score,
    totalQuestions,
    percentage,
    passed,
    fullName,
  };
} 