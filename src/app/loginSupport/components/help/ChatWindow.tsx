import { useState } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean}>>([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return; // Don't send empty messages

    // Add user message
    const userMessage = { text: input, isBot: false };
    
    // Add bot response
    const botMessage = { text: "Thanks for your message! Our team will get back to you soon.", isBot: true };
    
    setMessages([...messages, userMessage, botMessage]);
    setInput(''); // Clear input after sending
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
        <h3 className="font-semibold">Support Chat</h3>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`rounded-lg p-3 max-w-[80%] ${
              msg.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-md border p-2"
            placeholder="Type your message..."
          />
          <Button 
            type="submit" 
            variant="help"
          >Send
          </Button>
        </div>
      </form>
    </div>
  );
}