class HistoricDataService {
  async get(params: any): Promise<any> {
    return [];
  }
}

// Create a  singleton for this class
const historicDataService = new HistoricDataService();
export default historicDataService;
