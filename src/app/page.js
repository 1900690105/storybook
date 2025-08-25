"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  Heart,
  Sparkles,
  BookOpen,
  Download,
  Headphones,
  ShoppingCart,
  Upload,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

const PersonalizedBookWebpage = () => {
  const [formData, setFormData] = useState({
    childName: "",
    photo: null,
    gender: "they",
    theme: "adventure",
    message: "",
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [animatingStars, setAnimatingStars] = useState([]);
  const fileInputRef = useRef(null);

  // Create floating animations
  useEffect(() => {
    const stars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      emoji: ["⭐", "🌟", "✨", "🎈", "🦄", "🌈", "🎪", "🎠"][
        Math.floor(Math.random() * 8)
      ],
      duration: Math.random() * 3 + 2,
    }));
    setAnimatingStars(stars);
  }, []);

  const themes = [
    {
      id: "adventure",
      name: "🗡️ Adventure Quest",
      emoji: "🏰",
      color: "from-red-400 via-orange-400 to-yellow-400",
      bgColor: "bg-orange-100",
    },
    {
      id: "values",
      name: "💝 Life Values",
      emoji: "❤️",
      color: "from-pink-400 via-rose-400 to-red-400",
      bgColor: "bg-pink-100",
    },
    {
      id: "birthday",
      name: "🎂 Birthday Magic",
      emoji: "🎉",
      color: "from-purple-400 via-pink-400 to-yellow-400",
      bgColor: "bg-purple-100",
    },
    {
      id: "bhagavad",
      name: "🕉️ Wisdom Stories",
      emoji: "🧘",
      color: "from-amber-400 via-orange-400 to-red-400",
      bgColor: "bg-amber-100",
    },
  ];

  const bookFormats = [
    {
      id: "physical",
      name: "📗 Real Book!",
      icon: "📚",
      price: "₹699",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      description: "Touch and feel your story!",
    },
    {
      id: "ebook",
      name: "📱 Phone Book!",
      icon: "💻",
      price: "₹199",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      description: "Read on your tablet!",
    },
    {
      id: "audio",
      name: "🎧 Listen Book!",
      icon: "🔊",
      price: "₹399",
      color: "bg-gradient-to-br from-purple-400 to-violet-500",
      description: "Hear your story!",
    },
  ];

  const samplePages = [
    {
      title: "🌟 Your Amazing Story Starts Here! 🌟",
      content: `Hi there! This is ${formData.childName || "YOU"}! 👋 
      
You are the BEST and most AMAZING ${
        formData.gender === "male"
          ? "boy"
          : formData.gender === "female"
          ? "girl"
          : "kid"
      } in the whole wide world! 🌍

Get ready for the most EXCITING adventure EVER! 🚀`,
      illustration: "🌈✨🦄",
      bgColor: "from-pink-300 to-purple-300",
    },
    {
      title: "🎪 The Super Fun Adventure! 🎪",
      content: `WOW! ${
        formData.childName || "YOU"
      } found a MAGICAL treasure map! 🗺️✨

"I'm going to help ALL my animal friends!" said ${
        formData.childName || "YOU"
      } with a BIG smile! 😊

Off ${
        formData.gender === "male"
          ? "he"
          : formData.gender === "female"
          ? "she"
          : "they"
      } went on the most AMAZING journey! 🌟`,
      illustration: "🗺️🐻🦊🐰",
      bgColor: "from-blue-300 to-green-300",
    },
    {
      title: "🎉 YOU DID IT! 🎉",
      content: `HOORAY! ${formData.childName || "YOU"} saved the day! 🏆

All the animals cheered: "Thank you, ${
        formData.childName || "HERO"
      }! You're the BEST!" 🎊

${formData.message ? `💝 ${formData.message} 💝` : "💖 You are AMAZING! 💖"}

THE END! 🌈`,
      illustration: "🏆🎊🎈🎉",
      bgColor: "from-yellow-300 to-orange-300",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          photo: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Floating Animations */}
      {animatingStars.map((star) => (
        <div
          key={star.id}
          className="absolute pointer-events-none animate-bounce"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {star.emoji}
        </div>
      ))}

      {/* MEGA Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative container mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <div className="text-8xl mb-4 animate-pulse">🌟</div>
            <div className="text-6xl animate-bounce">📚✨</div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-lg transform rotate-1">
            MAKE YOUR OWN
          </h1>
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent transform -rotate-1">
            SUPER STORY! 📖
          </h2>

          <div className="text-3xl md:text-4xl mb-8 text-white font-bold animate-pulse">
            🦄 BE THE HERO! 🦄
          </div>

          <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white text-3xl font-black py-6 px-12 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse border-4 border-white">
            🎨 START NOW! 🎨
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Super Fun Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-4xl animate-spin">
              ⭐
            </div>
            <div className="absolute bottom-4 left-4 text-3xl animate-bounce">
              🎈
            </div>

            <h2 className="text-4xl font-black text-purple-600 mb-8 text-center">
              🎪 MAKE YOUR STORY! 🎪
            </h2>

            <div className="space-y-8">
              {/* Child's Name - BIGGER */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl border-3 border-purple-300">
                <label className="block text-2xl font-black text-purple-700 mb-4 text-center">
                  🌟 WHAT&#39;S YOUR NAME? 🌟
                </label>
                <input
                  type="text"
                  value={formData.childName}
                  onChange={(e) =>
                    handleInputChange("childName", e.target.value)
                  }
                  placeholder="Type your name here!"
                  className="w-full p-6 border-4 border-purple-300 rounded-2xl focus:border-pink-400 focus:outline-none text-2xl font-bold text-center text-purple-700 placeholder-purple-400"
                />
              </div>

              {/* Photo - MORE FUN */}
              <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-2xl border-3 border-blue-300">
                <label className="block text-2xl font-black text-blue-700 mb-4 text-center">
                  📸 ADD YOUR SUPER PHOTO! 📸
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-8 border-4 border-dashed border-blue-400 rounded-2xl cursor-pointer hover:border-pink-400 transition-colors flex flex-col items-center justify-center bg-blue-50 hover:bg-pink-50"
                >
                  {formData.photo ? (
                    <div className="text-center">
                      <Image
                        src={formData.photo}
                        alt="Child"
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-rainbow animate-pulse"
                      />
                      <div className="text-2xl">🎉 AWESOME! 🎉</div>
                    </div>
                  ) : (
                    <>
                      <div className="text-6xl mb-4 animate-bounce">📷</div>
                      <span className="text-xl font-bold text-blue-600">
                        TAP TO ADD PHOTO!
                      </span>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              {/* Gender - BIGGER BUTTONS */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border-3 border-yellow-300">
                <label className="block text-2xl font-black text-orange-700 mb-4 text-center">
                  👑 PICK YOUR STYLE! 👑
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      value: "male",
                      label: "BOY!",
                      emoji: "👦",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      value: "female",
                      label: "GIRL!",
                      emoji: "👧",
                      color: "from-pink-400 to-rose-400",
                    },
                    {
                      value: "they",
                      label: "ME!",
                      emoji: "🧒",
                      color: "from-purple-400 to-violet-400",
                    },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange("gender", option.value)}
                      className={`p-6 rounded-2xl border-4 transition-all transform hover:scale-105 ${
                        formData.gender === option.value
                          ? "border-yellow-400 bg-gradient-to-br " +
                            option.color +
                            " text-white shadow-lg"
                          : "border-gray-300 bg-white hover:border-yellow-300"
                      }`}
                    >
                      <div className="text-4xl mb-2">{option.emoji}</div>
                      <div className="font-black text-lg">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Themes - MORE COLORFUL */}
              <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-2xl border-3 border-green-300">
                <label className="block text-2xl font-black text-green-700 mb-4 text-center">
                  🎪 PICK YOUR ADVENTURE! 🎪
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleInputChange("theme", theme.id)}
                      className={`p-6 rounded-2xl border-4 transition-all transform hover:scale-105 ${
                        formData.theme === theme.id
                          ? `border-green-400 bg-gradient-to-br ${theme.color} text-white shadow-xl`
                          : `border-gray-300 ${theme.bgColor} hover:border-green-300`
                      }`}
                    >
                      <div className="text-5xl mb-2">{theme.emoji}</div>
                      <div className="font-black text-sm">{theme.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message - BIGGER */}
              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-2xl border-3 border-red-300">
                <label className="block text-2xl font-black text-red-700 mb-4 text-center">
                  💝 SPECIAL MESSAGE! 💝
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Love you lots! ❤️"
                  rows="3"
                  className="w-full p-6 border-4 border-red-300 rounded-2xl focus:border-pink-400 focus:outline-none text-xl font-bold text-center resize-none placeholder-red-400"
                />
              </div>
            </div>
          </div>

          {/* Story Preview - WAY MORE FUN */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-300 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-4xl animate-pulse">
              📖
            </div>
            <div className="absolute bottom-4 right-4 text-3xl animate-bounce">
              🌈
            </div>

            <h2 className="text-4xl font-black text-blue-600 mb-8 text-center">
              📚 YOUR SUPER STORY! 📚
            </h2>

            {/* Book Preview - MUCH BIGGER */}
            <div
              className={`bg-gradient-to-br ${samplePages[currentPage].bgColor} rounded-3xl p-8 mb-8 min-h-[400px] border-4 border-white shadow-xl`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-3 border-purple-300 h-full">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-pulse">
                    {samplePages[currentPage].illustration}
                  </div>
                  <h3 className="text-2xl font-black text-purple-700 mb-6 leading-tight">
                    {samplePages[currentPage].title}
                  </h3>
                </div>
                <div className="text-purple-700 leading-relaxed text-xl font-bold text-center">
                  {samplePages[currentPage].content}
                </div>
              </div>
            </div>

            {/* Page Navigation - BIGGER BUTTONS */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="flex items-center px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition-colors font-black text-lg border-3 border-white shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 mr-2" />
                BACK
              </button>

              <div className="flex space-x-3">
                {samplePages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full border-2 border-white ${
                      index === currentPage ? "bg-purple-500" : "bg-purple-200"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage(
                    Math.min(samplePages.length - 1, currentPage + 1)
                  )
                }
                disabled={currentPage === samplePages.length - 1}
                className="flex items-center px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition-colors font-black text-lg border-3 border-white shadow-lg"
              >
                NEXT
                <ChevronRight className="w-6 h-6 ml-2" />
              </button>
            </div>

            {/* Audio Preview - MORE FUN */}
            <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl p-6 border-3 border-green-400">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-green-700 text-xl">
                    🎧 LISTEN TO YOUR STORY!
                  </h4>
                  <p className="text-green-600 font-bold">
                    Tap to hear the magic!
                  </p>
                </div>
                <button className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white p-4 rounded-full transition-colors border-3 border-white shadow-lg animate-pulse">
                  <Play className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Book Options - MUCH MORE FUN */}
        <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl border-4 border-rainbow relative overflow-hidden">
          <div className="absolute top-8 left-8 text-5xl animate-spin">🎪</div>
          <div className="absolute top-8 right-8 text-4xl animate-bounce">
            🎊
          </div>
          <div className="absolute bottom-8 left-8 text-4xl animate-pulse">
            ⭐
          </div>
          <div className="absolute bottom-8 right-8 text-5xl animate-bounce">
            🌈
          </div>

          <h2 className="text-5xl font-black text-center text-purple-700 mb-12">
            🎁 CHOOSE YOUR SUPER BOOK! 🎁
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {bookFormats.map((format) => (
              <div
                key={format.id}
                className="border-4 border-purple-300 rounded-3xl p-8 hover:border-pink-400 transition-colors group bg-gradient-to-br from-white to-purple-50 shadow-xl transform hover:scale-105"
              >
                <div
                  className={`${format.color} w-24 h-24 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce border-4 border-white shadow-lg`}
                >
                  <div className="text-4xl">{format.icon}</div>
                </div>
                <h3 className="text-2xl font-black text-center text-purple-700 mb-4">
                  {format.name}
                </h3>
                <p className="text-center text-purple-600 font-bold text-lg mb-6">
                  {format.description}
                </p>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-700 mb-6">
                    {format.price}
                  </div>
                  <button className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg border-3 border-white shadow-lg">
                    🛒 I WANT THIS! 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - SUPER EXCITING */}
        <div className="mt-16 text-center bg-gradient-to-br from-rainbow-start via-rainbow-middle to-rainbow-end rounded-3xl p-16 text-white border-4 border-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative">
            <div className="text-8xl mb-8 animate-bounce">🎉</div>
            <h2 className="text-5xl font-black mb-6">READY TO BE THE HERO?</h2>
            <p className="text-2xl mb-8 font-bold">
              GET YOUR AMAZING STORY BOOK NOW! 🌟
            </p>
            <button className="bg-white text-purple-600 font-black text-3xl py-6 px-12 rounded-full hover:bg-yellow-100 transition-colors transform hover:scale-110 shadow-2xl border-4 border-purple-400 animate-pulse">
              🚀 MAKE MY BOOK NOW! 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedBookWebpage;
