import axios from 'axios';

// Base URL for backend API endpoints
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

export const childAPI = {
  getChildren: () => api.get('/children'),
  createChild: (data) => api.post('/children', data),
  getChild: (id) => api.get(`/children/${id}`),
};

export const quizAPI = {
  getQuizzes: (ageGroup) => api.get('/quizzes', { params: { ageGroup } }),
  submitQuiz: (data) => api.post('/quizzes/submit', data),
};

export const growthAPI = {
  getHistory: (childId) => api.get(`/growth/${childId}`),
  addRecord: (data) => api.post('/growth', data),
};

export default api;

// End of API service configuration
