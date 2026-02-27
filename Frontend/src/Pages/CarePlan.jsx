import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Ramesh Iyer",
    specialization: "MD (Internal Medicine)",
    shortSpec: "Internal",
    degree: "MD",
    department: "Medicine",
    experience: "15+ years experience",
    rating: 4.9,
    ratingCount: 690,
    ageRange: "25+ age",
    fee: 400,
    languages: "English, Hindi",
    patients: "4,900+",
    yearsOnPlatform: "4 Years",
    consultations: "2,0",
    initials: "RI",
    gradient: "from-blue-600 to-blue-800",
    education: "M.D. from AIIMS New Delhi",
    hospital: "Apollo Hospital, Delhi",
  },
  {
    id: 2,
    name: "Dr. Anjali Saxena",
    specialization: "MD (Gynecology)",
    shortSpec: "Gynecology",
    degree: "MD",
    department: "Medicine",
    experience: "12+ years experience",
    rating: 4.8,
    ratingCount: 450,
    ageRange: "22–65",
    fee: 500,
    languages: "English, Hindi",
    patients: "3,700+",
    yearsOnPlatform: "2+",
    consultations: "28",
    initials: "AS",
    gradient: "from-teal-500 to-teal-700",
    education: "M.D. from KEM Hospital, Mumbai",
    hospital: "Fortis Hospital, Mumbai",
  },
  {
    id: 3,
    name: "Dr. Aakash Menon",
    specialization: "MBBS, Cardiologist",
    shortSpec: "Cardiologist",
    degree: "MBBS",
    department: "Medicine",
    experience: "8+ years experience",
    rating: 4.7,
    ratingCount: 310,
    ageRange: "28–65",
    fee: 450,
    languages: "English, Hindi",
    patients: "2,100+",
    yearsOnPlatform: "2",
    consultations: "20",
    initials: "AM",
    gradient: "from-indigo-500 to-indigo-700",
    education: "MBBS from Maulana Azad Medical College",
    hospital: "Max Healthcare, Bangalore",
  },
];

