// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
  CHART: {
    CREATE: '/chart/create',
    GET: '/chart/get',
    LIST: '/chart/list',
    DELETE: '/chart/delete',
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
};

// Zodiac Signs
export const ZODIAC_SIGNS = [
  'Овен',
  'Телец',
  'Близнецы',
  'Рак',
  'Лев',
  'Дева',
  'Весы',
  'Скорпион',
  'Стрелец',
  'Козерог',
  'Водолей',
  'Рыбы',
];

// Planets
export const PLANETS = [
  'Солнце',
  'Луна',
  'Меркурий',
  'Венера',
  'Марс',
  'Юпитер',
  'Сатурн',
  'Уран',
  'Нептун',
  'Плутон',
];
