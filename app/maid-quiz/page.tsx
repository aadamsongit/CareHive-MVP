"use client";

import { useState, useEffect } from "react";
import { QuizData, QuizResult } from "@/types/quiz";
import { loadQuizData, calculateQuizResult } from "@/lib/quizUtils";

export default function MaidQuiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuizData("maid")
      .then((data) => {
        setQuizData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading quiz data:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!quizData) return;

    const quizResult = calculateQuizResult(answers, quizData, fullName);
    setResult(quizResult);
    setIsSubmitted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (!quizData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Error loading quiz
          </h1>
          <p className="mt-2">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          {quizData.title}
        </h1>

        {!isSubmitted ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name* (REQUIRED)
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="space-y-6">
              {quizData.questions.map((question) => (
                <div
                  key={question.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-lg mb-4">
                    {question.id}. {question.question}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={() =>
                            handleAnswerSelect(question.id, option)
                          }
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
            <div className="text-lg mb-4">
              {result && (
                <>
                  <p>
                    <strong>Name:</strong> {result.fullName}
                  </p>
                  <p>
                    <strong>Score:</strong> {result.score} out of{" "}
                    {result.totalQuestions}
                  </p>
                  <p>
                    <strong>Percentage:</strong> {result.percentage}%
                  </p>
                </>
              )}
            </div>

            {result && result.passed ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-bold">Excellent!</p>
                <p>
                  You're ready for the next interview with a score of{" "}
                  {result.score}/{result.totalQuestions}.
                </p>
                <p className="mt-2">
                  <a
                    href="/become-maid"
                    className="text-green-800 underline font-bold"
                  >
                    CLICK HERE to continue
                  </a>
                </p>
              </div>
            ) : result && !result.passed ? (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
                <p className="font-bold">Keep Learning!</p>
                <p>
                  You scored {result.score}/{result.totalQuestions}. You need{" "}
                  {quizData.passingScore} correct answers to pass.
                </p>
                <p className="mt-2">
                  <a
                    href="/training-program"
                    className="text-yellow-800 underline font-bold"
                  >
                    CLICK HERE for training
                  </a>
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
