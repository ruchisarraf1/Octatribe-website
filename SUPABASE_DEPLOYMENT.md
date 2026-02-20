# Supabase Backend Deployment Guide

This guide details how to deploy your OctaTribe backend (PostgreSQL database) on Supabase and connect it to your application.

## 1. Prerequisites

- A [GitHub account](https://github.com)
- A [Supabase account](https://supabase.com) (Log in with GitHub recommended)

## 2. Create a Supabase Project

1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard/projects).
2.  Click **"New Project"**.
3.  Select your Organization.
4.  **Name**: `octatribe-backend` (or similar).
5.  **Database Password**:
    *   **IMPORTANT**: Click "Generate a password" and **COPY IT IMMEDIATELY** to a safe place. You will need it later.
    *   *Example Password*: `OctaTribeSuperSecurePassword123!`
6.  **Region**: Select a region close to your users (e.g., *Singapore* or *Mumbai* for Nepal/Asia).
7.  Click **"Create new project"**.
8.  Wait ~1-2 minutes for the database to provision.

## 3. Get Database Connection Strings

1.  In your Supabase project dashboard, go to **Settings** (gear icon at bottom left) -> **Database**.
2.  Under **Connection String**, select the **URI** tab.
3.  Copy the connection string. It looks like this:
    ```
    postgresql://postgres.USER:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
    ```
4.  **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the actual password you generated in Step 2.

## 4. Configure Local Project

1.  Open your project in VS Code.
2.  Open the `.env` file.
3.  Update the `DATABASE_URL` and `DIRECT_URL` variables. Use the **same connection string** for both for simplicity (unless using connection pooling specifically, but the direct URI works for standard pooling too).

    **Note on Special Characters**: If your password has special characters like `#`, `@`, `!`, you **MUST** URL-encode them.
    *   `@` becomes `%40`
    *   `!` becomes `%21`
    *   `#` becomes `%23`

    ```env
    # Example .env
    DATABASE_URL="postgresql://postgres.abcdef:[YOUR_ENCODED_PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
    DIRECT_URL="postgresql://postgres.abcdef:[YOUR_ENCODED_PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
    
    # Don't forget your Admin Password!
    ADMIN_PASSWORD="admin123"
    ```

## 5. Deploy Schema (Push Tables)

This step creates all your tables in the Supabase database based on your local `prisma/schema.prisma` file.

1.  Open your terminal in VS Code.
2.  Run the push command:
    ```bash
    npx prisma db push
    ```
3.  You should see success message: `🚀 Your database is now in sync with your Prisma schema.`

## 6. Seed Initial Data (Optional but Recommended)

To populate your database with initial data (Services, FAQs, Team placeholders):

1.  Run the seed command:
    ```bash
    npx prisma db seed
    ```
2.  This runs the script in `prisma/seed.ts` and fills your tables.

## 7. Verify in Supabase

1.  Go back to your Supabase Dashboard.
2.  Click the **Table Editor** icon (on the left sidebar, looks like a table/spreadsheet).
3.  You should see all your tables listed: `Contact`, `Service`, `CaseStudy`, `TeamMember`, `SiteSettings`, etc.
4.  Click on `SiteSettings` or `Service` to confirm data is there.

## 8. Connect Vercel to Supabase

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project (`octatribe-site`).
3.  Go to **Settings** -> **Environment Variables**.
4.  Add/Edit the following variables to match your `.env`:
    *   `DATABASE_URL`
    *   `DIRECT_URL`
    *   `ADMIN_PASSWORD`
5.  **Redeploy** your project (Deployments -> ... -> Redeploy) for changes to take effect.

---

## 📄 Database Schema Reference

Your database schema is managed by **Prisma**. The source of truth is `prisma/schema.prisma`. Here is the structure that will be created:

### Core Tables
*   **SiteSettings**: Global configuration (Email, Phone, SEO, Social Links). Singleton (only ID=1).
*   **Contact**: Stores incoming messages/leads.
*   **Newsletter**: Stores subscriber emails.

### Content Tables
*   **Service**: Services offered (`title`, `slug`, `description`, `icon`, `features`).
*   **CaseStudy**: Portfolio items (`title`, `client`, `image`, `result`).
*   **TeamMember**: Team profiles (`name`, `role`, `bio`, `image`, `socials`).
*   **ClientLogo**: Partner/Client logos for marquee.
*   **Testimonial**: Customer reviews/quotes.
*   **ProcessStep**: Steps in your "How We Work" process.
*   **FAQ**: Questions and answers.

*Note: You do not need to manually run SQL commands. `npx prisma db push` handles all SQL generation and execution for you.*
