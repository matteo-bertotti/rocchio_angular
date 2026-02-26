export interface healthStatus {
  service: string;
  database: string;
  uptime: number;
};

export const healthStatusMock: healthStatus = {
    service: 'KO',
    database: 'KO',
    uptime: -1
};