# Quiz Refactoring Documentation

## Overview

This document describes the refactoring of quiz functionality from PHP to Next.js, extracting quiz questions into JSON files for better maintainability and modern development practices.

## File Structure

```
next-app/
├── data/
│   ├── caregiver-quiz.json    # Caregiver quiz questions and configuration
│   └── maid-quiz.json         # Maid quiz questions and configuration
├── types/
│   └── quiz.ts               # TypeScript interfaces for quiz data
├── lib/
│   └── quizUtils.ts          # Utility functions for quiz operations
└── app/
    ├── caregiver-quiz/
    │   └── page.tsx          # Caregiver quiz component
    └── maid-quiz/
        └── page.tsx          # Maid quiz component
```

## JSON Structure

Each quiz JSON file contains:

- `title`: Quiz title
- `passingScore`: Minimum score required to pass
- `questions`: Array of question objects with:
  - `id`: Unique question identifier
  - `question`: Question text
  - `options`: Array of answer options
  - `answer`: Correct answer

## TypeScript Interfaces

```typescript
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface QuizData {
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  fullName: string;
}
```

## Utility Functions

### `loadQuizData(quizType: 'caregiver' | 'maid')`

- Dynamically imports quiz JSON data
- Returns Promise<QuizData>

### `calculateQuizResult(answers, quizData, fullName)`

- Calculates quiz score and results
- Returns QuizResult object

## Features

### Quiz Components

- **Loading States**: Spinner while quiz data loads
- **Error Handling**: Graceful error display if data fails to load
- **Form Validation**: Requires full name before submission
- **Responsive Design**: Mobile-friendly layout
- **Accessibility**: Proper labels and keyboard navigation

### Quiz Results

- **Score Display**: Shows score, percentage, and pass/fail status
- **Conditional Navigation**: Different links based on pass/fail
- **Visual Feedback**: Color-coded success/failure messages

## Migration Notes

### From PHP to Next.js

1. **Static Data**: Quiz questions moved from JavaScript arrays to JSON files
2. **Type Safety**: Added TypeScript interfaces for better development experience
3. **Component Architecture**: Modular React components with proper state management
4. **Modern Styling**: Tailwind CSS for responsive design
5. **Client-Side Logic**: Quiz scoring and validation handled in browser

### Original PHP Files

- `carequiz.php`: Caregiver quiz (20 questions, passing score: 15)
- `quiz.php`: Maid quiz (25 questions, passing score: 17)

### New Next.js Routes

- `/caregiver-quiz`: Caregiver quiz page
- `/maid-quiz`: Maid quiz page

## Benefits of Refactoring

1. **Maintainability**: Quiz content separated from logic
2. **Reusability**: JSON data can be used across different components
3. **Type Safety**: TypeScript prevents runtime errors
4. **Performance**: Static JSON files load faster than server-side rendering
5. **Developer Experience**: Better tooling and debugging capabilities
6. **Scalability**: Easy to add new quizzes or modify existing ones

## Future Enhancements

1. **Database Integration**: Store quiz results in database
2. **Analytics**: Track quiz performance and user behavior
3. **Progressive Enhancement**: Add offline support with service workers
4. **Internationalization**: Support multiple languages
5. **Accessibility**: Add screen reader support and keyboard shortcuts
