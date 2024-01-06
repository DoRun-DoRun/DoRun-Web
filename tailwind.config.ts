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
      fontSize: {
        h1: '3.75rem', // 60px
        h2: '2rem', // 32px
        h3: '3.125rem', // 50px
        h4: '1.875rem', // 30px
        body1: '1.75rem', // 28px
        subTitle1: '1.25rem', // 20px
        ...createPxEntries(50),
        ...createRemEntries(50),
      },
      fontWeight: {
        h1: '700',
        h2: '400',
        h3: '700',
        h4: '700',
        body1: '300',
        subTitle1: '300',
      },
      spacing: { ...createPxEntries(100), ...createRemEntries(100) },
      colors: {
        'secondary-300': '#A5B9FF',
        'secondary-200': '#FFF8B8',
        'secondary-100': '#FFA63D',
        'primary-200': '#DFEAFF',
        'primary-100': '#648CF3',
        'gray-1': '#2c2c2c',
        'gray-2': '#4c4c4c',
        'gray-3': '#676767',
        'gray-4': '#361b1b',
        'gray-5': '#b5b5b5',
        'gray-6': '#d5d5d5',
        'gray-7': '#efefef',
        bg: '#d3eff3',
      },
    },
  },
  plugins: [],
};
export default config;