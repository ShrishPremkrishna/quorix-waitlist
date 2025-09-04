-- Create waitlist table to store email signups
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
-- but restrict viewing to authenticated users only
CREATE POLICY "Allow public waitlist signup" ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow viewing waitlist entries if authenticated (for admin purposes)
CREATE POLICY "Allow authenticated users to view waitlist" ON public.waitlist 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
