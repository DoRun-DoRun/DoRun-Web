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
        ...createPxEntries(100),
        ...createRemEntries(100),
      },
      spacing: {
        ...createPxEntries(100),
        ...createRemEntries(100),
        '130': '8.125rem',
        '144': '9rem',
        '176': '11rem',
        '208': '13rem',
        '285': '17.813rem',
        '256': '16rem',
        '360': '22.5rem',
        '328': '20.5rem',
        '470': '29.375rem',
        '520': '32.5rem',
        '928': '58rem',
        '1440': '90rem',
        '1600': '100rem',
      },
      fontWeight: {
        h1: '700',
        h2: '400',
        h3: '700',
        h4: '700',
        body1: '300',
        subTitle1: '300',
      },
      colors: {
        'secondary-2': '#FFF8B8',
        'secondary-1': '#FFA63D',
        'primary-2': '#DFEAFF',
        'primary-1': '#648CF3',
        'gray-1': '#2c2c2c',
        'gray-2': '#4c4c4c',
        'gray-3': '#676767',
        'gray-4': '#361b1b',
        'gray-5': '#b5b5b5',
        'gray-6': '#d5d5d5',
        'gray-7': '#efefef',
        bg: '#d3eff3',
      },
      boxShadow: {
        glass: '0px 4px 30px 0px rgba(0, 0, 0, 0.15)',
        rectangle: '2px 2px 4px 0px rgba(0, 0, 0, 0.30)',
      },
      backgroundImage: {
        glass1:
          'linear-gradient(102deg, #FFF 3.78%, rgba(255, 255, 255, 0.40) 106.05%)',
        primary3:
          'linear-gradient(276deg, #1645BE -54.21%, #648CF3 68.91%, #9DB8F9 136.14%)',
      },
    },
  },
  plugins: [],
};
export default config;
