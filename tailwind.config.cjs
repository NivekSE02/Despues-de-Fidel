module.exports = {
  content: ['./src/**/*.{astro,tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        // ── Core palette ──
        bone:    '#faf9f7',   // near-white warm base
        parch:   '#f2efe9',   // slightly darker for subtle sections
        gold:    '#C4A035',   // muted, aged gold
        'gold-pale': '#D8C97A', // lighter gold for subtle marks
        wine:    '#7B1123',   // deep wine red – primary accent
        'wine-pale': '#A63D50', // washed / faded wine
        blush:   '#C87D8A',   // pale rose (ominous softness)
        ink:     '#3a2024',   // darkest text colour (warm near-black)
        muted:   '#8C7A7E',   // secondary text
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
      },
      letterSpacing: {
        ritual: '0.32em',
        wide2:  '0.18em',
      },
      borderWidth: {
        thin: '0.5px',
      },
    },
  },
  plugins: [],
};
