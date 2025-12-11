import React from "react";
import { Sparkles, BookOpen, TrendingUp, Clock, Compass, Award, Scroll, Lightbulb, Shield, Heart, MessageCircle } from "lucide-react";
import { SectionShell, SectionHeading, Card, CTASection, TrustSection, ParticlesLayer } from "./components/ui";

type Term = {
  id: string;
  titleKo: string;
  titleHanja: string;
  meaning: string;
  example: string;
  connection: string;
  icon: string;
};

function Hero() {
  return (
    <section className="section-shell-narrow relative w-full flex flex-col items-center text-center min-h-screen justify-center bg-[#0A0A0F] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 pointer-events-none pattern-mist opacity-60" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6 z-10">
        <p className="tagline">연월일시 네 기둥으로 읽는 다음 10년</p>

        <h1 className="heading-hero drop-shadow-lg max-w-4xl mx-auto">당신의 흐름을 설계하는 사주 리포트</h1>

        <p className="lead-text text-slate-200 mt-4">지금의 고민을 단순히 위로하는 것이 아니라, 앞으로 10년20년의 방향을 설계하는 설계도입니다.</p>

        <p className="body-text readable-block text-slate-200 split-lines max-w-4xl mx-auto">
          <span>사주는 연월일시 네 기둥(四柱)으로 뿌리와 환경, 성향과 리듬을 읽어내고 다음 흐름을 설계하는 정밀 지도입니다.</span>
          <span>지금의 리듬과 주기를 짚어야 기회를 놓치지 않고, 나에게 맞는 선택과 준비를 할 수 있습니다.</span>
        </p>

        <button className="primary-cta mt-2">
          <Sparkles className="w-6 h-6" />
          지금 내 사주 리포트 확인하기
        </button>
        <p className="caption-text text-slate-300">지금 첫 분석 시, 추가 1년 세운 리포트 무료 제공</p>
      </div>
    </section>
  );
}

