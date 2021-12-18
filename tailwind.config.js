module.exports = {
    content: ['./src/**/*.{ts,tsx,js,jsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'false'
    theme: {
        extend: {
            spacing: { 17: '4.25rem' },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
