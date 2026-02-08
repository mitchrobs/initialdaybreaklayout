import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'classics',
    title: 'Classics',
    subtitle: 'Timeless newspaper favorites.',
    gameIds: ['kakuro', 'nonogram', 'crossword', 'sudoku'],
  },
  {
    id: 'geoplay',
    title: 'GeoPlay',
    subtitle: 'Explore the world, one puzzle at a time.',
    gameIds: ['mapdetective', 'cartographer', 'landmarkzone'],
  },
  {
    id: 'originals',
    title: 'Original Puzzles',
    subtitle: "Games you won't find anywhere else.",
    gameIds: ['whodunit', 'cryptic', 'tileshift', 'wordweave'],
  },
];
