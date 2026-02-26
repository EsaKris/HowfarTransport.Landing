import axios from "axios";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-howfartransports.onrender.com";

export const api = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ───────────────────────────────────────────────
// Driver Application Types
// ───────────────────────────────────────────────

export interface DriverApplicationPayload {
  full_name: string;
  email: string;
  phone_number: string;
  guarantor_name?: string;
  guarantor_phone?: string;
  years_of_experience?: number;
  additional_notes?: string;
  resume?: File | null;
}

/**
 * Register user account then submit driver application.
 * Landing page flow uses registration → application submission.
 */
export async function submitDriverApplication(
  data: DriverApplicationPayload
): Promise<any> {
  try {
    // Step 1 — Register account
    const registerRes = await api.post("/auth/register/", {
      full_name: data.full_name,
      email: data.email,
      phone_number: data.phone_number,
    });

    // Step 2 — Prepare application form data
    const form = new FormData();

    if (data.guarantor_name)
      form.append("guarantor_name", data.guarantor_name);

    if (data.guarantor_phone)
      form.append("guarantor_phone", data.guarantor_phone);

    if (data.years_of_experience !== undefined)
      form.append(
        "years_of_experience",
        String(data.years_of_experience)
      );

    if (data.additional_notes)
      form.append("additional_notes", data.additional_notes);

    if (data.resume) form.append("resume", data.resume);

    // Token from registration response (if backend returns one)
    const token = registerRes.data?.access_token;

    const headers: Record<string, string> = {};

    if (token) headers.Authorization = `Bearer ${token}`;

    const applyRes = await api.post("/drivers/apply/", form, {
      headers,
    });

    return applyRes.data;
  } catch (error) {
    console.error("Driver application submission failed", error);
    throw error;
  }
}

// ───────────────────────────────────────────────
// Bike Owners API Service
// ───────────────────────────────────────────────

export const bikeOwnersApi = {
  list: (params?: Record<string, any>) =>
    api.get("/drivers/admin/bike-owners/", { params }),

  detail: (id: string | number) =>
    api.get(`/drivers/admin/bike-owners/${id}/`),

  earnings: (id: string | number) =>
    api.get(`/drivers/admin/bike-owners/${id}/earnings/`),

  contact: (id: string | number, data: any) =>
    api.post(`/drivers/admin/bike-owners/${id}/contact/`, data),
};