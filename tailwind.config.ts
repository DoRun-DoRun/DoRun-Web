import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => {
  return {
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}px`]: `${i}px` };
    }),
  };
};

const createRemEntries = (size: number) => {
  return {
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [i]: `${i * 0.0625}rem` };
    }),
  };
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: { ...createPxEntries(50), ...createRemEntries(50) },
      spacing: { ...createPxEntries(100), ...createRemEntries(100) },
      colors: {
        'secondary-300': '#A5B9FF',
        'secondary-200': '#FFF8B8',
        'secondary-100': '#FFA63D',
        'primary-300': '#9DB8F9',
        'primary-200': '#DFEAFF',
        'primary-100': '#648CF3',
      },
    },
  },
  plugins: [],
};
export default config;
