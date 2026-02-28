# Cryptocurrency Trading Frontend

## Project Description
This project is a cryptocurrency trading frontend application designed to provide users with a seamless experience in trading digital currencies. It includes real-time tracking of market prices, user authentication, and trade execution capabilities.

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Other Tools:** WebSockets for real-time data, Axios for API requests  
- **Deployment:** Docker, AWS  

## Features
- User authentication (sign up, log in, log out)  
- Real-time market price tracking  
- Trading capabilities (buy/sell orders)  
- User portfolio management  
- Responsive design for mobile and desktop views  

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Arbenz-007/Trading-Frontend.git
   cd Trading-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Environment Setup
You will need to set up the following environment variables in a `.env` file:
```plaintext
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_WS_URL=ws://localhost:5000/ws
```

## Folder Structure
```
Trading-Frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   ├── index.js
│   └── styles/
├── .gitignore
├── package.json
└── README.md
```

## Future Improvements
- Implementation of advanced trading features such as margin trading and options trading.
- Development of a mobile application to enhance user accessibility.
- Integration of machine learning algorithms for predictive analytics of market trends.