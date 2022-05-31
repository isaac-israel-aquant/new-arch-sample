class SalesForceConnection {
  async get<T = any>(url: string): Promise<T> {
    return new Promise<T>((resolve) => resolve("get" as any));
  }

  async post<T = any, R = any>(url: string, params: T): Promise<R> {
    return new Promise<R>((resolve) => resolve("post" as any));
  }

  async put<T = any>(url: string): Promise<T> {
    return new Promise<T>((resolve) => resolve("put" as any));
  }

  async pacth<T = any>(url: string): Promise<T> {
    return new Promise<T>((resolve) => resolve("patch" as any));
  }

  async delete<T = any>(url: string): Promise<T> {
    return new Promise<T>((resolve) => resolve("delete" as any));
  }
}

// Create a  singleton for this class
const salesForceConnection = new SalesForceConnection();
export default salesForceConnection;
