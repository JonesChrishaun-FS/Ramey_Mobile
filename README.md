![Degree Program](https://img.shields.io/badge/degree-web%20development-blue.svg)

<br>

# Ramsey's Mobile

Small-owned mobile company that repairs cars and wants to reach out to more customers within the surrounding areas they can travel to. Sell affordable parts online. Allow potential clients to inform the company of what repair they require. Inform users of the promotions that the company provides seasonally.

<br>

# ⚙️ Tech Stack

| Layer            | Technology |
| ---------------- | :--------: |
| Backend          |  Node.js   |
| Frontend         |   Vue.js   |
| Database         |  MongoDB   |
| Environment Vars |  `dotenv`  |

<br>

# 🧠 Features

- ✅ Subscription & contact forms: Create for user to get updated information and company to receive data fast from potential clients.
- 🧾 Scalable Database: MongoDB-backed relational schema designed for performance.
- 🚀 REST API: Modular, testable endpoints for all CRUD operations.

<br>

# 🚧 Usage Overview

- View services provided, current or old projects, sell parts, and offer affordable discounts
- Can create new user subscribers
- Responsive UI for field and office staff

<br>

# 🛠️ Setup Instructions

### 1. Clone the repository

```

git clone https://github.com/JonesChrishaun-FS/Ramey_Mobile.git

```

### 2. Set up the server

```

cd server
npm install
npm run dev

```

### 3. Set up the frontend

```

cd client
npm install
npm run dev

```

## Environment Variables

In the .env file:

```


PORT= ENTER_YOUR_PORT_HERE
MONGODB_URI= YOUR_MONGO_URI_HERE

Email Configuration

EMAIL_SERVICE=gmail
COMPANY_EMAIL= COMPANY_EMAIL_HERE
EMAIL_USER= YOUR_EMAIL_HERE
EMAIL_PASSWORD= YOUR_EMAIL_PASSWORD_HERE
EMAIL_SECURE=false

```

To retrieve the EMAIL_PASSWORD, navigate to your Google account, then select your Gmail email address, and enter your app password. You will then create a name app, and it will generate a password that you can copy and paste into your EMAIL_PASSWORD variable. Be sure to install `nodemailer`.

<br>

## API Structure

Method Route

```
* Contact Form

POST /contact Create a new contact form
GET /recent-contacts Fetch recently submitted service orders

* Subscribe Button/Form

POST /subscribe Create new user subscription

```

<br>

# 📈 Future Improvements

- User authentication & roles (admin, users)

- Email alerts for services needed urgently

- Show recent services that were submitted

<br>

# 👨‍💼 Target Audience

- Client needing restoration or modification for a specific car
- 18+ | Male or Female | Low Income (Has a car and wanting affordable services)

🧑‍💻 Developed by Chrishaun Jones