const features = [
  {
    icon: "ri-stethoscope-line",
    title: "Expert Doctors at Low Prices",
    description: "Top specialists with fees tailored for affordability",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Digital Prescription & Summary",
    description: "E-prescriptions and easy-to-read consultation summaries",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Seamless Access & Scheduling",
    description: "Direct booking, reminders, and in-app sessions",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "ri-heart-pulse-line",
    title: "Holistic Care Coordination",
    description: "Integrated support for ongoing treatment and wellness",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

/* ─────────────────────────────────────────────
   Doctor Profile View (full-page overlay)
   ───────────────────────────────────────────── */
const DoctorProfile = ({ doctor, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const singlePlanFeatures = {
    excluded: [
      "One-time doctor visit",
      "Basic online support",
      "Standard booking slots",
      "Prescription PDF",
    ],
    included: [
      "Unlimited Consultations",
      "Multiple Specialties",
      "Emergency Support",
    ],
  };

  const carePlanFeatures = {
    included: [
      "Unlimited Consultations",
      "24/7 Emergency Support",
      "Priority Booking & Benefits",
      "Round-the-Clock Health Chat",
      "E-Prescription & Summary",
      "Personalized Treatment Plans",
      "Continuous Health Monitoring",
    ],
  };

  const whyCare = [
    {
      title: "Expert Doctors",
      items: ["24/7 Health Chat", "Affordable Pricing"],
      icon: "ri-user-heart-line",
    },
    {
      title: "Kenkoo Care Plan",
      items: [
        `Consult with ${doctor.name.split(" ").slice(1).join(" ")} & others`,
        `${doctor.ratingCount}+ happy patients`,
      ],
      icon: "ri-heart-pulse-line",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full overflow-y-auto bg-gray-50 custom-scrollbar"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* ── Header Banner ── */}
        <div className="mb-6 bg-blue-900 rounded-3xl p-5 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-15 -ml-5 -mb-5"></div>

          <div className="relative z-10">
            {/* Top nav row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <i className="ri-heart-pulse-fill text-white text-lg"></i>
                </div>
                <span className="font-bold text-lg tracking-wide">Kenkoo</span>
              </div>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-notification-3-line text-white text-lg"></i>
              </button>
            </div>

            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors mb-4"
            >
              <i className="ri-arrow-left-line text-lg"></i>
              <span className="font-medium">Back to Doctors</span>
            </button>
          </div>
        </div>

        {/* ── Doctor Info Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-6"
        >
          <div className="flex gap-4">
            {/* Avatar */}
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${doctor.gradient} flex items-center justify-center shrink-0 shadow-lg`}
            >
              <span className="text-white font-bold text-2xl sm:text-3xl">
                {doctor.initials}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900 text-lg sm:text-xl">
                    {doctor.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {doctor.department}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg whitespace-nowrap flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                  {doctor.degree} &middot; {doctor.shortSpec}
                </span>
              </div>

              {/* Experience + Fee */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1.5 text-sm">
                  <i className="ri-star-fill text-yellow-400"></i>
                  <span className="font-semibold text-gray-800">
                    {doctor.experience}
                  </span>
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                  ₹{doctor.fee}
                </span>
              </div>

              {/* Ratings + Age */}
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <i className="ri-chat-3-line text-gray-400"></i>
                <span>{doctor.ratingCount} ratings</span>
                <span className="text-gray-300">&middot;</span>
                <i className="ri-group-line text-gray-400"></i>
                <span>{doctor.ageRange}</span>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
                <i className="ri-global-line text-gray-400"></i>
                <span>{doctor.languages}</span>
              </div>

              {/* Education */}
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
                <i className="ri-graduation-cap-line text-gray-400"></i>
                <span>{doctor.education}</span>
              </div>
            </div>
          </div>

          {/* Choose Plan CTA */}
          <div className="mt-5 flex justify-end">
            <button
              onClick={() =>
                document
                  .getElementById("plan-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 bg-white border-2 border-blue-600 text-blue-600 font-bold text-sm rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-95"
            >
              Choose Plan
            </button>
          </div>
        </motion.div>

        {/* ── Select Your Care Plan ── */}
        <motion.div
          id="plan-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Select Your Expert Connect
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Comprehensive healthcare management
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ── Single Consultation Card ── */}
            <div
              onClick={() => setSelectedPlan("single")}
              className={`relative bg-white rounded-2xl border-2 p-5 cursor-pointer transition-all duration-200 ${
                selectedPlan === "single"
                  ? "border-blue-600 shadow-lg shadow-blue-100"
                  : "border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              {selectedPlan === "single" && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
              )}

              <h3 className="font-bold text-gray-900 text-lg mb-1">
                Single Consultation
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-800">
                  ₹{doctor.fee}
                </span>
                <span className="text-sm text-gray-500">per visit</span>
              </div>
              <p className="text-xs text-gray-400 italic mb-4">
                Free Trial Available
              </p>

              {/* Excluded features */}
              <div className="space-y-2.5 mb-4">
                {singlePlanFeatures.excluded.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <i className="ri-close-line text-red-400 text-base"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Included features */}
              <div className="space-y-2.5 mb-5">
                {singlePlanFeatures.included.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <i className="ri-check-line text-green-500 text-base"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan("single");
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 ${
                  selectedPlan === "single"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Single Consultation
              </button>
            </div>

            {/* ── Kenkoo Care Plan Card ── */}
            <div
              onClick={() => setSelectedPlan("care")}
              className={`relative bg-white rounded-2xl border-2 p-5 cursor-pointer transition-all duration-200 ${
                selectedPlan === "care"
                  ? "border-blue-600 shadow-lg shadow-blue-100"
                  : "border-blue-200 hover:border-blue-400 shadow-sm"
              }`}
            >
              {/* Recommended badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                Recommended
              </div>

              {selectedPlan === "care" && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
              )}

              <div className="flex items-center gap-2 mb-2 mt-1">
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-shield-check-fill text-blue-600 text-sm"></i>
                </div>
                <h3 className="font-bold text-blue-700 text-lg">
                  Kenkoo Clinic Connect
                </h3>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-800">₹799</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-4">
                Unlimited care + benefits
              </p>

              {/* Included features */}
              <div className="space-y-2.5 mb-5">
                {carePlanFeatures.included.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <i className="ri-check-line text-green-500 text-base"></i>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan("care");
                }}
                className="w-full py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200 active:scale-95"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Why Kenkoo Care? ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Why Kenkoo Care?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyCare.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <i className={`${card.icon} text-blue-600 text-xl`}></i>
                  <h3 className="font-bold text-gray-800">{card.title}</h3>
                </div>
                <div className="space-y-2">
                  {card.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <i className="ri-check-double-line text-green-500"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main CarePlan Component
   ───────────────────────────────────────────── */
const CarePlan = () => {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [recommendedDoctor, setRecommendedDoctor] = useState(null);

  const categories = ["All", "Medicine", "Gynecology", "Cardiologist"];

  useEffect(() => {
    // Determine recommendation based on user insights
    const determineRecommendation = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        const API_INSIGHTS_URL = isLocal
          ? `http://${window.location.hostname}:3000/api/health/insights`
          : "https://photons-innovate.onrender.com/api/health/insights";

        const res = await fetch(API_INSIGHTS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          let recommendedDept = null;

          // Check summary metrics for abnormalities
          if (data?.summary?.metrics) {
            const metrics = data.summary.metrics;

            // Simple naive rules for demonstration based on common keywords
            if (
              metrics.some(
                (m) =>
                  m.name.toLowerCase().includes("heart") ||
                  m.name.toLowerCase().includes("cholesterol") ||
                  m.status.toLowerCase().includes("high"),
              )
            ) {
              recommendedDept = "Cardiologist";
            } else if (
              metrics.some(
                (m) =>
                  m.name.toLowerCase().includes("sugar") ||
                  m.name.toLowerCase().includes("glucose") ||
                  m.name.toLowerCase().includes("blood"),
              )
            ) {
              recommendedDept = "Medicine";
            }
          }

          if (recommendedDept) {
            const doc = doctorsData.find(
              (d) =>
                d.shortSpec.includes(recommendedDept) ||
                d.department.includes(recommendedDept) ||
                d.specialization.includes(recommendedDept),
            );
            if (doc) setRecommendedDoctor(doc);
          } else {
            // Default recommendation for testing if no specific insights guide us, but they have records
            setRecommendedDoctor(doctorsData[0]);
          }
        }
      } catch (err) {
        console.error("Failed to determine recommendation:", err);
      }
    };
    determineRecommendation();
  }, []);

  const filteredDoctors = doctorsData.filter((doc) => {
    const q = search.toLowerCase();
    const matchesSearch =
      doc.name.toLowerCase().includes(q) ||
      doc.specialization.toLowerCase().includes(q) ||
      doc.department.toLowerCase().includes(q);

    const matchesCategory =
      selectedCategory === "All" ||
      doc.department.includes(selectedCategory) ||
      doc.shortSpec.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  /* ── If a doctor is selected, show their profile ── */
  return (
    <AnimatePresence mode="wait">
      {selectedDoctor ? (
        <DoctorProfile
          key="profile"
          doctor={selectedDoctor}
          onBack={() => setSelectedDoctor(null)}
        />
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="h-full overflow-y-auto bg-gray-50 custom-scrollbar"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* ─── Header Banner ─── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 bg-blue-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-15 -ml-5 -mb-5"></div>

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-heart-pulse-fill text-white text-lg"></i>
                    </div>
                    <span className="font-bold text-lg tracking-wide">
                      Kenkoo
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Kenkoo Clinic Connect
                  </h1>
                  <p className="text-blue-100 text-sm sm:text-base opacity-90 max-w-md">
                    Quality healthcare guidance, all in one place.
                  </p>
                </div>
                <button className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shrink-0 mt-1">
                  <i className="ri-notification-3-line text-white text-lg"></i>
                </button>
              </div>
            </motion.div>

            {/* ─── Search Bar ─── */}
            <div className="relative mb-6 group">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg"></i>
              <input
                type="text"
                placeholder="Search your health concerns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 shadow-sm transition-all"
              />
            </div>

            {/* ─── AI Recommendation Section ─── */}
            {recommendedDoctor &&
              search === "" &&
              selectedCategory === "All" && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <i className="ri-bard-fill text-blue-600 text-xl"></i>
                    <h2 className="text-xl font-bold text-gray-800">
                      Recommended for You
                    </h2>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-1 shadow-sm relative overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                    <div className="bg-white rounded-2xl p-4 sm:p-5 relative z-10">
                      <div className="flex gap-3 sm:gap-4">
                        {/* Avatar */}
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${recommendedDoctor.gradient} flex items-center justify-center shrink-0 shadow-md`}
                        >
                          <span className="text-white font-bold text-lg sm:text-xl">
                            {recommendedDoctor.initials}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                                {recommendedDoctor.name}
                              </h3>
                              <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                                  <i className="ri-sparkling-fill text-blue-500"></i>
                                  Top Match
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2">
                            Based on your recent insights and health profile,{" "}
                            {recommendedDoctor.name} is the best specialist for
                            your current needs.
                          </p>
                        </div>
                      </div>

                      {/* Rating + Fee row */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-sm">
                            <i className="ri-star-fill text-yellow-400"></i>
                            <span className="font-bold text-gray-800">
                              {recommendedDoctor.rating}
                            </span>
                            <span className="text-gray-400 text-xs">
                              ({recommendedDoctor.ratingCount})
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedDoctor(recommendedDoctor)}
                          className="px-4 py-1.5 sm:px-5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                        >
                          View Profile <i className="ri-arrow-right-line"></i>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

            {/* ─── Available Clinics Header & Categories ─── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <h2 className="text-xl font-bold text-gray-800">
                Available Clinics
              </h2>

              <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-blue-900 text-white shadow-md shadow-blue-900/10"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                window.open("https://photons-healthcareworkers.onrender.com/", "_blank", "noopener,noreferrer");
              }}
              className="px-4 py-1.5 absolute right-4 bottom-4 sm:px-7 sm:py-4 bg-white border-4 border-blue-600 text-blue-600 text-sm sm:text-md font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-100"
            >
              Connect to Experts
            </button>

            <div className="mb-6">
              <div className="space-y-4">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className="p-4 sm:p-5">
                        {/* Top row: Avatar + Name + Tags */}
                        <div className="flex gap-3 sm:gap-4">
                          {/* Avatar */}
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center shrink-0 shadow-md`}
                          >
                            <span className="text-white font-bold text-lg sm:text-xl">
                              {doc.initials}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                                  {doc.name}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium">
                                    <i className="ri-verified-badge-fill text-blue-500"></i>
                                    {doc.specialization}
                                  </span>
                                </div>
                              </div>
                              {/* Experience + Consultations badges */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-semibold rounded-lg whitespace-nowrap">
                                  {doc.yearsOnPlatform}
                                </span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs font-semibold rounded-lg flex items-center gap-0.5 whitespace-nowrap">
                                  {doc.consultations}
                                  <i className="ri-play-fill text-blue-500 text-xs"></i>
                                </span>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-500 mt-1">
                              {doc.department} &middot; {doc.experience}
                            </p>
                          </div>
                        </div>

                        {/* Rating + Fee row */}
                        <div className="flex items-end justify-between mt-3 pt-3 border-t border-gray-50">
                          <div className="space-y-1">
                            {/* Rating */}
                            <div className="flex items-center gap-1.5 text-sm">
                              <i className="ri-star-fill text-yellow-400"></i>
                              <span className="font-bold text-gray-800">
                                {doc.rating}
                              </span>
                              <span className="text-gray-400 text-xs">
                                ({doc.ratingCount} ratings)
                              </span>
                              <span className="text-gray-300 mx-1">
                                &middot;
                              </span>
                              <span className="flex items-center gap-0.5 text-xs text-gray-500">
                                <i className="ri-chat-3-line text-gray-400"></i>
                                {doc.ageRange}
                              </span>
                            </div>
                            {/* Languages & Patients */}
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                              <i className="ri-global-line text-gray-400"></i>
                              <span>{doc.languages}</span>
                              <span className="text-gray-300">&middot;</span>
                              <i className="ri-group-line text-gray-400"></i>
                              <span>{doc.patients}</span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            {/* <span className="text-xl sm:text-2xl font-bold text-gray-800">₹{doc.fee}</span> */}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                      <i className="ri-search-line text-2xl text-gray-300"></i>
                    </div>
                    <h3 className="text-gray-800 font-semibold">
                      No doctors found
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Try a different search term.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ─── Why Kenkoo Care Plan? ─── */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Why Kenkoo Clinic Connect
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-3`}
                    >
                      <i
                        className={`${feature.icon} ${feature.color} text-xl sm:text-2xl`}
                      ></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarePlan;
