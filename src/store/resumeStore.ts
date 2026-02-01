import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AnalysisResult {
  id: string;
  fileName: string;
  date: string;
  score: number;
  matchScore: number;
  keywords: { found: string[]; missing: string[] };
  improvements: { original: string; improved: string }[];
  feedback: string;
}

interface ResumeState {
  history: AnalysisResult[];
  addResult: (result: Omit<AnalysisResult, 'id' | 'date'>) => string;
  deleteResult: (id: string) => void;
  clearHistory: () => void;
  getResultById: (id: string) => AnalysisResult | undefined;
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set, get) => ({
      history: [],
      addResult: (result) => {
        const id = Math.random().toString(36).substr(2, 9);
        set((state) => ({
          history: [
            {
              ...result,
              id,
              date: new Date().toISOString(),
            },
            ...state.history,
          ],
        }));
        return id;
      },
      deleteResult: (id) => set((state) => ({
        history: state.history.filter((r) => r.id !== id),
      })),
      clearHistory: () => set({ history: [] }),
      getResultById: (id) => get().history.find((r) => r.id === id),
    }),
    {
      name: 'resume-ai-database',
    }
  )
);
