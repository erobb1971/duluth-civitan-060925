// export interface AdminUser {
//   id: string;
//   username: string;
//   role: 'admin' | 'super_admin';
//   permissions: string[];
// }

export interface TestResult {
  test: string;
  status: "pass" | "fail" | "pending";
  details: string;
  data?: any;
}
