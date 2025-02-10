
import React from 'react';
import type { TypingStats } from './TypingTest';
import { Trophy } from 'lucide-react';

interface ResultsProps {
  stats: TypingStats;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ stats, onReset }) => {
  return (
    <div className="text-center animate-slideUp">
      <div className="flex justify-center mb-6">
        <Trophy className="w-16 h-16 text-accent" />
      </div>
      <h2 className="text-3xl font-bold mb-8">Test Complete!</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-3xl font-bold text-accent">{stats.wpm}</div>
          <div className="text-sm text-muted-foreground">Words Per Minute</div>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-3xl font-bold text-accent">{stats.accuracy}%</div>
          <div className="text-sm text-muted-foreground">Accuracy</div>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-3xl font-bold text-accent">{stats.correctChars}</div>
          <div className="text-sm text-muted-foreground">Correct Characters</div>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-3xl font-bold text-accent">{stats.elapsedTime}s</div>
          <div className="text-sm text-muted-foreground">Time</div>
        </div>
      </div>
      <button
        onClick={onReset}
        className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default Results;
