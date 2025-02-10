
import React from 'react';
import type { TypingStats } from './TypingTest';

interface StatsProps {
  stats: TypingStats;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-muted p-4 rounded-lg text-center animate-slideUp">
        <div className="text-2xl font-bold text-accent">{stats.wpm}</div>
        <div className="text-sm text-muted-foreground">WPM</div>
      </div>
      <div className="bg-muted p-4 rounded-lg text-center animate-slideUp" style={{ animationDelay: "0.1s" }}>
        <div className="text-2xl font-bold text-accent">{stats.accuracy}%</div>
        <div className="text-sm text-muted-foreground">Accuracy</div>
      </div>
      <div className="bg-muted p-4 rounded-lg text-center animate-slideUp" style={{ animationDelay: "0.2s" }}>
        <div className="text-2xl font-bold text-accent">{stats.correctChars}</div>
        <div className="text-sm text-muted-foreground">Correct</div>
      </div>
      <div className="bg-muted p-4 rounded-lg text-center animate-slideUp" style={{ animationDelay: "0.3s" }}>
        <div className="text-2xl font-bold text-destructive">{stats.incorrectChars}</div>
        <div className="text-sm text-muted-foreground">Errors</div>
      </div>
    </div>
  );
};

export default Stats;
