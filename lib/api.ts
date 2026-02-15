import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api-howfartransports.onrender.com";

export const api = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// ── Driver Application ────────────────────────────────────────────────────

export interface DriverApplicationPayload {
  full_name:            string;
  email:                string;
  phone_number:         string;
  guarantor_name?:      string;
  guarantor_phone?:     string;
  years_of_experience?: number;
  additional_notes?:    string;
  resume?:              File | null;
}

/**
 * Step 1: Register a basic account for the applicant (role = user)
 * Step 2: Submit the driver application
 *
 * On the landing page we handle just registration + application —
 * the admin does the approval in their dashboard.
 */
export async function submitDriverApplication(data: DriverApplicationPayload) {
  // First register the user account
  const registerRes = await api.post("/auth/register/", {
    full_name:    data.full_name,
    email:        data.email,
    phone_number: data.phone_number,
  });

  // Then submit the driver application
  // Use FormData because resume is a file
  const form = new FormData();
  if (data.guarantor_name)     form.append("guarantor_name",      data.guarantor_name);
  if (data.guarantor_phone)    form.append("guarantor_phone",     data.guarantor_phone);
  if (data.years_of_experience !== undefined)
    form.append("years_of_experience", String(data.years_of_experience));
  if (data.additional_notes)   form.append("additional_notes",    data.additional_notes);
  if (data.resume)             form.append("resume",              data.resume);

  // The apply endpoint requires auth — grab the token from register response
  // or do a quick OTP login. For the landing page we use a special
  // open-registration-then-apply flow: the backend accepts the application
  // in the same session as registration using the returned token.
  const token = registerRes.data?.access_token;
  const headers: Record<string, string> = {
    "Content-Type": "multipart/form-data",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const applyRes = await api.post("/drivers/apply/", form, { headers });
  return applyRes.data;
}
