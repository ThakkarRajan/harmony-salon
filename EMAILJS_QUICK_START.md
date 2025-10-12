# ⚡ EmailJS Quick Start - Get Bookings Working NOW!

## ✅ **What I Already Did:**

✅ Installed EmailJS package  
✅ Updated contact form to use EmailJS  
✅ Added WhatsApp auto-open feature  
✅ Built-in form validation  

**Your form is READY! Just needs your EmailJS credentials.**

---

## 🚀 **3 Steps to Start Receiving Bookings**

### **STEP 1: Get EmailJS Credentials** (5 minutes)

1. **Go to:** https://www.emailjs.com
2. **Sign up** with shahshreya933@gmail.com
3. **You'll get 3 codes:**
   ```
   📝 Service ID:  service_xxxxxxx
   📝 Template ID: template_xxxxxxx
   📝 Public Key:  xxxxxxxxxxxxxxx
   ```

---

### **STEP 2: Create Email Template** (3 minutes)

In EmailJS dashboard → Email Templates → Create New:

**Template Name:** Harmony Salon Booking

**Subject:** 🎉 New Booking from {{from_name}}

**Body (Copy this):**
```
New Trial Booking! 🎊

Name: {{from_name}}
WhatsApp: {{from_whatsapp}}
Date: {{event_date}}
Venue: {{venue}}
Service: {{service}}

Message:
{{message}}

━━━━━━━━━━━━━━━
Contact customer: {{from_whatsapp}}
```

**To Email:** shahshreya933@gmail.com

**Save** and copy the Template ID!

---

### **STEP 3: Add to Your Website** (2 minutes)

**Create file:** `.env.local` in your project root

**Add these lines** (with YOUR actual IDs):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGh12345
```

**Restart server:**
```bash
npm run dev
```

---

## 🎉 **DONE! Test It:**

1. Go to http://localhost:3000/contact
2. Fill form with test data
3. Click "Send Message"
4. ✅ Check email: shahshreya933@gmail.com
5. ✅ You should receive booking notification!

---

## 📧 **What You'll Receive:**

**Email to:** shahshreya933@gmail.com

**Example:**
```
From: noreply@emailjs.com
To: shahshreya933@gmail.com
Subject: 🎉 New Booking from Priya Shah

━━━━━━━━━━━━━━━━━━━━━
New Trial Booking! 🎊

Name: Priya Shah
WhatsApp: 9876543210
Date: December 15, 2024
Venue: Hotel Radisson
Service: Bridal Makeup

Message:
Looking for HD makeup for wedding

━━━━━━━━━━━━━━━━━━━━━
Contact customer: 9876543210
```

---

## 💡 **Bonus: WhatsApp Auto-Open**

After form submission, WhatsApp automatically opens with:
```
"Hi Harmony Salon!

I just submitted a booking form.

Name: Priya Shah
Service: Bridal Makeup

Please confirm my trial booking."
```

**This gives you INSTANT contact with the customer!**

---

## 🎯 **Quick Reference**

### **EmailJS Dashboard:**
https://dashboard.emailjs.com

### **What You Need:**
1. Service ID (from Gmail connection)
2. Template ID (from email template)
3. Public Key (from Account settings)

### **Where to Add:**
`.env.local` file in project root

### **How to Test:**
Fill contact form → Check email

---

## ✅ **That's It!**

**3 Simple Steps:**
1. ✅ Sign up at emailjs.com
2. ✅ Get 3 IDs
3. ✅ Add to .env.local

**Result:** Every "Book Your Trial" sends you an email! 📧

---

**Need help? Check `EMAILJS_SETUP_GUIDE.md` for detailed instructions with screenshots!**

**Ready to set up EmailJS?** Just go to https://www.emailjs.com and follow the 3 steps above! 🚀


