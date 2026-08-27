📊 SubTracker – Smart Subscription & Expense Analytics
A modern, responsive web application built to help users manage, analyze, and track their recurring software and service subscriptions. SubTracker provides instant financial metrics and automated renewal alerts to prevent surprise charges.

🚀 Features
Instant Financial Calculation: Calculates monthly and yearly expenditure based on user billing cycles (Monthly / Yearly).

Automated Renewal Status: Uses JavaScript date logic to accurately track upcoming renewals and warn about past-due subscriptions.

Multi-Currency Support: Supports USD ($), EUR (€), and GBP (£).

Categorization: Classifies subscriptions by user-defined categories (Work, Entertainment, Tools, etc.).

Clean & Responsive UI: Designed with modern CSS for clear visual scanning across all screen sizes.

🧮 How It Works (Core Logic)
Plaintext
1. Billing Conversion:
   - If Billing Cycle = Monthly ➡️ Yearly Cost = Amount × 12
   - If Billing Cycle = Yearly  ➡️ Monthly Cost = Amount ÷ 12

2. Renewal Date Tracker:
   - Days Remaining = Math.ceil((Renewal Date - Current Date) ÷ (1000 × 60 × 60 × 24))

3. Alert Engine:
   - Days < 0   ➡️ Expired / Old Date
   - Days 0-5  ➡️ Renewing Soon (Warning)
   - Days > 5   ➡️ Active Subscription
🛠️ Tech Stack
HTML5: Semantic form inputs, selects, and structured layout.

CSS3: Custom styles, Flexbox/Grid visual containers, dynamic status indicators.

JavaScript (ES6+): DOM manipulation, Date object operations, and dynamic calculations.

💻 Getting Started
Clone the repository:

Bash
git clone https://github.com/tamar77623/SubTracker.git
Open index.html in your favorite web browser.

📬 Contact & Connect
Developed by Frontend Developer

GitHub: tamar77623

Open for Web Development collaborations and Frontend engineering opportunities across Europe.
