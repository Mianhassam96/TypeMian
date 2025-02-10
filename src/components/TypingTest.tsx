
import React, { useState, useEffect, useCallback } from 'react';
import { Timer, Award } from 'lucide-react';
import Stats from './Stats';
import TextDisplay from './TextDisplay';
import Results from './Results';

const sampleText = "The quick brown fox jumps over the lazy dog. Programming is both an art and a science, requiring creativity and logical thinking. Technology continues to shape our world in unprecedented ways.";

export interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  elapsedTime: number;
}

const TypingTest = () => {
  const [text, setText] = useState(sampleText);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    incorrectChars: 0,
    totalChars: 0,
    elapsedTime: 0,
  });

  const calculateStats = useCallback(() => {
    if (!startTime) return;

    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = userInput.length / 5; // assuming average word length of 5 characters
    const wpm = Math.round(wordsTyped / timeElapsed);

    let correct = 0;
    let incorrect = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    const accuracy = Math.round((correct / (correct + incorrect)) * 100);

    setStats({
      wpm,
      accuracy,
      correctChars: correct,
      incorrectChars: incorrect,
      totalChars: userInput.length,
      elapsedTime: Math.round(timeElapsed * 60),
    });
  }, [startTime, text, userInput]);

  useEffect(() => {
    if (userInput.length > 0 && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput.length === text.length) {
      setIsFinished(true);
    }

    calculateStats();
  }, [userInput, startTime, text, calculateStats]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isFinished) {
      setUserInput(e.target.value);
    }
  };

  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setIsFinished(false);
    setStats({
      wpm: 0,
      accuracy: 0,
      correctChars: 0,
      incorrectChars: 0,
      totalChars: 0,
      elapsedTime: 0,
    });
  };

  return (
    <div className="min-h-screen bg-primary p-8 font-mono text-primary-foreground animate-fadeIn">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Timer className="w-6 h-6" />
            <span className="text-xl">{stats.elapsedTime}s</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6" />
            <span className="text-xl">{stats.wpm} WPM</span>
          </div>
        </div>

        {!isFinished ? (
          <>
            <Stats stats={stats} />
            <TextDisplay originalText={text} userInput={userInput} />
            <textarea
              className="w-full h-20 mt-8 p-4 bg-muted text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              value={userInput}
              onChange={handleInput}
              placeholder="Start typing..."
              autoFocus
            />
          </>
        ) : (
          <Results stats={stats} onReset={resetTest} />
        )}
      </div>
    </div>
  );
};

export default TypingTest;
