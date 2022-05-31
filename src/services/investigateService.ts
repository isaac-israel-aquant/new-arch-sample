class InvestigateService {
  async create(params: any): Promise<any> {
    return {
      id: "test",
    };
  }
}

// Create a  singleton for this class
const investigateService = new InvestigateService();
export default investigateService;
