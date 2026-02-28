# ⛳ Golf Score Tracker (WIP)

**A modern golf score tracking web app designed with women and new golfers in mind.**

This is a work-in-progress project focused on functionality and early feature implementation. The current priority is building a solid user authentication foundation and the core score tracking experience — with intuitive visual feedback rather than just raw numbers.

---

## 🎯 Why This App Exists

While traditional golf score tracking apps often focus only on numerical scores, this app aims to:

- **Empower new golfers** — offering a stress-free way to understand performance
- **Appeal to women golfers** — a rapidly growing demographic in the sport
- **Highlight emotional or qualitative feedback**, not just strokes

Golf participation has been growing, and recent trends show significant increases among women and younger players:  
- Women now account for roughly **28% of on-course golfers** in the U.S., and female participation has surged to a record high of nearly *8 million players*. [^1]  
- Since 2019, female participation rose by approximately **46%**, with women driving a large portion of recent growth in the sport. [^1] 

This trend underscores a broader shift in the golf community — one that this app is specifically designed to support.

---

## 📌 Core Concept

Instead of focusing on just numbers, this app will eventually allow golfers to rate how they felt about each hole using friendly visual cues:

😢 — Sad (tough hole)  
😐 — Neutral (average)  
😊 — Happy (great hole)

These will be represented with **colors and icons**, and your overall score will be an average of these visual ratings. This makes performance tracking more expressive and approachable — especially for new players who may not yet be comfortable with traditional golf scorecards.

---

## 🚀 Current Features (Implemented)

✅ User Authentication  
- Login with email and password  
- Logout  
- Protected routes for authenticated access  

These foundational features ensure users can securely access their personal score data.

---

## 🚧 Work In Progress

Here’s what is being actively developed:

🔹 Main score tracking interface for recording hole performance  
🔹 Visual mood/emoji based feedback for each hole  
🔹 Color-coded performance overview  
🔹 Persistent user data storage (e.g., Firestore)  
🔹 Clean and responsive UI/UX design

> **Note:** Current design is functional — not final. UI aesthetics are a future milestone. Focus is on building solid functionality first.

---

## 📁 Project Structure
src/
├─ components/ # Reusable UI components
│ ├─ ProtectedRoute.jsx
│ ├─ LogoutButton.jsx
│ └─ ...
├─ context/ # Auth context for global user state
├─ pages/
│ ├─ LoginPage/
│ └─ Dashboard/
├─ firebase/ # Firebase configuration
├─ App.jsx
├─ main.jsx
└─ README.md

---


---

## 🛠 Tech Stack

| Category | Technology |
|----------|-------------|
| Frontend | React |
| Routing  | React Router |
| Styling  | TailwindCSS |
| Backend/Auth | Firebase Authentication |
| Deployment | Firebase Hosting |

---

## 🧠 Why This Matters

Golf is evolving — it’s becoming more diverse, more inclusive, and more social. This app is inspired by that evolution and designed to:

- Reduce intimidation for new and casual golfers  
- Offer a friendly way to engage with score performance visually  
- Empower a demographic that is currently under-represented in golf tech  

---

## 📅 Next Steps

1. Add hole performance scoring interface
2. Compute overall performance summary using emotive ratings
3. Store and retrieve user score data
4. Improve visual design and responsiveness
5. Add share/export options for score summaries

---

## 💡 Get Involved

This is an open project: feedback, contributions, and ideas are welcome!  
Feel free to open issues or submit pull requests.

---

## 📌 References / Stats

[^1]: Kate Hardcastle, *"Tee for Two: As Women Drive 46% of Golf’s Growth"*, Forbes, 2026.  
https://www.forbes.com/sites/katehardcastle/2026/02/11/tee-for-two-as-women-drive-46-percent-of-golfs-growth/

---

❤️ Built with passion — by a developer dedicated to making golf more welcoming for everyone.
