import type { AxiosError } from "axios";

export type ErrorResponseType = AxiosError<{
  message?: string;
  errors?: { message: string }[];
}>;
