import React, { useState, useMemo } from 'react';

// --- Lavish Royal Wedding SVG Icons & Motifs ---
const RoyalCrest = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="41" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
    <path d="M50 14L53 23L62 25L55 31L57 40L50 35L43 40L45 31L38 25L47 23L50 14Z" fill="url(#goldGrad)" />
    <path d="M30 68C36 61 43 57 50 57C57 57 64 61 70 68C65 73 58 76 50 76C42 76 35 73 30 68Z" stroke="url(#goldGrad)" strokeWidth="1.5" />
    <path d="M50 44V56M44 50H56" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="50" r="3" fill="url(#goldGrad)" />
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
  </svg>
);

const LotusIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 7 9 11 4 13C8 14 11 17 12 22C13 17 16 14 20 13C15 11 12 7 12 2Z" />
    <path d="M12 8C10 11.5 7 14 2 15C5.5 16 8 18 9.5 21" />
    <path d="M12 8C14 11.5 17 14 22 15C18.5 16 16 18 14.5 21" />
  </svg>
);

const DiyaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C12 2 15 5 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5 12 2 12 2Z" fill="url(#diyaFlame)" />
    <path d="M4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 12.5 19.5 12 19 12H5C4.5 12 4 12.5 4 13Z" stroke="currentColor" fill="currentColor" fillOpacity="0.1" />
    <line x1="2" y1="21" x2="22" y2="21" stroke="currentColor" strokeLinecap="round" />
    <defs>
      <linearGradient id="diyaFlame" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
  </svg>
);

const ShagunEnvelopeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" />
    <path d="m22 7-10 7L2 7" stroke="currentColor" />
    <circle cx="12" cy="13" r="3" fill="#B45309" stroke="#FDE68A" strokeWidth="1" />
    <path d="M12 11.8v2.4M10.8 13h2.4" stroke="#FFF" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z" />
  </svg>
);

const CrownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 18h16M3 9l4 4 5-8 5 8 4-4v10H3V9Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChefIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" x2="18" y1="17" y2="17" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LeafGoldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const MessageWhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const PrinterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect width="12" height="8" x="6" y="14" />
  </svg>
);

// --- Wedding Multi-Event Luxury Master Schedule ---
const ROYAL_WEDDING_EVENTS = [
  {
    id: 'haldi',
    title: 'Haldi & Phoolon Ki Mehendi',
    sub: 'Day 1 • Afternoon • 1:00 PM – 4:30 PM',
    venue: 'The Royal Mango Courtyard, Fairmont Jaipur',
    dressCode: 'Marigold Yellow & Floral Silk',
    bannerGradient: 'from-amber-600/30 via-yellow-900/20 to-neutral-950',
    goldAccent: 'border-amber-400/50 text-amber-300',
    iconEmoji: '🌼',
  },
  {
    id: 'sangeet',
    title: 'The Royal Sangeet & Musical Night',
    sub: 'Day 1 • Evening • 7:30 PM – Midnight',
    venue: 'The Grand Sheesh Mahal Ballroom',
    dressCode: 'Regal Velvet & Indo-Western Sparkle',
    bannerGradient: 'from-indigo-900/30 via-purple-900/20 to-neutral-950',
    goldAccent: 'border-purple-400/50 text-purple-300',
    iconEmoji: '🪕',
  },
  {
    id: 'wedding',
    title: 'Auspicious Pheras & Varmala',
    sub: 'Day 2 • Morning • 10:00 AM – 2:30 PM',
    venue: 'The Lotus Heritage Lake Mandap',
    dressCode: 'Traditional Crimson & Ivory Gold',
    bannerGradient: 'from-rose-900/30 via-red-950/20 to-neutral-950',
    goldAccent: 'border-rose-400/50 text-rose-300',
    iconEmoji: '🪔',
  },
  {
    id: 'reception',
    title: 'The Imperial Grand Reception Gala',
    sub: 'Day 2 • Evening • 8:00 PM – Late',
    venue: 'The Crystal Palace Terrace & Banquet',
    dressCode: 'Imperial Black Tie & Banarasi Sarees',
    bannerGradient: 'from-emerald-950/40 via-teal-900/20 to-neutral-950',
    goldAccent: 'border-emerald-400/50 text-emerald-300',
    iconEmoji: '🥂',
  },
];

