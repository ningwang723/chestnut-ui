const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./resources/**/*.blade.php', './resources/**/*.{js,ts,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#ff9348',
                    DEFAULT: '#fe7839',
                    dark: '#fe632e'
                },
                blueGray: colors.blueGray
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
