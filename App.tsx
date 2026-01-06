import React from 'react';
import { INVITATION_DATA } from './constants';
import { FloatingDecorations } from './components/FloatingDecorations';
import { RevealSection } from './components/RevealSection';
import { MusicPlayer } from './components/MusicPlayer';
import { CherryIcon, BowIcon } from './components/Icons';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-700 font-body relative selection:bg-cherry-pink selection:text-red-800">
      
      {/* Background Animation */}
      <FloatingDecorations />

      {/* Componente de Música */}
      <MusicPlayer url={INVITATION_DATA.musicUrl} />

      <main className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col items-center pb-24 shadow-2xl bg-white/30 backdrop-blur-sm border-x border-white/50">
        
        {/* Header / Hero */}
        <div className="w-full pt-12 pb-8 px-6 text-center">
          <RevealSection>
            <div className="flex justify-center mb-4">
               <CherryIcon className="w-24 h-24 drop-shadow-lg scale-110" />
            </div>
            <h1 className="font-cursive text-6xl text-cherry-red drop-shadow-sm leading-tight">
              {INVITATION_DATA.heroTitle}
            </h1>
          </RevealSection>
        </div>

        {/* Intro Text */}
        <div className="w-full px-8 text-center mb-12">
          <RevealSection delay={0.2}>
            <p className="text-xl md:text-2xl font-cursive text-green-700 leading-relaxed">
              {INVITATION_DATA.introText}
            </p>
          </RevealSection>
        </div>

        {/* The Big Reveal: Photo, Name, Age */}
        <div className="w-full px-4 text-center mb-12">
          <RevealSection delay={0.3} className="relative flex flex-col items-center">
            
            {/* Nickname above photo */}
            <h2 className="font-cursive text-5xl text-cherry-red mb-6 drop-shadow-md rotate-[-5deg]">
              {INVITATION_DATA.nickname}
            </h2>

            {/* Photo Frame Container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6">
              {/* Decorative Bow on top */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <BowIcon className="w-24 h-24 drop-shadow-md" color="#FFC2C7" />
              </div>

              {/* Gingham Background Frame */}
              <div className="absolute inset-0 rounded-full gingham-pattern border-4 border-cherry-pink shadow-xl flex items-center justify-center p-3">
                 {/* Inner Photo */}
                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-pink-200 cursor-pointer">
                    <img 
                      src={INVITATION_DATA.photoUrl} 
                      alt={INVITATION_DATA.name}
                      fetchPriority="high"
                      width="400"
                      height="400"
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                 </div>
              </div>
              
              {/* Cute cherries on bottom sides */}
              <div className="absolute -bottom-2 -left-2 z-20 rotate-[-15deg]">
                 <CherryIcon className="w-12 h-12" />
              </div>
              <div className="absolute -bottom-2 -right-2 z-20 rotate-[15deg]">
                 <CherryIcon className="w-12 h-12" />
              </div>
            </div>

            {/* Editable Name & Age */}
            <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-3xl shadow-sm border border-cherry-pink mt-4">
              <h2 className="font-cursive text-5xl text-cherry-red leading-none mb-2">
                {INVITATION_DATA.name}
              </h2>
              <p className="text-xl font-bold text-cherry-green tracking-wide uppercase">
                {INVITATION_DATA.age}
              </p>
            </div>
            
          </RevealSection>
        </div>

        {/* Cake Illustration divider */}
        <RevealSection className="my-8">
           <div className="text-6xl animate-bounce duration-[2000ms]">🎂</div>
        </RevealSection>

        {/* Details Section */}
        <div className="w-full px-6 space-y-6 mb-20">
          
          <RevealSection delay={0.1}>
            <div className="bg-white/90 p-6 rounded-2xl shadow-lg border-2 border-cherry-pink/30 flex items-center gap-4">
              <div className="bg-cherry-pink/20 p-3 rounded-full text-cherry-red">
                <Calendar size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Data</p>
                <p className="text-2xl font-cursive text-cherry-red">{INVITATION_DATA.date}</p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="bg-white/90 p-6 rounded-2xl shadow-lg border-2 border-cherry-pink/30 flex items-center gap-4">
              <div className="bg-cherry-pink/20 p-3 rounded-full text-cherry-red">
                <Clock size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Horário</p>
                <p className="text-2xl font-cursive text-cherry-red">{INVITATION_DATA.time}</p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.3}>
            <a 
              href={INVITATION_DATA.locationLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 p-6 rounded-2xl shadow-lg border-2 border-cherry-pink/30 flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer group"
            >
              <div className="bg-cherry-pink/20 p-3 rounded-full text-cherry-red group-hover:bg-cherry-red group-hover:text-white transition-colors">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Local</p>
                <p className="text-xl font-bold text-gray-800">{INVITATION_DATA.locationName}</p>
                <p className="text-sm text-gray-600">{INVITATION_DATA.locationAddress}</p>
                <p className="text-xs text-cherry-red mt-1 underline">Ver no mapa</p>
              </div>
            </a>
          </RevealSection>

        </div>

        {/* Footer Text */}
        <RevealSection className="mb-24 px-8 text-center">
            <p className="font-cursive text-3xl text-cherry-green">
              {INVITATION_DATA.footerMessage}
            </p>
        </RevealSection>

      </main>

      {/* Sticky RSVP Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center bg-gradient-to-t from-pink-100 via-pink-50/80 to-transparent pb-8">
        <motion.a
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          href={INVITATION_DATA.rsvpLink}
          target="_blank"
          rel="noreferrer"
          className="bg-cherry-red text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-cherry-red/40 hover:bg-red-500 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-lg"
        >
          <span>✨</span> {INVITATION_DATA.rsvpText}
        </motion.a>
      </div>

    </div>
  );
};

export default App;