
import React, { useState, useEffect, useCallback } from 'react';
import { Timer, Award, Trophy, Sparkles } from 'lucide-react';
import Stats from './Stats';
import TextDisplay from './TextDisplay';
import Results from './Results';
import { Slider } from "./ui/slider";

const LEVELS = {
  beginner: {
    text: "The quick brown fox jumps over the lazy dog. Simple words for typing practice.",
    name: "Beginner",
    color: "text-green-400"
  },
  intermediate: {
    text: "Programming is both an art and a science, requiring creativity and logical thinking. Technology continues to shape our world.",
    name: "Intermediate",
    color: "text-blue-400"
  },
  advanced: {
    text: "The complexity of modern software development demands proficiency in multiple programming paradigms and architectural patterns.",
    name: "Advanced",
    color: "text-purple-400"
  }
};

export interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  elapsedTime: number;
}

const TypingTest = () => {
  const [currentLevel, setCurrentLevel] = useState<keyof typeof LEVELS>("beginner");
  const [text, setText] = useState(LEVELS[currentLevel].text);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedTime, setSelectedTime] = useState(60); // Default 60 seconds
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    incorrectChars: 0,
    totalChars: 0,
    elapsedTime: 0,
  });

  useEffect(() => {
    setText(LEVELS[currentLevel].text);
    setUserInput("");
    setStartTime(null);
    setIsFinished(false);
    setTimeLeft(selectedTime);
  }, [currentLevel, selectedTime]);

  const calculateStats = useCallback(() => {
    if (!startTime) return;

    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = userInput.length / 5;
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
    let timer: NodeJS.Timeout;
    
    if (startTime && !isFinished) {
      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = selectedTime - elapsed;
        
        if (remaining <= 0) {
          setIsFinished(true);
          setTimeLeft(0);
          clearInterval(timer);
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [startTime, selectedTime, isFinished]);

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
    setTimeLeft(selectedTime);
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
    <div className="max-w-4xl mx-auto space-y-8 font-mono">
      {/* Level Selection */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Object.entries(LEVELS).map(([key, level]) => (
          <button
            key={key}
            onClick={() => setCurrentLevel(key as keyof typeof LEVELS)}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentLevel === key
                ? 'border-accent bg-accent/10'
                : 'border-muted hover:border-accent/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {key === 'beginner' && <Sparkles className={level.color} size={20} />}
              {key === 'intermediate' && <Award className={level.color} size={20} />}
              {key === 'advanced' && <Trophy className={level.color} size={20} />}
              <span className={`font-medium ${level.color}`}>{level.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Time Selection */}
      <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-accent">Test Duration: {selectedTime} seconds</span>
          <div className="w-64">
            <Slider
              value={[selectedTime]}
              onValueChange={(value) => {
                if (!startTime) {
                  setSelectedTime(value[0]);
                  setTimeLeft(value[0]);
                }
              }}
              min={30}
              max={300}
              step={30}
              disabled={!!startTime}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Timer className="w-6 h-6 text-accent" />
          <span className="text-xl">{timeLeft}s</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-accent" />
          <span className="text-xl">{stats.wpm} WPM</span>
        </div>
      </div>

      {!isFinished ? (
        <>
          <Stats stats={stats} />
          <TextDisplay originalText={text} userInput={userInput} />
          <textarea
            className="w-full h-20 mt-8 p-4 bg-muted text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
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
  );
};

export default TypingTest;
