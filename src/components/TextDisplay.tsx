
import React from 'react';

interface TextDisplayProps {
  originalText: string;
  userInput: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ originalText, userInput }) => {
  return (
    <div className="text-lg leading-relaxed bg-muted/50 backdrop-blur-sm p-8 rounded-lg border border-accent/20 shadow-lg animate-slideUp">
      {originalText.split('').map((char, index) => {
        let className = "font-mono transition-all duration-150";
        
        if (index < userInput.length) {
          if (userInput[index] === char) {
            className += " text-accent";
          } else {
            className += " text-destructive";
          }
        } else if (index === userInput.length) {
          className += " border-r-2 border-accent animate-blink";
        }
        
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TextDisplay;
