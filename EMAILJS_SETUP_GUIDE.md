# 📧 EmailJS Setup Guide - Complete Instructions

## ✅ **EmailJS Integration Complete!**

Your contact form is now connected to EmailJS and ready to send you booking notifications!

---

## 🚀 **Quick Setup (10 Minutes)**

### **Step 1: Create EmailJS Account** (3 minutes)

1. **Go to EmailJS**
   ```
   👉 https://www.emailjs.com
   ```

2. **Sign Up**
   - Click "Sign Up"
   - Use your email: **shahshreya933@gmail.com**
   - Verify your email
   - Free plan: 200 emails/month (perfect for starting!)

3. **Login to Dashboard**
   ```
   👉 https://dashboard.emailjs.com
   ```

---

### **Step 2: Connect Your Gmail** (2 minutes)

1. **Add Email Service**
   - In dashboard, click **"Email Services"**
   - Click **"Add New Service"**
   - Select **"Gmail"**
   - Click **"Connect Account"**
   - Authorize with: **shahshreya933@gmail.com**
   - ✅ Connected!

2. **Copy Your Service ID**
   ```
   You'll see something like: service_abc123xyz
   
   📝 Save this! You'll need it.
   ```

---

### **Step 3: Create Email Template** (3 minutes)

1. **Go to Email Templates**
   - Click **"Email Templates"** in sidebar
   - Click **"Create New Template"**

2. **Template Settings**
   ```
   Template Name: Harmony Salon - Booking Request
   ```

3. **Email Content**

   **Subject Line:**
   ```
   🎉 New Trial Booking from {{from_name}}
   ```

   **Email Body (Copy & Paste This):**
   ```
   New Trial Booking Request!
   
   Customer Details:
   ━━━━━━━━━━━━━━━━━━━━━━
   Name: {{from_name}}
   WhatsApp: {{from_whatsapp}}
   Event Date: {{event_date}}
   Venue: {{venue}}
   Service Requested: {{service}}
   
   Message:
   {{message}}
   
   ━━━━━━━━━━━━━━━━━━━━━━
   
   Action Required:
   ✅ Contact customer via WhatsApp: {{from_whatsapp}}
   ✅ Confirm trial booking date
   ✅ Send package details
   
   Quick Reply Template:
   "Hi {{from_name}}! Thank you for choosing Harmony Salon. 
   We've received your booking request for {{service}}. 
   Let me check availability for {{event_date}} and get back 
   to you shortly. - Shreya"
   
   ━━━━━━━━━━━━━━━━━━━━━━
   Sent from: harmonysalon.biz
   Timestamp: {{timestamp}}
   ```

4. **Template Variables** (These should auto-populate):
   ```
   {{from_name}} - Customer name
   {{from_whatsapp}} - Customer WhatsApp
   {{event_date}} - Event date
   {{venue}} - Venue location
   {{service}} - Service type
   {{message}} - Customer message
   ```

5. **To Email**
   ```
   Set to: shahshreya933@gmail.com
   ```

6. **Save Template**
   - Click **"Save"**
   - Copy your **Template ID** (e.g., `template_xyz789`)

---

### **Step 4: Get Your Public Key** (1 minute)

1. **Go to Account**
   - Click **"Account"** in sidebar
   - Find **"API Keys"** section

2. **Copy Your Public Key**
   ```
   You'll see: Your Public Key
   Copy this (e.g., AbCdEfGhIjKlMnOp12345)
   ```

---

### **Step 5: Add to Your Website** (2 minutes)

1. **Create `.env.local` file** (if not exists)

2. **Add These Lines:**
   ```env
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp12345
   ```

   **Replace with YOUR actual values from EmailJS dashboard!**

3. **Save the file**

4. **Restart your dev server**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

---

## ✅ **Test Your Booking System**

### **Testing Steps:**

1. **Go to Contact Page**
   ```
   http://localhost:3000/contact
   ```

2. **Fill Out Form**
   ```
   Name: Test Customer
   WhatsApp: 9876543210
   Date: Dec 25, 2024
   Service: Bridal Makeup
   Message: This is a test booking
   ```

3. **Click "Send Message"**

4. **What Should Happen:**
   ```
   ✅ Loading spinner appears
   ✅ Success message shows
   ✅ Email sent to shahshreya933@gmail.com
   ✅ WhatsApp opens (optional bonus feature)
   ✅ Form clears
   ```

5. **Check Your Email**
   ```
   You should receive:
   📧 Subject: "🎉 New Trial Booking from Test Customer"
   📧 Body: All the form details
   ```

---

## 🎯 **What Happens When Customer Books**

### **Customer Experience:**

1. **Clicks "Book Your Trial"** anywhere on site
2. Goes to contact page
3. Fills out form (30 seconds)
4. Clicks "Send Message"
5. Sees: ✅ "Thank you! We'll get back to you shortly via WhatsApp"
6. WhatsApp opens automatically (optional - helps them contact you faster)

