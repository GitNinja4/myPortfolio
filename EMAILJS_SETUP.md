# EmailJS Setup Guide for Your Portfolio

Your contact form is now integrated with EmailJS! Follow these steps to get it working:

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. Verify your email address

## Step 2: Get Your Public Key

1. After signing in, go to the **Account** page (usually at the top right)
2. Find your **Public Key** (looks like: `abc123def456ghi789`)
3. Copy it and save it for later

## Step 3: Create an Email Service

1. Go to **Email Services** in the sidebar
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** - Most popular option
   - **Outlook**
   - **Custom SMTP**
4. For Gmail:
   - Connect your Gmail account
   - Grant EmailJS access
5. Name your service something like `gmail` or `contact_service`
6. **Copy the Service ID** (you'll need this)

## Step 4: Create an Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Name it something like `contact_form` or `portfolio_contact`
4. Use this template structure:

```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

5. In the template editor:
   - Set the **To Email** field to: `{{to_email}}`
   - In the reply-to section, you can set: `{{from_email}}`
6. Click **Save Template**
7. **Copy the Template ID** from the template list

## Step 5: Update Your Portfolio

Open the file: `src/lib/emailjs-service.ts`

Replace these three values with yours:

```typescript
// Line 4 - Your Public Key from EmailJS Account
const PUBLIC_KEY = "your_emailjs_public_key_here";

// Line 19 - Your Service ID from Email Services
"your_service_id_here", // Service ID

// Line 20 - Your Template ID from Email Templates
"your_template_id_here", // Template ID

// Line 28 - Your email address (where to receive messages)
to_email: "your_email@gmail.com", // Your email address
```

### Example:
```typescript
const PUBLIC_KEY = "abc123def456ghi789";

await emailjs.send(
  "service_abc123xyz", // Your Service ID
  "template_def456xyz", // Your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
    to_email: "aditya@gmail.com", // Your actual email
  }
);
```

## Step 6: Test It!

1. Start your dev server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. You should see a success notification
5. Check your email inbox for the message!

## Troubleshooting

### Email not sending?
- Check that all three IDs are correctly copied (no extra spaces)
- Verify your email service is verified in EmailJS
- Check browser console for error messages (F12 > Console)

### Keep getting "Failed to send email"?
- Go to EmailJS Dashboard > Email Services > Check if service is **Active**
- Try resending a test email from EmailJS dashboard first
- Make sure Gmail/Outlook has 2FA disabled for EmailJS or use an [App Password](https://support.google.com/accounts/answer/185833)

### Template not working?
- Make sure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
- Don't use different capitalization

## Features Already Implemented

✅ Loading state while sending  
✅ Toast notifications for success/error  
✅ Form clears after successful submission  
✅ Error handling with user-friendly messages  
✅ Responsive design  

## Next Steps (Optional)

- Add rate limiting on the backend later
- Store submissions in a database for archives
- Add attachment support
- Implement honeypot spam protection
