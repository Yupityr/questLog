import { createContext, useContext, useState, useCallback } from 'react';
import api from '../api/axios';

const ChaptersContext = createContext(null);

export function ChaptersProvider({ children }) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchChapters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/chapters');
      setChapters(res.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addChapter = useCallback(async (newChapter) => {
    setError(null);
    try {
      const res = await api.post('/chapters', newChapter);
      setChapters((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      throw err;
    }
  }, []);

  const deleteChapter = useCallback(async (id) => {
    setError(null);
    try {
      await api.delete(`/chapters/${id}`);
      setChapters((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      throw err;
    }
  }, []);

  return (
    <ChaptersContext.Provider
      value={{ chapters, loading, error, fetchChapters, addChapter, deleteChapter }}
    >
      {children}
    </ChaptersContext.Provider>
  );
}

export function useChapters() {
  const ctx = useContext(ChaptersContext);
  if (!ctx) throw new Error('useChapters must be used within an ChaptersProvider');
  return ctx;
}