import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Video, Stethoscope, Clock } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import type { ArticleData } from "../data/mochiArticles";
import { getArticleById } from "../data/mochiArticles";
import type { CatProfile } from "../AppPrototype";

interface ArticleDetailScreenProps {
  article: ArticleData;
  catProfiles: CatProfile[];
  onBack: () => void;
  onArticleTap?: (article: ArticleData) => void;
  onVetCta?: () => void;
}

export function ArticleDetailScreen({ article, catProfiles, onBack, onArticleTap, onVetCta }: ArticleDetailScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeCat = catProfiles[0];
  const catName = activeCat?.name || "Cat";
  const breed = activeCat?.breed || null;

  // Reset scroll when article changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [article.id]);

  const handleFollowUpTap = (articleId: string) => {
    if (!onArticleTap) return;
    const ageText = activeCat?.dob?.yyyy ? "" : "18 months";
    const linked = getArticleById(articleId, catName, breed, ageText);
    if (linked) {
      onArticleTap(linked);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="absolute inset-0 z-30 flex flex-col bg-white"
      style={{ height: 844 }}
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#1a1a1a]">
        {/* ─── Hero ─── */}
        <div className="relative" style={{ height: 320 }}>
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.heroImage})` }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

          {/* Status bar */}
          <div className="relative z-10">
            <StatusBar light />
          </div>

          {/* Back button */}
          <button
            onClick={onBack}
            className="relative z-10 ml-5 mt-3 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm active:scale-95 transition-transform"
            style={{ width: 36, height: 36 }}
          >
            <ArrowLeft size={18} color="white" />
          </button>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6">
            {/* Category badge */}
            <span
              className="inline-block text-[12px] font-bold uppercase tracking-wide px-3 py-1 rounded-full backdrop-blur-sm mb-3"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: article.categoryColor }}
            >
              {article.category}
            </span>

            {/* Title */}
            <h1 className="font-young-serif text-[28px] text-white leading-tight">
              {article.title}
            </h1>

            {/* Disclaimer */}
            <p className="text-[13px] text-white/60 mt-2 italic">
              Written with AI — always check with a real vet
            </p>
          </div>
        </div>

        {/* ─── Body (white card, overlaps hero) ─── */}
        <div
          className="relative bg-white"
          style={{ marginTop: -20, borderRadius: "32px 32px 0 0" }}
        >
          {/* ─── Vet USPs ─── */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            {[
              { icon: <Clock size={16} className="text-gray-500" />, label: "Vet in 60s" },
              { icon: <Stethoscope size={16} className="text-gray-500" />, label: "Licensed vets" },
              { icon: <Video size={16} className="text-gray-500" />, label: "Unlimited visits" },
            ].map((usp, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {usp.icon}
                <span className="text-[12px] text-gray-500 font-medium">{usp.label}</span>
              </div>
            ))}
          </div>
          {/* ─── Vet CTA ─── */}
          <div className="mx-6 mt-1 mb-1">
            <button
              onClick={onVetCta}
              className="w-full flex items-center justify-center gap-2 rounded-full py-3 bg-gray-100 active:scale-[0.97] transition-transform"
            >
              <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full">Free</span>
              <span className="text-gray-700 text-[13px] font-medium">{article.vetCtaText}</span>
            </button>
          </div>

          <div className="mx-6 h-px bg-gray-100 mb-2" />

          <div className="px-6 pt-4 pb-6 space-y-5">
            {article.paragraphs.map((p, i) => (
              <div key={i}>
                {p.subheading && (
                  <h2 className="font-young-serif text-[20px] text-gray-900 mb-2">
                    {p.subheading}
                  </h2>
                )}
                <p className="font-rethink text-[15px] text-gray-700" style={{ lineHeight: 1.7 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          {/* ─── Follow-up Questions ─── */}
          <div className="px-5 pb-10">
            <h3 className="text-gray-900 text-[16px] font-bold mb-3">
              More on {article.category.toLowerCase()}
            </h3>
            <div className="space-y-2.5">
              {article.followUps.map((fu, i) => (
                <button
                  key={i}
                  onClick={() => handleFollowUpTap(fu.articleId)}
                  className="w-full flex items-center justify-between bg-[#EFEFEF] rounded-[20px] px-5 py-3.5 text-left active:scale-[0.97] transition-transform"
                >
                  <span className="text-[14px] text-gray-800 font-medium pr-3">{fu.question}</span>
                  <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
