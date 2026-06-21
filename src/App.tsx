import { Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row relative">
        <div className="absolute top-0 left-0 w-full md:w-2 md:h-full h-2 bg-gradient-to-b md:bg-gradient-to-b from-blue-400 to-indigo-500 z-10"></div>
        
        {/* Left Side: Text */}
        <div className="p-8 sm:p-12 md:p-16 flex flex-col items-center md:items-start justify-center text-center md:text-left flex-1 md:w-1/2 order-2 md:order-1 space-y-8 md:pl-20">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 font-medium leading-relaxed sm:leading-snug text-balance">
            "Even though Gerald may not have a place on the rock, he has a place in our hearts."
          </p>
          
          <div className="w-16 h-1.5 bg-blue-100 rounded-full"></div>
          
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            <span>Happy Father's Day!</span>
            <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-red-500 fill-red-500 animate-pulse flex-shrink-0" />
          </div>
          
          <p className="text-base sm:text-lg text-slate-500 mt-8 pt-6 border-t border-slate-100">
            P.S. You get a prize if you give us the numbers for 3 specific babies: Elvis, Hitler, and Charlie Brown (a smiley face on the back of the head).
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="relative bg-slate-50 flex items-center justify-center p-6 sm:p-8 flex-1 md:w-1/2 order-1 md:order-2 border-b md:border-b-0 md:border-l border-slate-100">
          <img 
            src="/gerald.png" 
            alt="Gerald sitting next to his rock" 
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