function WhatIsSaju() {
  const pillars = [
    { name: "연주(年柱)", period: "과거·가족·뿌리", meaning: "출생 연간의 기운으로 뿌리와 환경을 풀이합니다.", Icon: Shield },
    { name: "월주(月柱)", period: "성장·직업·내면", meaning: "성장기와 사회 초기 환경, 기질을 보여줍니다.", Icon: Compass },
    { name: "일주(日柱)", period: "현재·관계·중심", meaning: "나의 중심이 되는 기둥으로 관계와 삶의 핵심을 봅니다.", Icon: Award },
    { name: "시주(時柱)", period: "말년·비전", meaning: "늦어질수록 두드러지는 흐름과 말년 비전을 읽습니다.", Icon: Clock },
  ];

  return (
    <SectionShell className="bg-[#0A0A0F] text-white relative overflow-hidden" narrow>
      <ParticlesLayer />
      <div className="text-center space-y-6 w-full max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="FOUR PILLARS"
          title="사주란 무엇인가?"
          description={
            <p className="body-text text-center text-slate-200 max-w-2xl mx-auto">
              사주는 사람이 태어난 연월일시(年月日時)를 바탕으로<br />
              성격·운명·인생의 흐름을 읽어내는 전통 명리학 체계입니다.
            </p>
          }
        />

        <div className="divider-gradient mx-auto w-32" />

        <Card className="relative mystic-sheen card-emphasis max-w-lg mx-auto">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-2 soft-glow">四柱</div>
            <div className="heading-3">네 기둥</div>
            <div className="caption-text leading-relaxed text-slate-200">
              연·월·일·시를 네 기둥으로 세워
              <br />
              삶의 리듬과 주기를 해석합니다.
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 justify-items-center max-w-4xl mx-auto">
          {pillars.map((pillar) => (
            <Card key={pillar.name} className="text-center hover:border-amber-500/40 transition-all hover:-translate-y-1">
              <div className="text-center mb-2 flex items-center justify-center">
                <pillar.Icon className="w-10 h-10 text-amber-300 soft-glow" />
              </div>
              <div className="heading-3 mb-2">{pillar.name}</div>
              <div className="caption-text mb-2">{pillar.period}</div>
              <div className="caption-text text-slate-300 leading-relaxed">{pillar.meaning}</div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function PurposeOfSaju() {
  return (
    <section className="section-shell-narrow w-full flex flex-col items-center text-center bg-[#0A0A0F] text-white relative overflow-hidden">
      <ParticlesLayer className="opacity-50" />

      <div className="section-shell-narrow relative z-10 flex flex-col items-center gap-6">
        <h2 className="heading-2 title-gradient">사주풀이는 무엇을 알려주나요?</h2>

        <ul className="space-y-4 body-text text-slate-200 readable-block list-disc list-inside text-center mx-auto max-w-4xl">
          <li className="lead-text split-lines">
            <span>네 기둥 정보를 바탕으로 나의 성향·건강·재물·직업·연애운의 큰 흐름을 읽어냅니다.</span>
            <span>막연한 조언이 아니라 실제로 실행할 수 있는 방향과 선택지를 구체화합니다.</span>
          </li>
          <li className="split-lines">
            <span>사주는 타고난 리듬과 개인의 운의 흐름을 함께 분석하여</span>
            <span>현재의 선택이 미래에 미치는 영향까지 입체적으로 짚어냅니다.</span>
          </li>
          <li className="split-lines">
            <span>불확실한 선택지에 대한 근거를 찾아</span>
            <span>삶의 길이 길어질수록 균형과 회복을 돕는 설계를 제안합니다.</span>
          </li>
        </ul>

        <Card className="border-l-4 text-center mx-auto max-w-3xl">
          <p className="lead-text text-amber-200 leading-relaxed">
            사주는 운명을 결정하는 것이 아니라
            <br />
            시간과 행동의 조합으로 삶의 리듬을 설계하는
            <br className="hidden md:block" />
            지도를 제공하는 학문입니다.
          </p>
        </Card>
      </div>
    </section>
  );
}

function FourPillarsTimeline() {
  const timeline = [
    {
      phase: "초년 (0~20세)",
      pillar: "연주(年柱)",
      desc: "뿌리와 배경의 기운.\n가족, 성장환경, 기본 자원과 기질을 다집니다.",
      Icon: Heart,
      color: "from-amber-500 to-orange-500",
    },
    {
      phase: "청년 (20~35세)",
      pillar: "월주(月柱)",
      desc: "성장과 확장의 기운.\n학업·직업 초기, 관계망과 커리어 방향을 정리합니다.",
      Icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
    },
    {
      phase: "중년 (35~55세)",
      pillar: "일주(日柱)",
      desc: "나의 중심 기둥.\n관계와 역할의 재정비, 본질적인 선택을 강화합니다.",
      Icon: TrendingUp,
      color: "from-amber-500 to-orange-500",
    },
    {
      phase: "말년 (55세 이후)",
      pillar: "시주(時柱)",
      desc: "수렴과 정리의 기운.\n노년의 비전, 후반기 자원 배치와 균형을 설계합니다.",
      Icon: Scroll,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="section-shell-narrow w-full flex flex-col items-center text-center bg-[#0A0A0F] text-white relative overflow-hidden">
      <ParticlesLayer className="opacity-50" />
      <div className="section-shell-narrow flex flex-col items-center gap-6 relative z-10">
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="heading-2 title-gradient mb-4 text-center">네 기둥으로 보는 나의 인생 구간</h2>

          <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 justify-items-center max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="relative w-full">
                  <Card className="h-full hover:border-amber-500/40 transition-all hover:-translate-y-1 light-sweep">
                    <div className={`mb-2 text-center bg-gradient-to-br ${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto soft-glow`}>
                      <item.Icon className="w-10 h-10 text-[#0A0A0F]" />
                    </div>
                    <div className="text-center">
                      <div className="heading-3 mb-1">{item.phase}</div>
                      <div className="caption-text mb-3">{item.pillar}</div>
                      <div className="caption-text leading-relaxed whitespace-pre-line text-slate-200">{item.desc}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepthOfSaju() {
  return (
    <section className="section-shell-narrow w-full flex flex-col items-center text-center bg-[#0A0A0F] text-white">
      <div className="section-shell-narrow flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="heading-2 title-gradient mb-6 text-center">사주는 왜 학문이라고 부를까요?</h2>

          <Card className="p-8 md:p-12 text-center">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <ul className="space-y-4 body-text text-slate-200 readable-block list-disc list-inside text-center">
                <li className="lead-text split-lines">
                  <span>사주는 천간·지지와 오행, 기후·지역·문화까지 겹겹이 쌓인 학문입니다.</span>
                  <span>수천 년 동안 축적된 사례와 데이터를 통해 검증되어 왔습니다.</span>
                </li>
                <li className="split-lines">
                  <span>시간과 행동의 상호작용을 분석하는 구조 체계이며</span>
                  <span>변화의 패턴을 추적해 선택지를 명확히 좁혀줍니다.</span>
                </li>
                <li className="split-lines">
                  <span>체계적인 사주 읽기는</span>
                  <span>인생의 장기 설계와 실용적인 의사결정에 근거가 됩니다.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8 border-t border-amber-500/20 justify-items-center">
              {["천간", "지지", "오행", "음양", "변화 패턴"].map((term) => (
                <Card key={term} className="p-4 text-center">
                  <div className="caption-text text-amber-300 font-semibold">{term}</div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function KeyTerms() {
  const terms: Term[] = [
    {
      id: "heavenly-stems",
      titleKo: "천간",
      titleHanja: "天干",
      meaning: "하늘의 기운을 10간으로 구분해 성향과 리듬의 뿌리를 봅니다.",
      example: "병화·정화가 강하면 추진력, 경금이 강하면 분명한 기준이 드러납니다.",
      connection: "타고난 기질과 리듬을 설정하는 뿌리 역할",
      icon: "🌟",
    },
    {
      id: "earthly-branches",
      titleKo: "지지",
      titleHanja: "地支",
      meaning: "땅의 기운인 12지를 통해 일상의 사건과 시간 흐름을 읽습니다.",
      example: "자·오 충은 빠른 전환, 묘·유 합은 관계 확장을 암시합니다.",
      connection: "주기마다 찾아오는 사건과 환경 변화의 신호",
      icon: "🌓",
    },
    {
      id: "five-elements",
      titleKo: "오행",
      titleHanja: "五行",
      meaning: "목·화·토·금·수의 상생상극으로 균형과 자원 배치를 판단합니다.",
      example: "목이 강하면 성장, 금이 강하면 통제와 구조화가 강조됩니다.",
      connection: "현재 자원의 균형과 우선순위를 잡는 기준",
      icon: "✨",
    },
    {
      id: "yin-yang",
      titleKo: "음양",
      titleHanja: "陰陽",
      meaning: "기운의 극성을 통해 표현 방식과 의사결정 속도를 봅니다.",
      example: "양이 강하면 직선적이고, 음이 강하면 섬세한 조정이 돋보입니다.",
      connection: "성향과 커뮤니케이션 스타일을 결정짓는 축",
      icon: "☯️",
    },
    {
      id: "daewoon",
      titleKo: "대운",
      titleHanja: "大運",
      meaning: "10년 단위로 방향이 크게 꺾이는 시기를 의미합니다.",
      example: "대운 교체기에 직업 전환이나 이사, 관계 재정비가 자주 일어납니다.",
      connection: "장기 전략을 세울 때 꼭 봐야 할 큰 흐름",
      icon: "🧭",
    },
    {
      id: "sewoon",
      titleKo: "세운",
      titleHanja: "歲運",
      meaning: "1년 단위의 변화로, 올해 집중해야 할 리듬을 알려줍니다.",
      example: "세운의 오행이 강하면 그 자원과 관련된 기회가 도드라집니다.",
      connection: "연간 목표와 실행 타이밍을 조율하는 기준",
      icon: "⏳",
    },
    {
      id: "relation",
      titleKo: "합충형",
      titleHanja: "合沖刑",
      meaning: "기운의 합·충·형 관계로 관계와 사건의 변수를 읽습니다.",
      example: "합은 협력, 충은 전환과 이동, 형은 과제와 도전을 암시합니다.",
      connection: "관계, 환경 변화에 대한 대응 전략",
      icon: "🌀",
    },
    {
      id: "yongsin",
      titleKo: "용신",
      titleHanja: "用神",
      meaning: "전체 균형을 보완하는 핵심 기운을 의미합니다.",
      example: "목이 약하면 목 자원을 보완해 균형을 맞춥니다.",
      connection: "리스크를 줄이고 성장성을 높이는 보완 전략",
      icon: "🎯",
    },
    {
      id: "sibseong",
      titleKo: "십성",
      titleHanja: "十星",
      meaning: "관계와 역할을 10가지 별로 나눠 일·돈·관계의 포지션을 봅니다.",
      example: "정재는 정직한 재물운, 편재는 기민한 기회 포착을 뜻합니다.",
      connection: "나의 역할과 관계 방식, 자원 흐름을 해석",
      icon: "⭐",
    },
    {
      id: "strength",
      titleKo: "신강신약",
      titleHanja: "身强身弱",
      meaning: "일주의 힘이 강한지 약한지로 체력과 자원 관리 방향을 봅니다.",
      example: "신약하면 기운을 보완하고, 신강하면 과한 부분을 조절합니다.",
      connection: "체력·정신력 관리와 자원 분배의 기준",
      icon: "💫",
    },
  ];

  return (
    <section className="section-shell-narrow w-full flex flex-col items-center text-center bg-[#0A0A0F] text-white">
      <div className="section-shell-narrow flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="heading-2 title-gradient mb-10 text-center">사주풀이에 자주 등장하는 핵심 용어들</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {terms.map((item) => (
              <Card key={item.id} className="text-center hover:border-amber-500/40 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-3xl soft-glow">{item.icon}</div>
                  <div className="heading-3 text-amber-200 leading-tight">
                    <span>{item.titleKo}</span>
                    <br />
                    <span className="text-[0.85em] tracking-[0.08em]">{`(${item.titleHanja})`}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="caption-text text-amber-200 font-semibold">
                    내 삶과의 연결: <span className="text-slate-200 font-normal">{item.connection}</span>
                  </div>
                  <div className="body-text text-sm leading-relaxed">
                    <span className="caption-text block mb-1 text-slate-300">의미</span>
                    {item.meaning}
                  </div>
                  <div className="caption-text leading-relaxed bg-black/30 rounded-lg p-3 text-slate-200">
                    <span className="caption-text block mb-1 text-slate-400">예시</span>
                    {item.example}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const benefits = [
    { icon: Shield, text: "전통 명리학 기반 + 최신 상담 패턴을 더한 정밀 분석" },
    { icon: Compass, text: "연·월·일·시 4기둥 전체를 입체적으로 설계" },
    { icon: TrendingUp, text: "향후 10년, 1년 단위 흐름을 구체적인 행동으로 전환" },
    { icon: Lightbulb, text: "막연한 고민을 실행 가능한 선택지로 정리" },
  ];

  return (
    <TrustSection
      heading={
        <>
          확실한 가치와 함께,
          <br className="md:hidden" /> 성장의 지름길을 찾는 방법
        </>
      }
      intro={
        <div className="text-center space-y-6 mb-6">
          <div className="body-text text-slate-200 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">길이 보이지 않는 사주풀이가 아닌</p>
            <div className="space-y-2 heading-3 text-amber-300">
              <p>지금의 리듬은 무엇인지</p>
              <p>어디에 힘을 써야 하는지</p>
              <p>무엇을 조심해야 하는지</p>
            </div>
            <p className="text-slate-300">누구나 이해할 수 있는 언어로 안내합니다.</p>
          </div>

          <Card className="border-l-4 max-w-3xl mx-auto text-center">
            <p className="lead-text text-amber-200 leading-relaxed">
              지금의 고민이 작아도 무시하지 마세요.
              <br />
              <span className="font-bold">지금의 선택이 앞으로 10년의 방향을 바꿀 수 있습니다.</span>
              <br />
              그 흐름을 사주가 가장 먼저 알려줍니다.
            </p>
          </Card>
        </div>
      }
      highlights={benefits}
      narrow
      columns={2}
    />
  );
}

function TrustBlock() {
  const trustCards = [
    {
      icon: Shield,
      text: (
        <>
          <div className="heading-3 text-amber-200 mb-2">전문가 프로필</div>
          <div className="caption-text text-slate-200">명리학 연구자 / 15년 경력, 3,000건 이상 사주 분석</div>
        </>
      ),
    },
    {
      icon: BookOpen,
      text: (
        <>
          <div className="heading-3 text-amber-200 mb-2">분석 방식</div>
          <div className="caption-text text-slate-200 leading-relaxed text-left space-y-1">
            <p>전통 간지오행 해석</p>
            <p>현대 심리명리학 관점</p>
            <p>실제 상담 사례 패턴 분석</p>
          </div>
        </>
      ),
    },
    {
      icon: MessageCircle,
      text: (
        <>
          <div className="heading-3 text-amber-200 mb-2">후기 & 검증</div>
          <ul className="caption-text text-slate-200 space-y-1 text-left list-disc list-inside">
            <li>막연하던 진로 고민이 구체적인 방향으로 정리되었습니다.</li>
            <li>부모·연인과의 갈등 포인트를 명확히 이해하고 풀었습니다.</li>
            <li>사업 리듬을 파악해 투자와 확장 시점을 조율했습니다.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <TrustSection
      heading="왜 이 리포트를 믿어도 될까요?"
      intro={<p className="body-text text-slate-200 max-w-3xl mx-auto">경험과 데이터, 두 축을 모두 갖춘 분석으로 신뢰를 쌓았습니다.</p>}
      highlights={trustCards}
      className="w-full bg-[#0A0A0F] py-20"
    />
  );
}

function FinalCTA() {
  return (
    <CTASection
      title={
        <>
          지금, 나만의 사주 지도를 펼쳐보세요.
          <br className="md:hidden" />
        </>
      }
      body={
        <>
          <span>오늘의 선택이 앞으로 10년의 방향을 바꿀 수 있습니다.</span>
          <span>지금의 리듬을 놓치지 마세요.</span>
        </>
      }
      ctaLabel="지금 내 사주 리포트 확인하기"
      note="지금 첫 분석 시, 추가 1년 세운 리포트 무료 제공"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Hero />
      <WhatIsSaju />
      <PurposeOfSaju />
      <FourPillarsTimeline />
      <DepthOfSaju />
      <KeyTerms />
      <ValueProposition />
      <TrustBlock />
      <FinalCTA />
    </div>
  );
}
