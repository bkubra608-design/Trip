import React, { useState } from 'react';
import {
  Bot,
  User,
  Send,
  Sparkles,
  MessageSquareText,
  CornerDownLeft,
  Calendar,
  Building2,
  Plane,
  Tag,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { CHAT_KNOWLEDGE_BASE, SAMPLE_CHAT_PROMPTS } from '../data/mockData';
import { ChatMessage } from '../types';

export const AIChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: "👋 Hi there! I'm **TripMate AI**, your dedicated personal travel assistant. Ask me anything about flights, hotel suggestions, budget optimization, or custom day-by-day itineraries!",
      timestamp: 'Just now',
    },
    {
      id: 'demo-user-msg',
      sender: 'user',
      text: 'Find family-friendly activities in Dubai.',
      timestamp: '1 min ago',
    },
    {
      id: 'demo-ai-msg',
      sender: 'ai',
      text: CHAT_KNOWLEDGE_BASE['Find family-friendly activities in Dubai.'].reply,
      timestamp: 'Just now',
      cards: CHAT_KNOWLEDGE_BASE['Find family-friendly activities in Dubai.'].cards,
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: promptText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      // Check if prompt matches knowledge base or fallback with intelligent travel response
      let matchedResponse = CHAT_KNOWLEDGE_BASE[promptText];

      if (!matchedResponse) {
        // Find partial match
        const lower = promptText.toLowerCase();
        if (lower.includes('december') || lower.includes('winter')) {
          matchedResponse = CHAT_KNOWLEDGE_BASE['Where should I travel in December?'];
        } else if (lower.includes('turkey') || lower.includes('istanbul') || lower.includes('budget')) {
          matchedResponse = CHAT_KNOWLEDGE_BASE['Plan a budget trip to Turkey.'];
        } else if (lower.includes('flight') || lower.includes('gate') || lower.includes('airport')) {
          matchedResponse = CHAT_KNOWLEDGE_BASE['Remind me about my flight.'];
        } else if (lower.includes('hotel') || lower.includes('stay') || lower.includes('resort')) {
          matchedResponse = CHAT_KNOWLEDGE_BASE['Suggest hotels near the city center.'];
        } else if (lower.includes('adventure') || lower.includes('action') || lower.includes('hike')) {
          matchedResponse = CHAT_KNOWLEDGE_BASE['Make my itinerary more adventurous.'];
        } else {
          matchedResponse = {
            reply: `Here are my top recommendations for **"${promptText}"**:\n\n• **Strategic Routing**: Prioritize morning visits to popular attractions to beat midday crowds.\n• **Budget & Bookings**: Look for central accommodations within a 5-minute walk to metro lines.\n• **TripMate Tip**: I have added smart reminders to your schedule to ensure smooth offline transit.\n\nWould you like me to generate a complete custom day-by-day itinerary?`,
            cards: [
              {
                type: 'tip',
                title: 'Smart Travel Recommendation',
                subtitle: 'Personalized based on your prompt',
                tag: 'AI Verified',
                details: ['Optimized travel times', 'Offline maps available', 'Safe neighborhood ranking'],
              },
            ],
          };
        }
      }

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: matchedResponse.reply,
        timestamp: 'Just now',
        cards: matchedResponse.cards,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendPrompt(inputQuery);
  };

  return (
    <section id="chat" className="relative py-24 lg:py-32 bg-slate-900/40 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background ambient glowing light */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareText className="w-3.5 h-3.5" />
            24/7 Conversational AI
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Just Ask{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              TripMate AI
            </span>
          </h2>

          <p className="text-lg text-slate-300 font-medium">
            Your travel questions, answered instantly.
          </p>
        </div>

        {/* Clickable Suggested Prompt Chips */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Try asking one of these popular questions:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {SAMPLE_CHAT_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendPrompt(prompt)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm flex items-center gap-1.5 group hover:scale-[1.02]"
              >
                <span>"{prompt}"</span>
                <Sparkles className="w-3 h-3 text-cyan-400/60 group-hover:text-cyan-300 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Polished Chatbot Interface Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[600px]">
          
          {/* Chat Window Top Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-500 p-[1px]">
                  <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                  TripMate Travel Copilot
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Online
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  Powered by next-gen multimodal travel intelligence
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    id: 'welcome-reset',
                    sender: 'ai',
                    text: "👋 Hi there! I'm **TripMate AI**, your dedicated personal travel assistant. Ask me anything about flights, hotel suggestions, budget optimization, or custom day-by-day itineraries!",
                    timestamp: 'Just now',
                  },
                ])
              }
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/60 border border-slate-800 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-6 space-y-5 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3.5 ${
                  msg.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-slate-800 border border-slate-700 text-slate-300'
                      : 'bg-gradient-to-tr from-cyan-500/20 to-sky-500/20 border border-cyan-500/40 text-cyan-400'
                  }`}
                >
                  {msg.sender === 'user' ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed space-y-3 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-medium rounded-tr-sm shadow-md'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-sm shadow-md'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm">{msg.text}</div>

                  {/* Optional Embedded Card Attachments */}
                  {msg.cards && msg.cards.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      {msg.cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-white flex items-center gap-1.5">
                              {card.type === 'flight' && <Plane className="w-3.5 h-3.5 text-cyan-400" />}
                              {card.type === 'hotel' && <Building2 className="w-3.5 h-3.5 text-amber-400" />}
                              {card.type === 'itinerary' && <Calendar className="w-3.5 h-3.5 text-emerald-400" />}
                              {card.type === 'tip' && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                              <span>{card.title}</span>
                            </div>
                            {card.tag && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                                {card.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-400">{card.subtitle}</p>
                          {card.details && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {card.details.map((d, dIdx) => (
                                <span
                                  key={dIdx}
                                  className="text-[11px] text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                                >
                                  ✓ {d}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <span
                    className={`text-[10px] block text-right mt-1 ${
                      msg.sender === 'user' ? 'text-slate-900/80' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  </span>
                  <span>TripMate is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Message Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask anything (e.g., 'Suggest romantic restaurants in Paris under $80')..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              className="p-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold disabled:opacity-40 transition-all shadow-md shadow-cyan-500/20"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
