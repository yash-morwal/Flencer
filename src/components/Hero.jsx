import React from "react";

const Hero = () => {
  return (
    <section id="hero" className=" bg-[var(--main-bg-color)] pt-10 sm:pt-0">
      <div className="min-h-[100vh] mx-auto px-3 sm:px-6 md:px-14 lg:px-16 py-14 sm:py-20 flex flex-col justify-center sm:flex-row gap-10 items-center">
        {/* Left: main copy */}
        <div className="space-y-6 max-w-150">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-[#87e64b]"
            ></span>
            <span>AI-powered ad studio for modern brands</span>
          </div>

          <h1 className="dm-serif text-3xl sm:text-4xl lg:text-[55px] tracking-tight text-white">
            We help brands by creating the best ADS in the market.
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-lg">
            We help brands by creating creative, high quality AI
            ads at a very affordable price<span className="text-[var(--accent-color)]">.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#87e64b] px-5 py-2.5 text-xs font-medium text-black hover:bg-[#9af963] transition-colors shadow-sm w-full sm:w-auto">
              <span>View our work</span>
            </button>
            <button className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-white hover:border-white hover:bg-white/5 transition-colors w-full sm:w-auto">
              <span>See ad reel</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-white/60">
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              AI-first ad production
            </span>
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              UGC, static &amp; motion
            </span>
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              Fast turnaround, fair pricing
            </span>
          </div>
        </div>

        {/* Right: simple stat / preview */}
        <div className="relative w-full max-w-150 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 sm:p-5 shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-white/70">Recent campaign snapshot</p>
            <span
              className="text-[10px] text-black px-2 py-0.5 rounded-full bg-[#87e64b]"
            >
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] text-white/60">ROAS</p>
              <p className="text-lg font-semibold tracking-tight text-white">
                3.9x
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] text-white/60">CTR</p>
              <p className="text-lg font-semibold tracking-tight text-white">
                2.8%
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] text-white/60">CPA</p>
              <p className="text-lg font-semibold tracking-tight text-white">
                -32%
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/60 p-3">
            <p className="text-[11px] text-white/70 mb-2">
              “They turned our raw product shots into high-converting
              creatives in under a week.”
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80"
                alt="Client"
                className="h-8 w-8 rounded-full object-cover border border-white/30"
              />
              <div className="text-[11px] text-white/80">
                <p>Amelia R.</p>
                <p className="text-white/60">DTC Brand Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
