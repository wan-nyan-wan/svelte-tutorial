const production = !process.env.ROLLUP_WATCH; // Or some other env var like NODE_ENV
module.exports = {
    future: {
        // For Tailwind 2.0 upcoming changes
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    plugins: [],
    purge: {
        content: ['./src/**/*.svelte', './public/**/*.html'],
        enabled: production, // Disable purge in dev
    },
    theme: {
        fontFamily: {
            body: ['Raleway'],
        },
        extend: {
            animation: {
                fadeIn: 'fadeIn 2s ease-in forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    variants: {
        animation: ['motion-safe'],
    },
};
