import { StatusBar } from "../components/StatusBar";
import { OrangeButton } from "../components/OrangeButton";
import { ArrowLeft, Check, AlertTriangle } from "lucide-react";

interface VetNotesScreenProps {
  onBack: () => void;
}

const careItems = [
  { text: "Switch to grain-free diet gradually over 7 days", done: false },
  { text: "Monitor water intake — aim for 1 oz per lb daily", done: false },
  { text: "Follow up if scratching persists after 3 days", done: false },
];

export function VetNotesScreen({ onBack }: VetNotesScreenProps) {
  return (
    <div className="min-h-full bg-white">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-2 pb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <h1 className="font-dynapuff font-bold text-xl text-gray-900">Care Summary</h1>
      </div>

      <div className="px-5 pb-10 space-y-4">
        {/* Vet info card */}
        <div className="bg-gray-50 rounded-3xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div>
              <p className="font-semibold text-gray-800">Dr. Sarah's Notes</p>
              <p className="text-xs text-gray-500">Licensed Veterinarian · DVM</p>
            </div>
          </div>

          {/* Pet info */}
          <div className="flex gap-4 text-sm">
            <div>
              <span className="text-gray-400">Pet</span>
              <p className="font-medium text-gray-700">Luna</p>
            </div>
            <div>
              <span className="text-gray-400">Breed</span>
              <p className="font-medium text-gray-700">Tabby Mix</p>
            </div>
            <div>
              <span className="text-gray-400">Concern</span>
              <p className="font-medium text-gray-700">Scratching</p>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">Summary</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                Likely environmental allergy — no signs of infection
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                Recommended dietary change to rule out food sensitivity
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                No urgent intervention needed at this time
              </li>
            </ul>
          </div>
        </div>

        {/* Care recommendations */}
        <div className="bg-gray-50 rounded-3xl p-5 space-y-3">
          <p className="font-semibold text-gray-800">Care Recommendations</p>
          <div className="space-y-2">
            {careItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-3">
                <div className="w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.done && <Check className="w-3 h-3 text-emerald-500" />}
                </div>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="bg-white rounded-3xl p-5 border-2 border-orange-accent space-y-3">
          <p className="font-semibold text-gray-800 text-center">
            Your free call has been used
          </p>
          <p className="text-sm text-gray-500 text-center">
            Get unlimited vet calls + phone service
          </p>
          <OrangeButton>$15/mo for 3 months</OrangeButton>
        </div>

        {/* Revoked indicator */}
        <div className="bg-amber-50 rounded-2xl p-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span className="text-xs text-amber-700">Free call redeemed — subscribe for unlimited access</span>
        </div>
      </div>
    </div>
  );
}
