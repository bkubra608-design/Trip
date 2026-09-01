import React, { useState } from 'react';
import { X, CheckCircle2, Download, Copy, Share2, Calendar, MapPin, Sparkles, DollarSign } from 'lucide-react';
import { GeneratedItinerary } from '../types';

interface SaveItineraryModalProps {
  itinerary: GeneratedItinerary | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SaveItineraryModal: React.FC<SaveItineraryModalProps> = ({
  itinerary,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);

  if (!isOpen || !itinerary) return null;

  const handleCopySummary = () => {
    const textToCopy = `✈️ TripMate Itinerary: ${itinerary.destination} (${itinerary.durationDays} Days)\n` +
      `Estimated Budget: ${itinerary.totalBudgetEst}\n` +
      `Travel Style: ${itinerary.travelStyle}\n\n` +
      itinerary.days
        .map((d) => `Day ${d.dayNumber}: ${d.title}\n` + d.activities.map((a) => `  • ${a.time} - ${a.title}`).join('\n'))
        .join('\n\n') +
      `\n\nGenerated with TripMate AI (https://tripmate.ai)`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadOfflineJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(itinerary, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `TripMate_${itinerary.destination}_${itinerary.durationDays}Days.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setSavedLocally(true);
    setTimeout(() => setSavedLocally(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Ready For Export
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Save {itinerary.destination} Itinerary
          </h3>
          <p className="text-xs text-slate-400">
            Sync to your mobile device, download offline files, or copy full summary.
          </p>
        </div>

        {/* Itinerary Quick Summary Box */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {itinerary.destination}, {itinerary.country}
            </span>
            <span className="text-emerald-400 font-mono font-bold">
              {itinerary.totalBudgetEst}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Duration</span>
              <strong>{itinerary.durationDays} Days</strong>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Pacing</span>
              <strong>{itinerary.travelStyle}</strong>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <span className="text-[11px] text-slate-400 font-medium">Daily Schedule:</span>
            {itinerary.days.map((d) => (
              <div key={d.dayNumber} className="text-[11px] text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-mono font-bold">Day {d.dayNumber}:</span>
                <span className="truncate">{d.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleCopySummary}
            className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>Copy Text Summary</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadOfflineJson}
            className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            {savedLocally ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Offline Plan</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
