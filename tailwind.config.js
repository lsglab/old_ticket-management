const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: production,
    mode: 'all',
    content: [    
      "./src/**/*.svelte",
  ],
  options: {
      fontFace: true,
      keyframes: true,
      variables: true,
  },
},
  darkMode: false,
  theme: {
		extend: {
        colors: {
            primary: "#00BF32",
            sky1 : "#7D9EC7",
            sky2 : "#8DAAD2",
            turquoise : "#1E6577",
        },
		},
		fontWeight: {
			normal: 300,
		},
	},
  variants: {
    extend: {},
  },
  plugins: [],
}
