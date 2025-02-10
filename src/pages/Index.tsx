
import TypingTest from '../components/TypingTest';
import { Keyboard, Settings, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-muted">
      {/* Header */}
      <header className="w-full py-4 px-8 flex items-center justify-between bg-gradient-to-r from-primary/90 to-muted/90 backdrop-blur-md border-b border-accent/20 shadow-lg">
        <div className="flex items-center gap-3 animate-fadeIn">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Keyboard className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent via-accent-foreground to-accent bg-clip-text text-transparent">
            TypeMian
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-2 hover:bg-accent/10">
            <Trophy className="w-5 h-5 text-accent" />
            <span className="text-accent">Leaderboard</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 hover:bg-accent/10">
            <Settings className="w-5 h-5 text-accent" />
            <span className="text-accent">Settings</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-8 px-4">
        <TypingTest />
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-8 bg-primary/50 backdrop-blur-sm border-t border-accent/20">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>MultiMian - Improve your typing skills</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
