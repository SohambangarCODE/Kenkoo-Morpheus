import { useState, useRef, useCallback } from "react";

/**
 * Custom hook for Web Speech API voice input with multi-language support.
 *
 * Supported languages:
 *  en-US (English), hi-IN (Hindi), es-ES (Spanish), fr-FR (French),
 *  de-DE (German), pt-BR (Portuguese), ar-SA (Arabic), zh-CN (Chinese),
 *  ja-JP (Japanese), ko-KR (Korean), ta-IN (Tamil), te-IN (Telugu),
 *  bn-IN (Bengali), mr-IN (Marathi), gu-IN (Gujarati)
 */
const LANGUAGES = [
  { code: "en-US", label: "English" },
  { code: "hi-IN", label: "हिन्दी (Hindi)" },
  { code: "es-ES", label: "Español" },
  { code: "fr-FR", label: "Français" },
  { code: "de-DE", label: "Deutsch" },
  { code: "pt-BR", label: "Português" },
  { code: "ar-SA", label: "العربية" },
  { code: "zh-CN", label: "中文" },
  { code: "ja-JP", label: "日本語" },
  { code: "ko-KR", label: "한국어" },
  { code: "ta-IN", label: "தமிழ்" },
  { code: "te-IN", label: "తెలుగు" },
  { code: "bn-IN", label: "বাংলা" },
  { code: "mr-IN", label: "मराठी" },
  { code: "gu-IN", label: "ગુજરાતી" },
];

const useVoiceInput = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const recognitionRef = useRef(null);

  const isSupported =
    typeof window !== "undefined" &&
    ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

  const startListening = useCallback(
    (lang = null) => {
      if (!isSupported) {
        setError("Voice input is not supported in this browser. Please use Chrome or Edge.");
        return;
      }

      setError(null);
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = lang || selectedLanguage;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const t = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += t + " ";
          } else {
            interimTranscript += t;
          }
        }

        setTranscript((prev) => prev + finalTranscript + interimTranscript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          setError("Microphone access denied. Please allow microphone permissions.");
        } else if (event.error === "no-speech") {
          setError("No speech detected. Please try speaking again.");
        } else {
          setError(`Voice error: ${event.error}`);
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    },
    [isSupported, selectedLanguage]
  );

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript("");
  }, []);

  return {
    isListening,
    transcript,
    error,
    isSupported,
    selectedLanguage,
    setSelectedLanguage,
    startListening,
    stopListening,
    resetTranscript,
    setTranscript,
    languages: LANGUAGES,
  };
};

export default useVoiceInput;
