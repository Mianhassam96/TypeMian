
import React from 'react';

interface TextDisplayProps {
  originalText: string;
  userInput: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ originalText, userInput }) => {
  return (
    <div className="text-lg leading-relaxed bg-muted p-6 rounded-lg animate-slideUp">
      {originalText.split('').map((char, index) => {
        let className = "transition-colors duration-150";
        
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
