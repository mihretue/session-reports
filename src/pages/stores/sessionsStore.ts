import { defineStore } from "pinia";

export interface Session {
  id: number;
  date: string;
  storeName: string;
  totalSales: number;
  kpi: string;
}

export const useSessionsStore = defineStore("sessions", {
  state: () => ({
    sessions: [] as Session[],
  }),

  actions: {
    // Load dummy data
    loadDummySessions() {
      this.sessions = [
        {
          id: 1,
          date: "2025-08-01",
          storeName: "Store A",
          totalSales: 1200,
          kpi: "High",
        },
        {
          id: 2,
          date: "2025-08-02",
          storeName: "Store B",
          totalSales: 800,
          kpi: "Medium",
        },
        {
          id: 3,
          date: "2025-08-03",
          storeName: "Store C",
          totalSales: 1500,
          kpi: "Very High",
        },
      ];
    },

    addSession(session: Session) {
      this.sessions.push(session);
    },
  },
});
