from supabase import create_client, Client

URL = "https://gegcnwarsgirjhabjrkz.supabase.co"
KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ2Nud2Fyc2dpcmpoYWJqcmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NjcwNDIsImV4cCI6MjA3NTM0MzA0Mn0.GLFwRnUbfaqzT9dXL6f4nDFf-fR47rzZULf6DpGGW4g"
supabase: Client = create_client(URL, KEY)

