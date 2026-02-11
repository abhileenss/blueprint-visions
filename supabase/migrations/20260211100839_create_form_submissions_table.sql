/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the submitter
      - `email` (text) - Email address of the submitter
      - `phone_number` (text) - Phone number of the submitter
      - `sendy_status` (text) - Status of the Sendy submission (success/failed)
      - `sendy_response` (text) - Response from Sendy API
      - `submitted_at` (timestamptz) - Timestamp of form submission
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for service role to insert data (form submissions from Edge Function)
    
  3. Indexes
    - Index on email for quick lookups
    - Index on submitted_at for time-based queries
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  sendy_status text DEFAULT 'pending',
  sendy_response text,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can view form submissions"
  ON form_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);