// --- Initial Guest List with Synchronized State ---
const INITIAL_GUESTS = [
  {
    id: 'g-101',
    name: 'Vikram & Radhika Sharma',
    phone: '+91 98201 44812',
    rsvpStatus: 'confirmed',
    allocatedCount: 2,
    maxGuestsAllowed: 2,
    dietPreference: 'veg',
    events: { haldi: true, sangeet: true, wedding: true, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: false,
    plusOneReason: '',
  },
  {
    id: 'g-102',
    name: 'Dr. Priya & Rohit Mehta',
    phone: '+91 98190 77211',
    rsvpStatus: 'confirmed',
    allocatedCount: 3,
    maxGuestsAllowed: 3,
    dietPreference: 'jain',
    events: { haldi: false, sangeet: true, wedding: true, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: false,
    plusOneReason: '',
  },
  {
    id: 'g-103',
    name: 'Amit & Sneha Verma',
    phone: '+91 97112 55900',
    rsvpStatus: 'pending',
    allocatedCount: 2,
    maxGuestsAllowed: 2,
    dietPreference: 'non-veg',
    events: { haldi: true, sangeet: true, wedding: true, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: false,
    plusOneReason: '',
  },
  {
    id: 'g-104',
    name: 'Sunita Rao (Mausiji)',
    phone: '+91 98450 33201',
    rsvpStatus: 'confirmed',
    allocatedCount: 2,
    maxGuestsAllowed: 2,
    dietPreference: 'veg',
    events: { haldi: true, sangeet: false, wedding: true, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: true,
    plusOneReason: 'Traveling with elderly Dadi who requires wheelchair escort',
  },
  {
    id: 'g-105',
    name: 'Karan Singhania (Family Friend)',
    phone: '+91 99200 11488',
    rsvpStatus: 'declined',
    allocatedCount: 0,
    maxGuestsAllowed: 1,
    dietPreference: 'veg',
    events: { haldi: false, sangeet: false, wedding: false, reception: false },
    shagunSent: 5001,
    blessing: 'Heartiest congratulations to Rohan & Ananya! Wishing you both boundless joy and prosperity forever. Sending shagun with love! ✨🥂',
    plusOneRequested: false,
    plusOneReason: '',
  },
  {
    id: 'g-106',
    name: 'Kabir & Tanya Sen',
    phone: '+91 98300 88219',
    rsvpStatus: 'confirmed',
    allocatedCount: 2,
    maxGuestsAllowed: 2,
    dietPreference: 'non-veg',
    events: { haldi: false, sangeet: true, wedding: false, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: false,
    plusOneReason: '',
  },
  {
    id: 'g-107',
    name: 'Anand & Bhavna Joshi',
    phone: '+91 98220 66310',
    rsvpStatus: 'pending',
    allocatedCount: 2,
    maxGuestsAllowed: 2,
    dietPreference: 'veg',
    events: { haldi: true, sangeet: true, wedding: true, reception: true },
    shagunSent: 0,
    blessing: '',
    plusOneRequested: false,
    plusOneReason: '',
  },
];

export default function ShaadiSync() {
  // Navigation
  const [activeTab, setActiveTab] = useState('guest'); // 'guest' | 'host' | 'kitchen'
  const [phoneFrameMode, setPhoneFrameMode] = useState(true);

  // Synchronized Master State
  const [guests, setGuests] = useState(INITIAL_GUESTS);
  const [activeGuestId, setActiveGuestId] = useState('g-101');

  // Modals
  const [showSoftDeclineModal, setShowSoftDeclineModal] = useState(false);
  const [showRequestPlusOneModal, setShowPlusOneModal] = useState(false);
  const [showWhatsAppNudgeModal, setShowWhatsAppNudgeModal] = useState(false);
  const [showShagunSuccessModal, setShowShagunSuccessModal] = useState(false);
  const [showKitchenPrintView, setShowKitchenPrintView] = useState(false);

  // Form State
  const [selectedShagunAmount, setSelectedShagunAmount] = useState(2101);
  const [customShagun, setCustomShagun] = useState('');
  const [blessingNote, setBlessingNote] = useState('');
  const [plusOneReasonText, setPlusOneReasonText] = useState('');
  const [selectedNudgeTone, setSelectedNudgeTone] = useState('sdg');
  const [toastMessage, setToastMessage] = useState('');

  // Active Guest
  const activeGuest = useMemo(() => {
    return guests.find((g) => g.id === activeGuestId) || guests[0];
  }, [guests, activeGuestId]);

  // Calculations for Host & Kitchen
  const stats = useMemo(() => {
    let totalInvited = 0;
    let confirmedCount = 0;
    let declinedCount = 0;
    let pendingCount = 0;
    let totalShagun = 0;
    let vegTotal = 0;
    let nonVegTotal = 0;
    let jainTotal = 0;

    const eventHeadcounts = {
      haldi: { total: 0, veg: 0, nonVeg: 0, jain: 0 },
      sangeet: { total: 0, veg: 0, nonVeg: 0, jain: 0 },
      wedding: { total: 0, veg: 0, nonVeg: 0, jain: 0 },
      reception: { total: 0, veg: 0, nonVeg: 0, jain: 0 },
    };

    guests.forEach((g) => {
      totalInvited += g.maxGuestsAllowed;
      if (g.shagunSent) totalShagun += g.shagunSent;

      if (g.rsvpStatus === 'confirmed') {
        confirmedCount += g.allocatedCount;
        if (g.dietPreference === 'veg') vegTotal += g.allocatedCount;
        if (g.dietPreference === 'non-veg') nonVegTotal += g.allocatedCount;
        if (g.dietPreference === 'jain') jainTotal += g.allocatedCount;

        Object.keys(eventHeadcounts).forEach((evKey) => {
          if (g.events[evKey]) {
            eventHeadcounts[evKey].total += g.allocatedCount;
            if (g.dietPreference === 'veg') eventHeadcounts[evKey].veg += g.allocatedCount;
            if (g.dietPreference === 'non-veg') eventHeadcounts[evKey].nonVeg += g.allocatedCount;
            if (g.dietPreference === 'jain') eventHeadcounts[evKey].jain += g.allocatedCount;
          }
        });
      } else if (g.rsvpStatus === 'declined') {
        declinedCount += 1;
      } else {
        pendingCount += 1;
      }
    });

    // UN SDG 12 Analytics
    // Traditional Indian wedding caterers overcook by +30% buffer. Precision RSVPs reduce buffer to +5%.
    const traditionalPlates = Math.round(confirmedCount * 1.30);
    const precisionPlates = Math.round(confirmedCount * 1.05);
    const wastedPlatesEliminated = Math.max(0, traditionalPlates - precisionPlates) * 4;
    const kgFoodWastePrevented = Math.round(wastedPlatesEliminated * 0.65);
    const cateringMoneySavedINR = wastedPlatesEliminated * 1850;
    const co2AvoidedKg = Math.round(kgFoodWastePrevented * 2.5);

    return {
      totalInvited,
      confirmedCount,
      declinedCount,
      pendingCount,
      totalShagun,
      vegTotal,
      nonVegTotal,
      jainTotal,
      eventHeadcounts,
      kgFoodWastePrevented,
      cateringMoneySavedINR,
      co2AvoidedKg,
      wastedPlatesEliminated,
    };
  }, [guests]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Stepper Headcount
  const handleUpdateHeadcount = (delta) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== activeGuestId) return g;
        const newCount = g.allocatedCount + delta;
        if (newCount < 1) return g;
        if (newCount > g.maxGuestsAllowed) {
          setShowPlusOneModal(true);
          return g;
        }
        return { ...g, allocatedCount: newCount, rsvpStatus: 'confirmed' };
      })
    );
  };

  // Event toggle
  const handleToggleEvent = (eventId) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== activeGuestId) return g;
        return {
          ...g,
          events: { ...g.events, [eventId]: !g.events[eventId] },
          rsvpStatus: 'confirmed',
        };
      })
    );
  };

  // Submit Soft Decline & Shagun
  const handleConfirmSoftDecline = (withShagun) => {
    const amount = withShagun ? (customShagun ? parseInt(customShagun, 10) || 0 : selectedShagunAmount) : 0;
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== activeGuestId) return g;
        return {
          ...g,
          rsvpStatus: 'declined',
          allocatedCount: 0,
          shagunSent: amount,
          blessing: blessingNote || 'Heartfelt congratulations & infinite blessings to the couple! 🌸',
          events: { haldi: false, sangeet: false, wedding: false, reception: false },
        };
      })
    );
    setShowSoftDeclineModal(false);
    if (withShagun) {
      setShowShagunSuccessModal(true);
    } else {
      triggerToast('Warm blessings recorded for Rohan & Ananya!');
    }
  };

  // Plus-One Submit
  const handleRequestPlusOne = () => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== activeGuestId) return g;
        return {
          ...g,
          plusOneRequested: true,
          plusOneReason: plusOneReasonText || 'Family elder requested to accompany',
        };
      })
    );
    setShowPlusOneModal(false);
    setPlusOneReasonText('');
    triggerToast('Request dispatched to Host Protocol Queue for boundary approval.');
  };

  // Host Plus-One Action
  const handleHostApprovePlusOne = (guestId, approve) => {
    setGuests((prev) =>
      prev.map((g) => {
        if (g.id !== guestId) return g;
        if (approve) {
          return {
            ...g,
            maxGuestsAllowed: g.maxGuestsAllowed + 1,
            allocatedCount: g.allocatedCount + 1,
            plusOneRequested: false,
          };
        } else {
          return { ...g, plusOneRequested: false };
        }
      })
    );
    triggerToast(approve ? 'Seat cap elevated by +1 for guest!' : 'Request politely declined.');
  };

  // Simulated WhatsApp Broadcast
  const handleSendWhatsAppBlast = () => {
    setShowWhatsAppNudgeModal(false);
    triggerToast(`Automated WhatsApp catering reminders dispatched to ${stats.pendingCount} pending families!`);
  };

  return (
    <div className="min-h-screen bg-[#070406] text-neutral-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden">
      {/* Lavish Ambient Radial Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/10 via-rose-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-950/20 via-amber-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Lavish Toast */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#160c12]/95 border border-amber-400/40 text-amber-200 px-6 py-3.5 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center space-x-3 animate-fade-in">
          <DiyaIcon className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-xs font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Top Royal Header */}
      <header className="border-b border-amber-500/20 bg-[#0c0609]/90 backdrop-blur-xl sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Royal Crest */}
          <div className="flex items-center space-x-3.5">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-rose-600 to-amber-400 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-b from-[#240f16] to-[#0f060a] border border-amber-400/40 flex items-center justify-center shadow-lg">
                <LotusIcon className="w-6 h-6 text-amber-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl tracking-wider font-bold bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  ShaadiSync
                </span>
                <span className="text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 to-emerald-500/15 text-amber-300 border border-amber-400/30 font-semibold shadow-sm">
                  ✦ Royal Precision
                </span>
              </div>
              <p className="text-[11px] text-amber-200/60 font-serif italic tracking-wide">
                Sustainable Indian Wedding Guest Management & Conscious Luxury
              </p>
            </div>
          </div>

          {/* Quick Evaluator Guest Switcher */}
          <div className="flex items-center space-x-2 bg-[#170a10]/80 border border-amber-500/30 px-3.5 py-1.5 rounded-2xl shadow-inner text-xs">
            <span className="text-amber-200/60 text-[11px] uppercase tracking-wider font-semibold">Guest Link:</span>
            <select
              value={activeGuestId}
              onChange={(e) => setActiveGuestId(e.target.value)}
              className="bg-transparent text-amber-300 font-serif font-bold focus:outline-none cursor-pointer"
            >
              {guests.map((g) => (
                <option key={g.id} value={g.id} className="bg-[#12070c] text-neutral-200">
                  {g.name} ({g.rsvpStatus.toUpperCase()} • Cap: {g.maxGuestsAllowed})
                </option>
              ))}
            </select>
          </div>

          {/* Lavish View Mode Switchers */}
          <div className="flex items-center bg-[#13070d] p-1 rounded-2xl border border-amber-500/25 shadow-lg text-xs">
            <button
              onClick={() => setActiveTab('guest')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-medium tracking-wide transition-all ${
                activeTab === 'guest'
                  ? 'bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)] font-semibold'
                  : 'text-neutral-400 hover:text-amber-200'
              }`}
            >
              <RoyalCrest className="w-4 h-4" />
              <span>Guest E-Vite</span>
            </button>
            <button
              onClick={() => setActiveTab('host')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-medium tracking-wide transition-all ${
                activeTab === 'host'
                  ? 'bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)] font-semibold'
                  : 'text-neutral-400 hover:text-amber-200'
              }`}
            >
              <CrownIcon className="w-4 h-4" />
              <span>Host Command</span>
            </button>
            <button
              onClick={() => setActiveTab('kitchen')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-medium tracking-wide transition-all ${
                activeTab === 'kitchen'
                  ? 'bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)] font-semibold'
                  : 'text-neutral-400 hover:text-amber-200'
              }`}
            >
              <ChefIcon className="w-4 h-4" />
              <span>Kitchen BEO</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        {/* ======================================================== */}
        {/* TAB 1: LAVISH GUEST FLOW (ROYAL E-VITE & RSVP)            */}
        {/* ======================================================== */}
        {activeTab === 'guest' && (
          <div className="flex flex-col items-center justify-center">
            
            {/* Viewport Width Switcher */}
            <div className="w-full max-w-md flex justify-between items-center mb-4 text-xs text-amber-200/70 font-serif">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wide">Personalized WhatsApp Link</span>
              </span>
              <button
                onClick={() => setPhoneFrameMode(!phoneFrameMode)}
                className="hover:text-amber-300 underline underline-offset-4 transition-colors"
              >
                {phoneFrameMode ? 'Expand Fullscreen' : 'Show Gold Phone Shell'}
              </button>
            </div>

            {/* Smartphone Shell with Champagne Gold Bezel */}
            <div
              className={`w-full transition-all duration-300 relative ${
                phoneFrameMode
                  ? 'max-w-md border-[5px] border-amber-500/40 rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(217,119,6,0.15)] bg-gradient-to-b from-[#13070d] via-[#10050a] to-[#0a0306] overflow-hidden'
                  : 'max-w-2xl bg-gradient-to-b from-[#13070d] via-[#10050a] to-[#0a0306] border border-amber-500/30 rounded-3xl p-6 shadow-2xl'
              }`}
            >
              {/* Speaker Notch */}
              {phoneFrameMode && (
                <div className="h-7 bg-[#0c0408] flex justify-center items-center pt-2 border-b border-amber-500/10">
                  <div className="w-24 h-4 bg-[#1e0a13] rounded-full border border-amber-500/20" />
                </div>
              )}

              {/* Royal E-Vite Inside Phone */}
              <div className="p-6 sm:p-7 space-y-6">
                
                {/* Traditional Auspicious Top Motif */}
                <div className="text-center space-y-3 pt-2 border-b border-amber-500/20 pb-6 relative">
                  <div className="text-[11px] font-serif tracking-[0.3em] uppercase text-amber-300/80">
                    ॥ श्री गणेशाय नमः ॥
                  </div>

                  {/* Golden Monogram Emblem */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-[#3a1823] via-[#1a0a10] to-[#451b27] border-2 border-amber-400/50 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                    <span className="font-serif text-lg font-bold text-amber-200 tracking-wider">R ✦ A</span>
                  </div>

                  <div>
                    <h1 className="text-3xl font-serif text-neutral-100 font-bold tracking-wider">
                      Rohan <span className="font-serif italic font-normal text-amber-400">&</span> Ananya
                    </h1>
                    <p className="text-xs text-amber-200/80 font-serif tracking-widest uppercase mt-1">
                      Fairmont Palace • Jaipur, Rajasthan
                    </p>
                    <p className="text-[11px] text-neutral-400 font-serif italic mt-0.5">
                      November 14th & 15th, 2026
                    </p>
                  </div>

                  {/* Personalized Guest Crest */}
                  <div className="pt-2">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/15 to-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-serif tracking-wide shadow-inner">
                      Warmly Welcoming: <strong className="text-white font-semibold underline underline-offset-2">{activeGuest.name}</strong>
                    </span>
                  </div>
                </div>

                {/* FEATURE 1: Attendance Decision - Joyfully Accept vs Soft Decline */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200/80">
                      Celebration RSVP
                    </label>
                    <span className="text-[11px] text-amber-400/70 font-serif italic">SDG 12 Zero-Waste Protocol</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      onClick={() => {
                        setGuests((prev) =>
                          prev.map((g) =>
                            g.id === activeGuestId
                              ? { ...g, rsvpStatus: 'confirmed', allocatedCount: Math.max(1, g.allocatedCount) }
                              : g
                          )
                        );
                        triggerToast('Attendance joyfully confirmed!');
                      }}
                      className={`py-3.5 px-3 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${
                        activeGuest.rsvpStatus === 'confirmed'
                          ? 'bg-gradient-to-b from-amber-500 to-amber-600 text-neutral-950 border-amber-300 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                          : 'bg-[#180911]/80 border-amber-500/25 text-neutral-300 hover:border-amber-400/50'
                      }`}
                    >
                      <DiyaIcon className="w-5 h-5 text-current" />
                      <span className="text-xs font-serif tracking-wider uppercase font-bold">Joyfully Accept</span>
                    </button>

                    <button
                      onClick={() => setShowSoftDeclineModal(true)}
                      className={`py-3.5 px-3 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${
                        activeGuest.rsvpStatus === 'declined'
                          ? 'bg-gradient-to-b from-rose-950 to-neutral-950 border-rose-500/60 text-rose-200 font-bold shadow-lg'
                          : 'bg-[#180911]/80 border-amber-500/25 text-neutral-300 hover:border-amber-400/50'
                      }`}
                    >
                      <ShagunEnvelopeIcon className="w-5 h-5 text-current" />
                      <span className="text-xs font-serif tracking-wider uppercase font-bold">Cannot Attend</span>
                    </button>
                  </div>

                  {/* Soft Decline Confirmation Banner */}
                  {activeGuest.rsvpStatus === 'declined' && (
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-[#1d0b13] to-rose-950/40 border border-rose-500/40 text-xs space-y-2">
                      <div className="flex items-center space-x-2 text-rose-300 font-serif font-bold">
                        <ShagunEnvelopeIcon className="w-4 h-4 text-amber-400" />
                        <span>Digital Shagun & Blessings Recorded</span>
                      </div>
                      <p className="text-neutral-300 font-serif text-[11px] leading-relaxed">
                        {activeGuest.shagunSent > 0
                          ? `You showered the couple with ₹${activeGuest.shagunSent.toLocaleString()} in Digital Shagun and heartfelt prayers!`
                          : `Your warm wishes have been sent to Rohan & Ananya.`}
                      </p>
                      <button
                        onClick={() => setShowSoftDeclineModal(true)}
                        className="text-amber-400 hover:underline font-serif text-xs font-bold"
                      >
                        Edit Blessing Note or Shagun
                      </button>
                    </div>
                  )}
                </div>

                {/* FEATURE 2: Hard Plus-One Cap (Royal Boundary Control) */}
                {activeGuest.rsvpStatus === 'confirmed' && (
                  <div className="bg-[#190912]/90 border border-amber-500/30 rounded-3xl p-5 space-y-3.5 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                          Attending Headcount
                        </div>
                        <p className="text-[11px] text-amber-200/60 font-serif">
                          Invitation Seat Limit: <strong className="text-amber-400 font-bold">{activeGuest.maxGuestsAllowed} Guests</strong>
                        </p>
                      </div>

                      {/* Headcount Stepper */}
                      <div className="flex items-center space-x-2.5 bg-[#0e0409] p-1.5 rounded-2xl border border-amber-500/30 shadow-inner">
                        <button
                          onClick={() => handleUpdateHeadcount(-1)}
                          disabled={activeGuest.allocatedCount <= 1}
                          className="w-8 h-8 rounded-xl bg-[#220d18] hover:bg-[#2e1222] disabled:opacity-30 disabled:hover:bg-[#220d18] flex items-center justify-center font-bold text-amber-200 transition-colors"
                        >
                          –
                        </button>
                        <span className="w-7 text-center font-serif text-base font-bold text-amber-100">
                          {activeGuest.allocatedCount}
                        </span>
                        <button
                          onClick={() => handleUpdateHeadcount(1)}
                          className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 flex items-center justify-center font-bold text-neutral-950 transition-colors shadow-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Cap Policy Alert & Request Extra CTA */}
                    <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs font-serif">
                      <div className="flex items-center space-x-1.5 text-neutral-400 text-[11px]">
                        <LeafGoldIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Strict boundary prevents banquet food waste.</span>
                      </div>
                      {activeGuest.plusOneRequested ? (
                        <span className="text-amber-300 font-serif text-[11px] bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                          +1 Pending Host Approval
                        </span>
                      ) : (
                        <button
                          onClick={() => setShowPlusOneModal(true)}
                          className="text-amber-300 font-serif font-bold text-[11px] hover:text-amber-200 underline"
                        >
                          Request +1
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Dietary Preference Selection */}
                {activeGuest.rsvpStatus === 'confirmed' && (
                  <div className="space-y-2.5">
                    <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200 flex items-center justify-between">
                      <span>Dietary Master Selection</span>
                      <span className="text-[10px] text-amber-400/60 lowercase italic">Synced with Palace Kitchen</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'veg', label: 'Shakahari Veg', icon: '🌱' },
                        { id: 'non-veg', label: 'Royal Non-Veg', icon: '🍗' },
                        { id: 'jain', label: 'Pure Jain', icon: '🕊️' },
                      ].map((diet) => (
                        <button
                          key={diet.id}
                          onClick={() => {
                            setGuests((prev) =>
                              prev.map((g) => (g.id === activeGuestId ? { ...g, dietPreference: diet.id } : g))
                            );
                            triggerToast(`Dietary preference set to ${diet.label}`);
                          }}
                          className={`p-3 rounded-2xl border text-center transition-all ${
                            activeGuest.dietPreference === diet.id
                              ? 'bg-gradient-to-b from-amber-500/25 to-rose-900/20 border-amber-400 text-amber-200 font-serif font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                              : 'bg-[#15070e]/80 border-amber-500/20 text-neutral-400 hover:border-amber-400/40'
                          }`}
                        >
                          <div className="text-lg">{diet.icon}</div>
                          <div className="text-[11px] font-serif mt-1 font-semibold">{diet.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* FEATURE 3: Multi-Event Timeline RSVP */}
                {activeGuest.rsvpStatus === 'confirmed' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                        Ceremony-by-Ceremony Attendance
                      </label>
                      <span className="text-[11px] text-amber-400/60 font-serif italic">Per-function plate firing</span>
                    </div>

                    <div className="space-y-3">
                      {ROYAL_WEDDING_EVENTS.map((event) => {
                        const isAttending = activeGuest.events[event.id];
                        return (
                          <div
                            key={event.id}
                            className={`p-4 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                              isAttending
                                ? 'bg-gradient-to-r ' + event.bannerGradient + ' border-amber-500/40 shadow-sm'
                                : 'bg-[#12060b]/40 border-amber-500/15 opacity-55'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-base">{event.iconEmoji}</span>
                                  <h4 className="text-xs font-serif font-bold tracking-wide text-neutral-100">
                                    {event.title}
                                  </h4>
                                </div>
                                <p className="text-[11px] text-amber-200/70 font-serif">{event.sub}</p>
                                <p className="text-[10px] text-neutral-400 font-serif">📍 {event.venue}</p>
                                <p className="text-[10px] text-amber-300/80 font-serif font-medium">
                                  👗 Attire: {event.dressCode}
                                </p>
                              </div>

                              <button
                                onClick={() => handleToggleEvent(event.id)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold border transition-colors shrink-0 ${
                                  isAttending
                                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-400/60 shadow-sm'
                                    : 'bg-[#1f0b14] text-neutral-300 border-amber-500/30'
                                }`}
                              >
                                {isAttending ? 'Attending ✓' : 'Skip'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Final Confirmation Button */}
                <div className="pt-2">
                  <button
                    onClick={() => triggerToast('RSVP confirmed & synced live with Host and Kitchen BEO!')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 text-white font-serif tracking-widest uppercase font-bold text-xs shadow-[0_10px_25px_rgba(217,119,6,0.35)] hover:opacity-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <LotusIcon className="w-4 h-4 text-amber-300" />
                    <span>Confirm & Lock My Attendance</span>
                  </button>
                  <p className="text-center text-[10px] text-amber-200/50 font-serif italic mt-2.5">
                    ✦ Instant live sync with Royal Banquet Manager & Head Chef ✦
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: HOST DASHBOARD & SUSTAINABLE IMPACT               */}
        {/* ======================================================== */}
        {activeTab === 'host' && (
          <div className="space-y-7">
            
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-amber-500/20">
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wider text-neutral-100 flex items-center space-x-3">
                  <span>Royal Wedding Command & Guest Directory</span>
                  <span className="text-[10px] font-sans uppercase tracking-widest px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/40">
                    Live Reactive Sync
                  </span>
                </h2>
                <p className="text-xs text-amber-200/70 font-serif mt-1">
                  Rohan & Ananya • Imperial Royal Wedding Guest Analytics
                </p>
              </div>

              {/* Nudge Trigger */}
              <button
                onClick={() => setShowWhatsAppNudgeModal(true)}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_4px_20px_rgba(5,150,105,0.35)] transition-all"
              >
                <MessageWhatsAppIcon className="w-4 h-4" />
                <span>Send 48-Hour WhatsApp Nudge</span>
              </button>
            </div>

            {/* UN SDG 12 Hero Card (Annapurna Zero Waste) */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1b2b18]/60 via-[#100b12] to-[#0c0508] border border-emerald-500/40 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-serif font-bold uppercase tracking-widest">
                    <LeafGoldIcon className="w-4 h-4 text-emerald-400" />
                    <span>Annapurna Protocol • UN SDG 12 Sustainable Consumption</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-neutral-100">
                    {stats.kgFoodWastePrevented} kg Premium Catering Food Saved
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-2xl font-serif leading-relaxed">
                    By replacing the traditional unmanaged 30% Indian wedding inflation buffer with ShaadiSync precision guest RSVPs, this wedding has eliminated approximately{' '}
                    <strong className="text-emerald-300 font-semibold">{stats.wastedPlatesEliminated} unserved plates</strong> across 4 ceremonies without compromising royal hospitality.
                  </p>
                </div>

                {/* SDG Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 shrink-0">
                  <div className="bg-[#0b0508]/80 border border-emerald-500/30 p-4 rounded-2xl text-center shadow-inner">
                    <div className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest">Catering Saved</div>
                    <div className="text-xl font-serif font-bold text-emerald-400 mt-1">₹{stats.cateringMoneySavedINR.toLocaleString()}</div>
                  </div>
                  <div className="bg-[#0b0508]/80 border border-emerald-500/30 p-4 rounded-2xl text-center shadow-inner">
                    <div className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest">CO2e Abated</div>
                    <div className="text-xl font-serif font-bold text-emerald-400 mt-1">{stats.co2AvoidedKg} kg</div>
                  </div>
                  <div className="bg-[#0b0508]/80 border border-amber-500/30 p-4 rounded-2xl text-center col-span-2 sm:col-span-1 shadow-inner">
                    <div className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest">Digital Shagun</div>
                    <div className="text-xl font-serif font-bold text-amber-300 mt-1">₹{stats.totalShagun.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* KPI Summary Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#14060e]/80 border border-amber-500/25 p-5 rounded-3xl shadow-sm">
                <div className="text-xs font-serif uppercase tracking-wider text-amber-200/70">Total Capacity Invited</div>
                <div className="text-3xl font-serif font-bold text-neutral-100 mt-1.5">{stats.totalInvited}</div>
                <div className="text-[11px] text-neutral-400 font-serif mt-1">Strict boundary control</div>
              </div>

              <div className="bg-[#14060e]/80 border border-amber-500/25 p-5 rounded-3xl shadow-sm">
                <div className="text-xs font-serif uppercase tracking-wider text-amber-200/70">Confirmed Heads</div>
                <div className="text-3xl font-serif font-bold text-emerald-400 mt-1.5">{stats.confirmedCount}</div>
                <div className="text-[11px] text-neutral-400 font-serif mt-1">
                  Veg: {stats.vegTotal} | Non-Veg: {stats.nonVegTotal} | Jain: {stats.jainTotal}
                </div>
              </div>

              <div className="bg-[#14060e]/80 border border-amber-500/25 p-5 rounded-3xl shadow-sm">
                <div className="text-xs font-serif uppercase tracking-wider text-amber-200/70">Soft Declines</div>
                <div className="text-3xl font-serif font-bold text-rose-400 mt-1.5">{stats.declinedCount}</div>
                <div className="text-[11px] text-neutral-400 font-serif mt-1">100% left blessings & shagun</div>
              </div>

              <div className="bg-[#14060e]/80 border border-amber-500/25 p-5 rounded-3xl shadow-sm">
                <div className="text-xs font-serif uppercase tracking-wider text-amber-200/70">Pending Invites</div>
                <div className="text-3xl font-serif font-bold text-amber-400 mt-1.5">{stats.pendingCount}</div>
                <div className="text-[11px] text-neutral-400 font-serif mt-1">Ready for 48h WhatsApp blast</div>
              </div>
            </div>

            {/* Function Breakdown Cards */}
            <div className="bg-[#12060c]/90 border border-amber-500/25 rounded-3xl p-6 space-y-4">
              <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                Attendance Breakdown per Ceremony
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ROYAL_WEDDING_EVENTS.map((ev) => {
                  const d = stats.eventHeadcounts[ev.id];
                  const vPct = d.total > 0 ? (d.veg / d.total) * 100 : 0;
                  const nvPct = d.total > 0 ? (d.nonVeg / d.total) * 100 : 0;
                  const jPct = d.total > 0 ? (d.jain / d.total) * 100 : 0;

                  return (
                    <div key={ev.id} className="bg-[#0b0407] border border-amber-500/20 rounded-2xl p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-neutral-200">{ev.title}</span>
                        <span className="text-xs font-serif font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                          {d.total} Heads
                        </span>
                      </div>
                      <div className="text-[11px] text-amber-200/60 font-serif">{ev.sub}</div>
                      <div className="w-full bg-[#1e0a13] h-2 rounded-full overflow-hidden flex">
                        <div style={{ width: `${vPct}%` }} className="bg-emerald-500 h-full" />
                        <div style={{ width: `${nvPct}%` }} className="bg-amber-500 h-full" />
                        <div style={{ width: `${jPct}%` }} className="bg-blue-400 h-full" />
                      </div>
                      <div className="flex justify-between text-[10px] font-serif pt-1">
                        <span className="text-emerald-400">🌱 {d.veg} Veg</span>
                        <span className="text-amber-400">🍗 {d.nonVeg} Non-Veg</span>
                        <span className="text-blue-400">🕊️ {d.jain} Jain</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pending Boundary Requests (+1 Queue) */}
            {guests.some((g) => g.plusOneRequested) && (
              <div className="bg-[#241019]/60 border border-amber-400/50 rounded-3xl p-6 space-y-3.5 shadow-lg">
                <div className="flex items-center space-x-2 text-amber-300">
                  <DiyaIcon className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xs font-serif font-bold uppercase tracking-widest">
                    Pending Plus-One Requests (Host Boundary Approval Queue)
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {guests
                    .filter((g) => g.plusOneRequested)
                    .map((g) => (
                      <div
                        key={g.id}
                        className="bg-[#12060b] border border-amber-500/30 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="text-sm font-serif font-bold text-neutral-100">
                            {g.name} <span className="text-xs font-normal text-amber-200/60">({g.phone})</span>
                          </div>
                          <p className="text-xs text-amber-200 font-serif italic mt-0.5">
                            Reason: &ldquo;{g.plusOneReason}&rdquo;
                          </p>
                          <p className="text-[11px] text-neutral-400 font-serif">
                            Current Seat Cap: {g.maxGuestsAllowed} • Requested Cap: {g.maxGuestsAllowed + 1}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleHostApprovePlusOne(g.id, true)}
                            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl text-xs font-serif font-bold transition-all shadow-sm"
                          >
                            Approve +1 Seat
                          </button>
                          <button
                            onClick={() => handleHostApprovePlusOne(g.id, false)}
                            className="px-4 py-2 bg-[#260e1b] hover:bg-[#381428] text-neutral-300 rounded-xl text-xs font-serif font-medium transition-colors border border-amber-500/20"
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Master Guest Roster */}
            <div className="bg-[#12060c]/90 border border-amber-500/25 rounded-3xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                  Master Guest Roster & RSVP Status Matrix
                </h3>
                <span className="text-xs text-amber-200/60 font-serif">{guests.length} Families Registered</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-serif text-neutral-300">
                  <thead className="bg-[#0b0407] text-amber-300/80 uppercase tracking-widest text-[10px] border-b border-amber-500/20">
                    <tr>
                      <th className="py-3.5 px-3">Family / Guest</th>
                      <th className="py-3.5 px-3">Status</th>
                      <th className="py-3.5 px-3">Headcount</th>
                      <th className="py-3.5 px-3">Diet</th>
                      <th className="py-3.5 px-3">Haldi</th>
                      <th className="py-3.5 px-3">Sangeet</th>
                      <th className="py-3.5 px-3">Pheras</th>
                      <th className="py-3.5 px-3">Reception</th>
                      <th className="py-3.5 px-3">Shagun / Note</th>
                      <th className="py-3.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/10">
                    {guests.map((g) => (
                      <tr key={g.id} className="hover:bg-amber-500/5 transition-colors">
                        <td className="py-3.5 px-3 font-semibold text-neutral-100">
                          {g.name}
                          <div className="text-[10px] text-amber-200/50 font-sans">{g.phone}</div>
                        </td>
                        <td className="py-3.5 px-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                              g.rsvpStatus === 'confirmed'
                                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                : g.rsvpStatus === 'declined'
                                ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                                : 'bg-amber-500/10 text-amber-300 border-amber-400/30'
                            }`}
                          >
                            {g.rsvpStatus.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-bold text-neutral-100">
                          {g.allocatedCount} <span className="text-neutral-500 font-normal">/ {g.maxGuestsAllowed} max</span>
                        </td>
                        <td className="py-3.5 px-3 uppercase text-[10px] font-bold">
                          {g.dietPreference === 'veg' && <span className="text-emerald-400">🌱 Veg</span>}
                          {g.dietPreference === 'non-veg' && <span className="text-amber-400">🍗 Non-Veg</span>}
                          {g.dietPreference === 'jain' && <span className="text-blue-400">🕊️ Jain</span>}
                        </td>
                        <td className="py-3.5 px-3">{g.events.haldi ? '✨' : '—'}</td>
                        <td className="py-3.5 px-3">{g.events.sangeet ? '✨' : '—'}</td>
                        <td className="py-3.5 px-3">{g.events.wedding ? '✨' : '—'}</td>
                        <td className="py-3.5 px-3">{g.events.reception ? '✨' : '—'}</td>
                        <td className="py-3.5 px-3 max-w-xs truncate text-[11px] text-neutral-300">
                          {g.shagunSent > 0 ? (
                            <span className="text-amber-300 font-bold">₹{g.shagunSent.toLocaleString()} Shagun</span>
                          ) : g.blessing ? (
                            <span title={g.blessing}>{g.blessing.substring(0, 24)}...</span>
                          ) : (
                            '—'
                          )}
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            onClick={() => {
                              setActiveGuestId(g.id);
                              setActiveTab('guest');
                            }}
                            className="text-amber-400 hover:text-amber-300 underline font-bold text-xs"
                          >
                            Simulate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: KITCHEN PORTAL (ZERO-PII CATERER VIEW)            */}
        {/* ======================================================== */}
        {activeTab === 'kitchen' && (
          <div className="space-y-7">
            
            {/* Header */}
            <div className="bg-[#12060c]/90 border border-amber-500/25 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#331320] to-[#1a0910] border border-amber-400/40 text-amber-300">
                  <ChefIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-neutral-100">
                    Live Palace Kitchen & Catering Inventory Portal
                  </h2>
                  <p className="text-xs text-amber-200/60 font-serif">
                    Live BEO (Banquet Event Order) Headcounts • Zero Personal Identifiable Information (Zero PII)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-xl border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-serif">Live Kitchen Feed</span>
                </div>
                <button
                  onClick={() => setShowKitchenPrintView(true)}
                  className="px-4 py-2 bg-[#220d18] hover:bg-[#2f1222] text-amber-200 border border-amber-500/30 rounded-xl text-xs font-serif font-bold flex items-center space-x-2 transition-colors"
                >
                  <PrinterIcon className="w-4 h-4" />
                  <span>Print Kitchen BEO Docket</span>
                </button>
              </div>
            </div>

            {/* Zero-PII Compliance Seal */}
            <div className="bg-[#0b0407]/90 border border-amber-500/20 rounded-2xl p-4 flex items-center space-x-3 text-xs text-neutral-300 font-serif">
              <ShieldCheckIcon className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-amber-300">Zero-PII Caterer Safety Shield:</strong> Executive kitchen personnel are strictly provided aggregated food preparation counts, dietary splits (Veg vs. Non-Veg vs. Jain), and precision 5% safety buffer metrics. No guest names, personal contact numbers, or monetary gifts are exposed.
              </span>
            </div>

            {/* Culinary Event Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {ROYAL_WEDDING_EVENTS.map((event) => {
                const evData = stats.eventHeadcounts[event.id];
                const bufferPlates = Math.ceil(evData.total * 0.05); // Precision 5% buffer
                const totalPlatesToFire = evData.total + bufferPlates;

                return (
                  <div
                    key={event.id}
                    className="bg-[#12060c]/90 border border-amber-500/25 rounded-3xl p-6 space-y-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b border-amber-500/20 pb-3.5">
                      <div>
                        <h3 className="font-serif font-bold text-neutral-100 text-base">{event.title}</h3>
                        <p className="text-xs text-amber-200/60 font-serif">{event.sub}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-serif font-bold text-amber-300">{totalPlatesToFire}</div>
                        <div className="text-[10px] text-neutral-400 font-serif uppercase tracking-widest font-bold">
                          Plates to Fire
                        </div>
                      </div>
                    </div>

                    {/* Diet Split Chips */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#090306] border border-emerald-500/30 p-3.5 rounded-2xl text-center">
                        <div className="text-xs text-emerald-400 font-serif font-bold">🌱 Pure Veg</div>
                        <div className="text-xl font-serif font-bold text-neutral-100 mt-1">{evData.veg}</div>
                        <div className="text-[10px] text-neutral-400 font-serif">
                          {evData.total > 0 ? Math.round((evData.veg / evData.total) * 100) : 0}% of function
                        </div>
                      </div>

                      <div className="bg-[#090306] border border-amber-500/30 p-3.5 rounded-2xl text-center">
                        <div className="text-xs text-amber-400 font-serif font-bold">🍗 Royal Non-Veg</div>
                        <div className="text-xl font-serif font-bold text-neutral-100 mt-1">{evData.nonVeg}</div>
                        <div className="text-[10px] text-neutral-400 font-serif">
                          {evData.total > 0 ? Math.round((evData.nonVeg / evData.total) * 100) : 0}% of function
                        </div>
                      </div>

                      <div className="bg-[#090306] border border-blue-500/30 p-3.5 rounded-2xl text-center">
                        <div className="text-xs text-blue-400 font-serif font-bold">🕊️ Strict Jain</div>
                        <div className="text-xl font-serif font-bold text-neutral-100 mt-1">{evData.jain}</div>
                        <div className="text-[10px] text-neutral-400 font-serif">
                          {evData.total > 0 ? Math.round((evData.jain / evData.total) * 100) : 0}% of function
                        </div>
                      </div>
                    </div>

                    {/* Buffer & Waste Calculations */}
                    <div className="bg-[#0a0306]/80 border border-amber-500/20 p-3.5 rounded-2xl space-y-1.5 text-xs font-serif">
                      <div className="flex justify-between text-neutral-300">
                        <span>Confirmed Guest Attendance:</span>
                        <span className="font-bold">{evData.total} guests</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Smart Safety Buffer (+5%):</span>
                        <span className="font-bold text-amber-300">+{bufferPlates} safety buffer plates</span>
                      </div>
                      <div className="flex justify-between text-emerald-400 pt-1 border-t border-amber-500/15 font-semibold">
                        <span>Avoided Over-prep vs 30% Buffer:</span>
                        <span>-{Math.round(evData.total * 0.25)} plates prevented</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* NGO Redistribution Protocol */}
            <div className="bg-[#12060c]/90 border border-amber-500/25 rounded-3xl p-6 space-y-3 shadow-md">
              <div className="flex items-center space-x-2 text-emerald-400">
                <LeafGoldIcon className="w-5 h-5" />
                <h3 className="text-xs font-serif font-bold uppercase tracking-widest">
                  Surplus Redistribution Protocol (Robin Hood Army / Feeding India)
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-serif leading-relaxed">
                In adherence with UN SDG 12, any surplus safety buffer food remaining unserved will be gathered in food-grade insulated stainless-steel warmers and dispatched to partner hunger relief networks within 90 minutes of banquet conclusion.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-serif text-neutral-400 pt-1">
                <span className="px-3 py-1 rounded-xl bg-[#090306] border border-amber-500/20">
                  🚚 Insulated Van Transfer: Pre-Booked
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#090306] border border-amber-500/20">
                  🌡️ Thermal Quality Control: Mandated
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#090306] border border-amber-500/20 text-emerald-400 font-semibold">
                  Zero Food Sent to Landfills
                </span>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* MODAL 1: SOFT DECLINE & DIGITAL SHAGUN LIFAFA            */}
      {/* ======================================================== */}
      {showSoftDeclineModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#240f18] via-[#160810] to-[#0d0408] border-2 border-amber-400/50 rounded-3xl max-w-md w-full p-7 space-y-6 shadow-[0_20px_70px_rgba(0,0,0,0.9)] relative">
            <button
              onClick={() => setShowSoftDeclineModal(false)}
              className="absolute top-4 right-4 text-amber-200/60 hover:text-amber-200 p-1 font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-amber-600 to-rose-700 border-2 border-amber-300 flex items-center justify-center shadow-lg">
                <LotusIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-100">
                We Will Miss You Dearly!
              </h3>
              <p className="text-xs text-neutral-300 font-serif leading-relaxed">
                Even though you cannot be present in Jaipur, your warm blessings and love will light up Rohan & Ananya&apos;s special day.
              </p>
            </div>

            {/* Blessing Note */}
            <div className="space-y-2">
              <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                Shower the Couple with Blessings
              </label>
              <textarea
                rows={3}
                value={blessingNote}
                onChange={(e) => setBlessingNote(e.target.value)}
                placeholder="Wishing you both a lifetime of happiness, laughter, and abundant adventures together..."
                className="w-full bg-[#0a0307] border border-amber-500/30 rounded-2xl p-3.5 text-xs font-serif text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Traditional Digital Shagun Lifafa Component */}
            <div className="space-y-3.5 bg-gradient-to-b from-[#2b101d] to-[#15070e] border border-amber-400/40 p-5 rounded-2xl shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-widest">
                  <ShagunEnvelopeIcon className="w-5 h-5 text-amber-400" />
                  <span>Send Digital Shagun</span>
                </div>
                <span className="text-[10px] text-amber-200/60 font-serif italic">Auspicious +₹1 Included</span>
              </div>

              {/* Shagun Chips */}
              <div className="grid grid-cols-4 gap-2">
                {[501, 1101, 2101, 5001].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedShagunAmount(amt);
                      setCustomShagun('');
                    }}
                    className={`py-2 px-1 rounded-xl text-xs font-serif font-bold border transition-all ${
                      selectedShagunAmount === amt && !customShagun
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                        : 'bg-[#180912] border-amber-500/30 text-amber-200 hover:border-amber-400/50'
                    }`}
                  >
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Shagun Input */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-serif text-amber-200/70">Or Custom:</span>
                <input
                  type="number"
                  placeholder="₹ Amount"
                  value={customShagun}
                  onChange={(e) => setCustomShagun(e.target.value)}
                  className="flex-1 bg-[#0b0307] border border-amber-500/30 rounded-xl px-3 py-1.5 text-xs font-serif text-neutral-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Simulated UPI Rails */}
              <div className="pt-2 border-t border-amber-500/20 text-[11px] font-serif text-amber-200/70 space-y-1.5">
                <div className="flex justify-between">
                  <span>Instant UPI Rail:</span>
                  <span className="text-emerald-400 font-medium">Couple&apos;s Shagun Account</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-serif font-semibold">
                  <div className="bg-[#12050c] border border-amber-500/20 py-1.5 rounded-lg text-neutral-300">Google Pay</div>
                  <div className="bg-[#12050c] border border-amber-500/20 py-1.5 rounded-lg text-neutral-300">PhonePe</div>
                  <div className="bg-[#12050c] border border-amber-500/20 py-1.5 rounded-lg text-neutral-300">BHIM / UPI</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleConfirmSoftDecline(true)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-rose-700 to-amber-600 text-white font-serif uppercase tracking-wider font-bold text-xs shadow-[0_5px_20px_rgba(217,119,6,0.35)] hover:opacity-95 transition-all flex items-center justify-center space-x-2"
              >
                <SparklesIcon className="w-4 h-4 text-amber-300" />
                <span>
                  Confirm Blessing & Send Shagun (₹{customShagun || selectedShagunAmount})
                </span>
              </button>
              <button
                onClick={() => handleConfirmSoftDecline(false)}
                className="w-full py-2.5 rounded-2xl bg-transparent hover:bg-white/5 text-amber-200/60 text-xs font-serif font-medium transition-colors"
              >
                Send Warm Wishes Only (Skip Shagun)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: SHAGUN SUCCESS CELEBRATION                      */}
      {/* ======================================================== */}
      {showShagunSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#240f18] via-[#160810] to-[#0d0408] border-2 border-amber-400/50 rounded-3xl max-w-sm w-full p-7 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-emerald-600 border-2 border-amber-300 flex items-center justify-center shadow-lg animate-bounce">
              <ShagunEnvelopeIcon className="w-8 h-8 text-neutral-950" />
            </div>
            <h3 className="text-xl font-serif font-bold text-neutral-100">
              Shagun Received with Gratitude!
            </h3>
            <p className="text-xs text-neutral-300 font-serif leading-relaxed">
              Your digital blessings and shagun have reached Rohan & Ananya. You have eased the couple&apos;s catering logistics while showering them with boundless love!
            </p>
            <button
              onClick={() => setShowShagunSuccessModal(false)}
              className="w-full py-3 bg-[#240e1b] hover:bg-[#351427] text-amber-200 rounded-xl text-xs font-serif font-bold uppercase tracking-wider border border-amber-400/40 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: REQUEST ADDITIONAL GUEST (+1 CAP OVERRIDE)      */}
      {/* ======================================================== */}
      {showRequestPlusOneModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#240f18] via-[#160810] to-[#0d0408] border-2 border-amber-400/50 rounded-3xl max-w-md w-full p-7 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowPlusOneModal(false)}
              className="absolute top-4 right-4 text-amber-200/60 hover:text-amber-200 p-1 font-bold"
            >
              ✕
            </button>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-amber-300">
                <DiyaIcon className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-serif font-bold text-neutral-100">
                  Party Limit Reached for this Invite
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-serif leading-relaxed">
                To guarantee zero catering food waste and adhere to venue safety caps, headcount additions require host approval.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                Reason / Relationship for Extra Seat
              </label>
              <textarea
                rows={3}
                value={plusOneReasonText}
                onChange={(e) => setPlusOneReasonText(e.target.value)}
                placeholder="e.g. My elderly grandmother is traveling with us and requires assistance..."
                className="w-full bg-[#0a0307] border border-amber-500/30 rounded-2xl p-3.5 text-xs font-serif text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handleRequestPlusOne}
                className="flex-1 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-neutral-950 rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Send Request to Host
              </button>
              <button
                onClick={() => setShowPlusOneModal(false)}
                className="px-4 py-3.5 bg-[#220d18] hover:bg-[#301222] text-neutral-300 rounded-xl text-xs font-serif font-medium transition-colors border border-amber-500/20"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: AUTOMATED 48-HOUR WHATSAPP NUDGE                */}
      {/* ======================================================== */}
      {showWhatsAppNudgeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#240f18] via-[#160810] to-[#0d0408] border-2 border-amber-400/50 rounded-3xl max-w-lg w-full p-7 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowWhatsAppNudgeModal(false)}
              className="absolute top-4 right-4 text-amber-200/60 hover:text-amber-200 p-1 font-bold"
            >
              ✕
            </button>

            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-emerald-400">
                <MessageWhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-serif font-bold text-neutral-100">
                  Automated 48-Hour WhatsApp Catering Nudge
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-serif">
                Normalizes last-minute plan updates without social awkwardness, ensuring precise food preparation.
              </p>
            </div>

            {/* Tone Selector */}
            <div className="space-y-2">
              <label className="text-xs font-serif font-bold uppercase tracking-widest text-amber-200">
                Select Tone & Message Tone
              </label>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-serif">
                <button
                  onClick={() => setSelectedNudgeTone('sdg')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedNudgeTone === 'sdg'
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-[#12060b] border-amber-500/20 text-neutral-400'
                  }`}
                >
                  🌱 Eco-Conscious Zero Waste
                </button>
                <button
                  onClick={() => setSelectedNudgeTone('festive')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedNudgeTone === 'festive'
                      ? 'bg-amber-500/15 border-amber-400 text-amber-200 font-bold'
                      : 'bg-[#12060b] border-amber-500/20 text-neutral-400'
                  }`}
                >
                  🎉 Warm Festive Celebration
                </button>
              </div>
            </div>

            {/* Live Message Preview */}
            <div className="bg-[#0b0307] border border-amber-500/25 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-[11px] text-amber-300 font-serif font-semibold">
                <span>WhatsApp Message Preview</span>
                <span className="text-emerald-400">1-Click RSVP Link</span>
              </div>
              <p className="text-xs text-neutral-200 font-mono bg-[#14060e] p-3 rounded-xl border border-amber-500/15 leading-relaxed">
                {selectedNudgeTone === 'sdg'
                  ? `Namaste from Rohan & Ananya! 🌸 We are finalizing catering numbers for our wedding this weekend to ensure zero food waste (SDG 12). If your travel plans have changed, please tap this link to update your RSVP or send blessings: https://shaadisync.in/r/rohan-ananya 🙏✨`
                  : `Hey from Rohan & Ananya! 🎶 The Sangeet outfits are ready and the dance floor is waiting! We are locking in table seating and dietary counts today. Tap here to confirm your attendance: https://shaadisync.in/r/rohan-ananya 🥂`}
              </p>
            </div>

            <div className="flex justify-between text-xs font-serif text-neutral-400">
              <span>Recipients:</span>
              <span className="font-bold text-amber-300">{stats.pendingCount} Unconfirmed Families</span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handleSendWhatsAppBlast}
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl text-xs font-serif font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageWhatsAppIcon className="w-4 h-4" />
                <span>Send WhatsApp Broadcast</span>
              </button>
              <button
                onClick={() => setShowWhatsAppNudgeModal(false)}
                className="px-4 py-3.5 bg-[#220d18] hover:bg-[#301222] text-neutral-300 rounded-xl text-xs font-serif font-medium transition-colors border border-amber-500/20"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 5: KITCHEN PRINT / BEO SHEET                       */}
      {/* ======================================================== */}
      {showKitchenPrintView && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl relative my-8 font-serif">
            <button
              onClick={() => setShowKitchenPrintView(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 font-bold p-1 text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <div className="border-b-2 border-neutral-900 pb-4 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-black tracking-tight">BANQUET EVENT ORDER (BEO)</h2>
                <p className="text-sm font-semibold text-neutral-700">
                  Fairmont Palace, Jaipur • Rohan & Ananya Royal Wedding
                </p>
                <p className="text-xs text-neutral-500">Zero-PII Master Catering Specification Sheet</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase text-neutral-500">Live Timestamp</div>
                <div className="text-xs font-mono font-semibold">{new Date().toLocaleString()}</div>
                <div className="text-[11px] font-bold text-emerald-700 mt-1">Status: Confirmed</div>
              </div>
            </div>

            {/* Aggregate Table */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Culinary Meal Counts per Function
              </h3>
              <table className="w-full text-left text-xs border border-neutral-300">
                <thead className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <tr>
                    <th className="p-2.5">Function</th>
                    <th className="p-2.5 text-center">Pure Veg</th>
                    <th className="p-2.5 text-center">Non-Veg</th>
                    <th className="p-2.5 text-center">Strict Jain</th>
                    <th className="p-2.5 text-center">+5% Buffer</th>
                    <th className="p-2.5 text-right font-black">Fire Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 font-medium">
                  {ROYAL_WEDDING_EVENTS.map((ev) => {
                    const d = stats.eventHeadcounts[ev.id];
                    const buffer = Math.ceil(d.total * 0.05);
                    return (
                      <tr key={ev.id}>
                        <td className="p-2.5 font-bold text-neutral-900">{ev.title}</td>
                        <td className="p-2.5 text-center">{d.veg}</td>
                        <td className="p-2.5 text-center">{d.nonVeg}</td>
                        <td className="p-2.5 text-center">{d.jain}</td>
                        <td className="p-2.5 text-center text-amber-700 font-bold">+{buffer}</td>
                        <td className="p-2.5 text-right font-black text-neutral-950 text-sm">
                          {d.total + buffer}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-neutral-100 p-4 rounded-xl text-xs space-y-1 text-neutral-700">
              <div className="font-bold text-neutral-900">Banquet & Head Chef Directives:</div>
              <p>• Jain kitchen station must remain strictly separate (no root vegetables, onions, or garlic).</p>
              <p>• Any unconsumed safety buffer food to be collected by Robin Hood Army within 90 minutes.</p>
            </div>

            <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-200">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold font-sans"
              >
                Print BEO Document
              </button>
              <button
                onClick={() => setShowKitchenPrintView(false)}
                className="px-4 py-2.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-xl text-xs font-semibold font-sans"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
