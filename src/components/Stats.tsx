
import React from 'react';
import type { TypingStats } from './TypingTest';
import { Activity, Check, X, Zap } from 'lucide-react';

interface StatsProps {
  stats: TypingStats;
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-lg animate-slideUp">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-accent" />
          <div className="text-2xl font-bold text-accent">{stats.wpm}</div>
        </div>
        <div className="text-sm text-muted-foreground text-center">WPM</div>
      </div>
      <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-lg animate-slideUp" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Activity className="w-5 h-5 text-accent" />
          <div className="text-2xl font-bold text-accent">{stats.accuracy}%</div>
        </div>
        <div className="text-sm text-muted-foreground text-center">Accuracy</div>
      </div>
      <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-lg animate-slideUp" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Check className="w-5 h-5 text-accent" />
          <div className="text-2xl font-bold text-accent">{stats.correctChars}</div>
        </div>
        <div className="text-sm text-muted-foreground text-center">Correct</div>
      </div>
      <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 shadow-lg animate-slideUp" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <X className="w-5 h-5 text-destructive" />
          <div className="text-2xl font-bold text-destructive">{stats.incorrectChars}</div>
        </div>
        <div className="text-sm text-muted-foreground text-center">Errors</div>
      </div>
    </div>
  );
};

export default Stats;
