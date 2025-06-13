import { Invoice, User } from "@prisma/client";

export type SafeInvoice = Omit<
  Invoice,
  "invoiceDate" | "createdAt" | "updatedAt"
> & {
  invoiceDate: string;
  createdAt: string;
  updatedAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

//Rajout de SafeProject pour que TypeScript accepte les projects avec ce Type

export type SafeProject = {
  _id: string;
  name: string;
  project_manager: string;
  foreman_phone: string;
  end_date: string;
};
