"use client";

import { QuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";
import { SITE } from "@/lib/site";
import { QUOTE_SERVICE_TYPES, YEARS_OPTIONS } from "@/lib/content";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=${SITE.domain}`;

const TRADE_TYPES = [
  "Polyurea / spray-applied coatings contractor",
  "Polyurea flooring / garage coatings",
  "Waterproofing / roof coatings",
  "Spray foam and polyurea",
  "Other",
];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "serviceType", label: "What do you need?", type: "select", options: [...QUOTE_SERVICE_TYPES] },
  { name: "yearsInBusiness", label: "Years in business", type: "select", options: [...YEARS_OPTIONS] },
  { name: "subsHaveInsurance", label: "Do your subcontractors have insurance?", type: "select", options: ["Yes — all of them", "Some of them", "No", "We don't use subcontractors"] },
  { name: "subsInsuredPercent", label: "What percent of your subcontractors have insurance?", type: "text" },
  { name: "needUninsuredSubCoverage", label: "Do you need coverage for uninsured subcontractors?", type: "select", options: ["Yes", "No", "Not sure"] },
  { name: "class_code_2", label: "Class code 2 (+ % of operations)", type: "text" },
  { name: "class_code_3", label: "Class code 3 (+ % of operations)", type: "text" },
  { name: "class_code_4", label: "Class code 4 (+ % of operations)", type: "text" },
  { name: "class_code_5", label: "Class code 5 (+ % of operations)", type: "text" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  priorGrossSales: d.lastGrossSales ?? "",
  priorSubcontractorExpenses: d.lastSubcontractingCosts ?? "",
  priorEmployeeCount: d.lastEmployeeCount ?? "",
  priorEmployeePayroll: d.lastEmployeePayroll ?? "",
  estGrossSales: d.nextGrossEstimate ?? "",
  estSubcontractorExpenses: d.nextSubcontractingCosts ?? "",
  estEmployeeCount: d.nextEmployeeCount ?? "",
  estEmployeePayroll: d.nextEmployeePayroll ?? "",
  estMaterialCosts: d.nextMaterialCosts ?? "",
  message: d.notes ?? "",
  coverage_types: d.coverageTypes ?? "",
  year_business_started: d.yearBusinessStarted ?? "",
  business_description: d.businessDescription ?? "",
  class_code_1: d.classCode ?? "",
  residential_vs_commercial: [d.residentialPct && `Residential ${d.residentialPct}%`, d.commercialPct && `Commercial ${d.commercialPct}%`].filter(Boolean).join(", "),
  new_vs_existing_construction: d.newConstructionPct ? `New construction ${d.newConstructionPct}%` : "",
  largest_projects: [d.lastLargestJobDescription, d.lastLargestJobAmount].filter(Boolean).join(" - "),
  prior_carrier_name: d.currentCarrier ?? "",
  prior_policy_expiration: d.currentPolicyExpiration ?? "",
});

export function PolyureaQuoteForm() {
  return (
    <div className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9">
      <QuoteForm
        formName="quote"
        tradeName="Polyurea"
        endpoint={WEBHOOK_URL}
        format="json"
        netlifyFallback="/__forms.html"
        extraFields={{ form_name: "quote", source: SITE.domain }}
        options={{ yn: true, feinRequired: false }}
        tradeTypeOptions={TRADE_TYPES}
        defaults={{ coverageTypes: "General Liability" }}
        legacyQuestions={LEGACY}
        deriveLegacy={deriveLegacy}
        classes={{
          input: "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm",
          label: "block text-sm font-heading font-semibold text-espresso mb-1.5",
          legend: "block text-sm font-heading font-semibold text-espresso mb-1.5",
          heading: "font-heading font-bold text-espresso text-sm uppercase tracking-wider",
          button: "w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed",
        }}
      />
    </div>
  );
}
