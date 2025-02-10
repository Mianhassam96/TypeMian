
import TypingTest from '../components/TypingTest';
import { Keyboard } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-muted">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between bg-primary/50 backdrop-blur-sm border-b border-accent/20">
        <div className="flex items-center gap-2">
          <Keyboard className="w-8 h-8 text-accent" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
            TypeMian
          </h1>
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
