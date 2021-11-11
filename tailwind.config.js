module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'translate(3px,0px)'
            },
            '50%': {
                transform: 'translate(-3px,0px)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 0.1s linear infinite',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
