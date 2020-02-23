export interface MailData {
  sender_email?: string;
  sender_name?: string;
  recipient_email?: string;
  cc_id?: string;
  bcc_id?: string;
  subject?: string;
  mail_body?: string;
  sent_at?: number;
  read?: boolean;
  starred?: boolean;
}

export interface RegisteredUsers {
  email: string;
  name: string;
  pwd: string;
}