### **Your Experience:**

1. **Receive Email** 📧
   ```
   To: shahshreya933@gmail.com
   Subject: 🎉 New Trial Booking from [Customer Name]
   
   [All booking details formatted nicely]
   ```

2. **Contact Customer**
   - Open WhatsApp
   - Message the customer
   - Confirm booking
   - Send details

3. **Track Bookings**
   - All emails in your inbox
   - Can organize with Gmail labels
   - Search by date/service/name

---

## 💡 **Bonus Features Already Added**

### **1. Auto WhatsApp After Form** ✅

After successful submission, WhatsApp automatically opens with:
```
"Hi Harmony Salon!

I just submitted a booking form.

Name: [Customer Name]
Service: [Service Type]

Please confirm my trial booking."
```

**Why:** Double confirmation + instant contact!

### **2. Form Validation** ✅

Built-in validation:
- ✅ Name required (min 2 characters)
- ✅ WhatsApp required (min 10 digits)
- ✅ Prevents empty submissions
- ✅ Shows error messages

### **3. Success/Error Messages** ✅

- ✅ Green success box when sent
- ✅ Red error box if failed
- ✅ Loading state while sending
- ✅ Clear user feedback

---

## 📧 **EmailJS Template Variables**

Make sure your EmailJS template includes these variables:

```
{{from_name}} → Customer name
{{from_whatsapp}} → WhatsApp number
{{event_date}} → Event date
{{venue}} → Venue location
{{service}} → Service type
{{message}} → Additional message
```

**Example Email You'll Receive:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 New Trial Booking from Priya Shah
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━
Name: Priya Shah
WhatsApp: 9876543210
Event Date: December 15, 2024
Venue: Hotel Radisson, SG Highway
Service Requested: Bridal Makeup

Message:
Looking for HD makeup for my wedding day. 
Interested in the Gold package with trial.

━━━━━━━━━━━━━━━━━━━━━━
Action Required:
✅ Contact via WhatsApp: 9876543210
✅ Confirm trial booking
✅ Send package details

Quick Reply:
"Hi Priya! Thank you for choosing Harmony 
Salon. We've received your booking request 
for Bridal Makeup. Let me check availability 
for December 15th and get back to you shortly. 
- Shreya"
━━━━━━━━━━━━━━━━━━━━━━
Sent from: harmonysalon.biz
```

---

## 🔐 **Security & Privacy**

### **Environment Variables:**

All EmailJS credentials are stored securely:
- ✅ `.env.local` file (never committed to Git)
- ✅ `NEXT_PUBLIC_` prefix (safe for client-side)
- ✅ No sensitive data exposed

### **EmailJS Free Plan:**
- ✅ 200 emails/month
- ✅ No credit card required
- ✅ Upgrade if you get more bookings!

---

## 🆘 **Troubleshooting**

### **"Failed to send email"**
```
✅ Check: EmailJS service ID is correct
✅ Check: Template ID is correct
✅ Check: Public key is correct
✅ Check: Gmail is connected in EmailJS
✅ Check: Variables match template
```

### **"Email not receiving"**
```
✅ Check: Email in template "To" field
✅ Check: Spam folder
✅ Check: EmailJS quota (200/month)
✅ Check: Service is connected
```

### **"WhatsApp not opening"**
```
✅ Check: Phone number is correct (+919638437565)
✅ Test on mobile device (works better)
✅ Make sure WhatsApp is installed
```

---

## 📊 **EmailJS Dashboard**

### **Monitor Your Bookings:**

In EmailJS dashboard you can see:
- ✅ Total emails sent
- ✅ Success/failure rate
- ✅ Quota remaining (200/month)
- ✅ Recent activity

**Go to:** https://dashboard.emailjs.com

---

## ✅ **Setup Checklist**

Before going live, make sure you've:

- [ ] Created EmailJS account
- [ ] Connected Gmail account
- [ ] Created email template
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Added to `.env.local` file
- [ ] Tested the form (send test booking)
- [ ] Received test email
- [ ] Verified all details are correct

---

## 🎊 **You're All Set!**

Once you add your EmailJS credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**Every "Book Your Trial" button will:**
1. ✅ Collect customer details
2. ✅ Send you an email
3. ✅ Open WhatsApp for instant contact
4. ✅ Show success confirmation
5. ✅ Clear the form for next customer

**You'll receive every booking at: shahshreya933@gmail.com** 📧✨

---

## 🚀 **Next Steps:**

1. **Create EmailJS account** (10 minutes)
2. **Get your 3 credentials** (Service ID, Template ID, Public Key)
3. **Add to `.env.local`**
4. **Test the form**
5. **Deploy & start receiving bookings!**

**Need help with any step? Just ask!** 😊

---

**Pro Tip:** Create Gmail labels to organize bookings:
- "Trial Bookings"
- "Bridal Packages"
- "Urgent"
- "Confirmed"

This helps you stay organized as bookings increase!


