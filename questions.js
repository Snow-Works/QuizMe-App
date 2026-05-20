// questions.js
const expertBank = [

    // --- WEALTH & ENTREPRENEURSHIP BATCH ---
    {
        category: "Entrepreneurship",
        question: "What is a 'Minimum Viable Product' (MVP)?",
        answers: [
            {text: "The cheapest version of a product possible.", correct: false},
            {text: "A version with just enough features to usable by early customers who can then provide feedback.", correct: true},
            {text: "A product that has failed the testing phase.", correct: false},
            {text: "The final version of a product before it goes public.", correct: false}
        ],
        explanation: "An MVP helps entrepreneurs start the learning process as quickly as possible. It’s not about building a 'bad' product; it's about building the simplest version that solves the core problem."
    },
    {
        category: "Wealth",
        question: "What is the 'Rule of 72' used for?",
        answers: [
            {text: "Calculating how much tax you owe.", correct: false},
            {text: "Estimating how many years it will take to double your money at a fixed interest rate.", correct: true},
            {text: "Determining the age you should retire.", correct: false},
            {text: "Measuring the inflation rate of a country.", correct: false}
        ],
        explanation: "Divide 72 by your annual interest rate to find the doubling time. For example, at a 10% return, your money doubles every 7.2 years."
    },
    {
        category: "Entrepreneurship",
        question: "What does it mean to 'Pivot' in business?",
        answers: [
            {text: "Closing the company down.", correct: false},
            {text: "Changing a fundamental part of the business model after receiving market feedback.", correct: true},
            {text: "Hiring a new CEO.", correct: false},
            {text: "Increasing the price of all products.", correct: false}
        ],
        explanation: "A pivot is a structured course correction designed to test a new hypothesis about the product, strategy, and engine of growth."
    },
    {
        category: "Wealth",
        question: "What is the difference between an Asset and a Liability (per Robert Kiyosaki)?",
        answers: [
            {text: "Assets are expensive; Liabilities are cheap.", correct: false},
            {text: "Assets put money IN your pocket; Liabilities take money OUT of your pocket.", correct: true},
            {text: "Assets are for the rich; Liabilities are for the poor.", correct: false},
            {text: "There is no difference in modern accounting.", correct: false}
        ],
        explanation: "Even a house can be a liability if it costs you money every month in mortgage and maintenance without generating income. A rental property that generates cash is an asset."
    },
    {
        category: "Entrepreneurship",
        question: "What is 'Scalability'?",
        answers: [
            {text: "The ability to increase revenue without a proportional increase in costs.", correct: true},
            {text: "Buying a larger office space.", correct: false},
            {text: "Increasing the number of employees you have.", correct: false},
            {text: "The weight of the product being sold.", correct: false}
        ],
        explanation: "Software is highly scalable because you write it once and can sell it to 1 million people. Consulting is less scalable because you trade hours for dollars."
    },






     // --- WEALTH & FINANCE ---
    {
        category: "Wealth & Finance",
        question: "Why is 'Liquidity' often a double-edged sword for a building investor?",
        answers: [
            {text: "It guarantees higher returns on long-term assets.", correct: false},
            {text: "It provides safety but often yields lower returns due to the 'Liquidity Premium'.", correct: true},
            {text: "It prevents the effects of inflation on cash.", correct: false},
            {text: "It is only relevant for large-scale corporations.", correct: false},
        ],
        explanation: "Liquidity allows you to access cash fast, but the market usually pays you a 'premium' (more money) for locking your money away in illiquid assets like Real Estate or Private Equity."
    },
    {
        category: "Wealth & Finance",
        question: "Which financial metric is most critical for a company's 'Solvency' during a recession?",
        answers: [
            {text: "Gross Profit Margin", correct: false},
            {text: "Total Revenue Growth", correct: false},
            {text: "Operating Cash Flow vs. Debt Obligations", correct: true},
            {text: "The number of employees on staff.", correct: false},
        ],
        explanation: "Revenue is vanity; Cash Flow is sanity. A company can be profitable on paper but still go bankrupt if it cannot generate enough cash to pay its immediate debts."
    },
    {
        category: "Wealth & Finance",
        question: "In wealth mindset, 'Lifestyle Creep' is dangerous because:",
        answers: [
            {text: "It increases your credit score too quickly.", correct: false},
            {text: "It causes your expenses to rise at the same rate as your income.", correct: true},
            {text: "It forces you to invest in high-risk stocks.", correct: false},
            {text: "It only affects people with low-income jobs.", correct: false},
        ],
        explanation: "If you earn $10k more but spend $10k more on a better car/house, your 'Net Worth' stays at zero. Wealth is built in the gap between what you earn and what you spend."
    },



    // --- PROGRAMMING BATCH ---
{
    category: "Programming",
    question: "In JavaScript, what is the 'Temporal Dead Zone'?",
    answers: [
        {text: "The time it takes for a script to crash.", correct: false},
        {text: "The period between a variable's declaration and its initialization using let or const.", correct: true},
        {text: "A loop that never ends.", correct: false},
        {text: "When a function is called but not defined.", correct: false}
    ],
    explanation: "Unlike 'var', variables declared with let and const are not accessible before their line of declaration, throwing a ReferenceError if you try to use them."
},
{
    category: "Programming",
    question: "What is the primary benefit of 'Asynchronous' programming?",
    answers: [
        {text: "It makes the code run faster on the CPU.", correct: false},
        {text: "It allows the program to handle other tasks while waiting for a long operation (like an API call) to finish.", correct: true},
        {text: "It prevents all bugs in the code.", correct: false},
        {text: "It turns JavaScript into a multi-threaded language.", correct: false}
    ],
    explanation: "Async programming prevents the UI from 'freezing' while the computer waits for data from a server."
},



    // --- ENTREPRENEURSHIP & BUSINESS ---
    {
        category: "Entrepreneurship",
        question: "What is the 'Moat' in a business strategy context?",
        answers: [
            {text: "The physical security around a corporate office.", correct: false},
            {text: "A unique competitive advantage that protects profits from competitors.", correct: true},
            {text: "The total amount of funding a startup has raised.", correct: false},
            {text: "The marketing budget for the first fiscal year.", correct: false},
        ],
        explanation: "A 'Moat' (like Brand, Network Effects, or Proprietary Tech) makes it hard for competitors to steal your customers, ensuring long-term business survival."
    },
    {
        category: "Entrepreneurship",
        question: "Why is 'Churn Rate' the most silent killer of SaaS (Software as a Service) businesses?",
        answers: [
            {text: "It measures how fast employees leave the company.", correct: false},
            {text: "It measures the rate at which customers cancel their subscriptions.", correct: true},
            {text: "It refers to the speed of the software's servers.", correct: false},
            {text: "It tracks how many features are added per month.", correct: false},
        ],
        explanation: "If you gain 100 customers but lose 100 customers (Churn), your growth is zero. High churn means you are spending money to acquire people who don't find enough value to stay."
    },


    // --- FINANCE BATCH ---
{
    category: "Finance",
    question: "What is the 'Lindy Effect' in relation to assets?",
    answers: [
        {text: "The idea that new assets are always better.", correct: false},
        {text: "The theory that the future life expectancy of a non-perishable thing is proportional to its current age.", correct: true},
        {text: "A method for calculating stock dividends.", correct: false},
        {text: "A type of insurance for high-net-worth individuals.", correct: false}
    ],
    explanation: "If a book or an asset (like Gold or Bitcoin) has survived for 10 years, it is likely to survive for another 10. If it survived 100, it likely has another 100."
},
{
    category: "Finance",
    question: "What is 'Capitulation' in a market cycle?",
    answers: [
        {text: "When everyone is buying greedily.", correct: false},
        {text: "When investors give up their gains and sell in a panic, often marking the market bottom.", correct: true},
        {text: "When a company goes public on the stock exchange.", correct: false},
        {text: "A government-imposed limit on trading.", correct: false}
    ],
    explanation: "Capitulation happens when the 'last bull' sells. It usually results in a sharp price drop followed by a long-term recovery."
},


    // --- LOGIC & CRITICAL THINKING ---
    {
        category: "Critical Thinking",
        question: "The 'Red Herring' fallacy is used in a debate to:",
        answers: [
            {text: "Prove a point using scientific data.", correct: false},
            {text: "Divert attention from the real issue by focusing on an irrelevant topic.", correct: true},
            {text: "Attack the character of the opponent personally.", correct: false},
            {text: "Simplify a complex argument for the audience.", correct: false},
        ],
        explanation: "A Red Herring is a distraction. Critical thinkers stay focused on the core logic and refuse to be lead down irrelevant side-paths during a negotiation or argument."
    },
    {
        category: "Logic",
        question: "In the 'Prisoner's Dilemma' of Game Theory, why do two rational individuals often not cooperate?",
        answers: [
            {text: "Because they lack the intelligence to see the benefit.", correct: false},
            {text: "Because acting in one's own self-interest leads to a worse outcome for both.", correct: true},
            {text: "Because cooperation is illegal in most business sectors.", correct: false},
            {text: "Because the cost of cooperation is always higher than the reward.", correct: false},
        ],
        explanation: "This illustrates why 'Trust' is a massive economic multiplier. Without trust, parties choose a 'safe' selfish option that leaves everyone poorer than if they had worked together."
    },

    // --- TECHNOLOGY & PROGRAMMING ---
    {
        category: "Technology",
        question: "What is 'Artificial General Intelligence' (AGI) compared to current AI?",
        answers: [
            {text: "AI that can generate images very quickly.", correct: false},
            {text: "AI that can perform any intellectual task a human can do.", correct: true},
            {text: "AI that is used only for self-driving cars.", correct: false},
            {text: "A faster version of a search engine.", correct: false},
        ],
        explanation: "Current AI is 'Narrow' (good at one thing). AGI would be able to learn, reason, and apply logic across any domain, representing a massive shift in human civilization."
    },
    {
        category: "Programming Logic",
        question: "In large systems, why is 'Asynchronous' processing preferred over 'Synchronous'?",
        answers: [
            {text: "It uses more electricity but is faster.", correct: false},
            {text: "It allows the system to continue working on other tasks while waiting for a response.", correct: true},
            {text: "It makes the code easier for humans to read.", correct: false},
            {text: "It prevents hackers from accessing the database.", correct: false},
        ],
        explanation: "If a system is 'Synchronous,' everything stops while waiting for a file to download. 'Asynchronous' design allows for high-performance, 'snappy' applications that don't freeze."
    },

    // --- SCIENCE & INNOVATION ---
    {
        category: "Science & Innovation",
        question: "Entropy, the Second Law of Thermodynamics, suggests that in a closed system:",
        answers: [
            {text: "Energy always increases over time.", correct: false},
            {text: "Disorder (randomness) always increases over time.", correct: true},
            {text: "Gravity will eventually stop working.", correct: false},
            {text: "Information can never be lost.", correct: false},
        ],
        explanation: "In business and life, if you don't put 'energy' (work/management) into a system, it will naturally fall into chaos. This is why constant innovation is required just to stay stable."
    },

    // --- TECH & FUTURE ---
    {
        category: "Technology",
        question: "What is the primary difference between 'Web2' and 'Web3'?",
        answers: [
            {text: "Web3 is just faster internet.", correct: false},
            {text: "Web2 is read-write; Web3 is read-write-own via decentralization.", correct: true},
            {text: "Web3 only works on mobile phones.", correct: false},
            {text: "There is no actual difference; it is a marketing term.", correct: false}
        ],
        explanation: "In Web2, companies like Google/Facebook own your data. In Web3, users own their data and digital assets using blockchain technology."
    },
    {
        category: "Technology",
        question: "In Cybersecurity, what is a 'Zero-Day Vulnerability'?",
        answers: [
            {text: "A bug that has existed for zero days.", correct: false},
            {text: "A security flaw unknown to the software creator that is exploited by hackers.", correct: true},
            {text: "A virus that deletes itself after 24 hours.", correct: false},
            {text: "A password that has expired.", correct: false}
        ],
        explanation: "It's called 'Zero-Day' because the developer has had 'zero days' to fix the problem before it was discovered or used by an attacker."
    },
    // --- WEALTH & FINANCE ---
    {
        category: "Wealth",
        question: "What does 'Dollar Cost Averaging' (DCA) protect an investor from?",
        answers: [
            {text: "Protecting against all capital loss.", correct: false},
            {text: "The risk of investing a large amount at the 'wrong' time (market peaks).", correct: true},
            {text: "Paying taxes on investment gains.", correct: false},
            {text: "Inflation eroding the value of the dollar.", correct: false}
        ],
        explanation: "DCA involves investing a fixed amount regularly. This means you buy more when prices are low and less when prices are high, smoothing out market volatility."
    },
    {
        category: "Wealth",
        question: "What is an 'Arbitrage' opportunity?",
        answers: [
            {text: "Buying a stock and holding it for 10 years.", correct: false},
            {text: "Simultaneously buying and selling an asset in different markets to profit from price differences.", correct: true},
            {text: "Borrowing money at a low interest rate.", correct: false},
            {text: "A government-mandated price cap.", correct: false}
        ],
        explanation: "Arbitrageurs find price gaps (e.g., Bitcoin is $50k on Exchange A but $50.1k on Exchange B) and profit from the inefficiency."
    },


    // --- FINANCE BATCH ---
{
    category: "Finance",
    question: "What is the 'Lindy Effect' in relation to assets?",
    answers: [
        {text: "The idea that new assets are always better.", correct: false},
        {text: "The theory that the future life expectancy of a non-perishable thing is proportional to its current age.", correct: true},
        {text: "A method for calculating stock dividends.", correct: false},
        {text: "A type of insurance for high-net-worth individuals.", correct: false}
    ],
    explanation: "If a book or an asset (like Gold or Bitcoin) has survived for 10 years, it is likely to survive for another 10. If it survived 100, it likely has another 100."
},
{
    category: "Finance",
    question: "What is 'Capitulation' in a market cycle?",
    answers: [
        {text: "When everyone is buying greedily.", correct: false},
        {text: "When investors give up their gains and sell in a panic, often marking the market bottom.", correct: true},
        {text: "When a company goes public on the stock exchange.", correct: false},
        {text: "A government-imposed limit on trading.", correct: false}
    ],
    explanation: "Capitulation happens when the 'last bull' sells. It usually results in a sharp price drop followed by a long-term recovery."
},


// --- FINANCE BATCH ---
{
    category: "Finance",
    question: "What is 'Asset Allocation'?",
    answers: [
        {text: "Selling all your stocks at once.", correct: false},
        {text: "Dividing an investment portfolio among different asset categories, such as stocks, bonds, and cash.", correct: true},
        {text: "Opening multiple bank accounts.", correct: false},
        {text: "Buying only one type of cryptocurrency.", correct: false}
    ],
    explanation: "Allocation is the primary factor in determining your risk level and long-term returns."
},
{
    category: "Finance",
    question: "What does 'Inflation' do to your purchasing power?",
    answers: [
        {text: "Increases it.", correct: false},
        {text: "Decreases it, meaning your money buys less over time.", correct: true},
        {text: "It has no effect on purchasing power.", correct: false},
        {text: "It only affects the wealthy.", correct: false}
    ],
    explanation: "If inflation is 3% and your bank interest is 1%, you are technically losing 2% of your wealth every year."
},
{
    category: "Finance",
    question: "What is an 'ETF'?",
    answers: [
        {text: "An Electronic Transfer of Funds.", correct: false},
        {text: "An Exchange-Traded Fund that tracks an index, sector, or commodity and can be traded like a stock.", correct: true},
        {text: "A type of high-interest savings account.", correct: false},
        {text: "A tax-free government bond.", correct: false}
    ],
    explanation: "ETFs allow you to buy hundreds of companies at once with a single share, providing instant diversification."
},


    // --- LOGIC & BIAS ---
    {
        category: "Logic",
        question: "What is the 'Sunk Cost Fallacy'?",
        answers: [
            {text: "The idea that you should always finish what you start.", correct: false},
            {text: "Continuing an endeavor because of previously invested resources, despite new evidence it will fail.", correct: true},
            {text: "A math error in accounting software.", correct: false},
            {text: "The cost of shipping goods across the ocean.", correct: false}
        ],
        explanation: "Rationality requires looking at future costs and benefits. Past costs (time/money already spent) cannot be recovered and should not influence current decisions."
    },
    // [ADD THE REMAINING 2,985 QUESTIONS HERE...]



    {
        category: "Wealth",
        question: "What is 'Compound Interest'?",
        answers: [
            {text: "Interest earned only on the initial principal.", correct: false},
            {text: "Interest earned on both the principal and the accumulated interest.", correct: true},
            {text: "A fee paid to the bank for holding money.", correct: false},
            {text: "Interest that never changes over time.", correct: false}
        ],
        explanation: "Einstein called it the eighth wonder of the world. It is the process where your interest earns interest, leading to exponential growth over time."
    }, 


    {
        category: "Logic",
        question: "What is an 'Ad Hominem' fallacy?",
        answers: [
            {text: "Attacking the argument's logic.", correct: false},
            {text: "Attacking the person making the argument instead of the argument itself.", correct: true},
            {text: "Using a celebrity to prove a point.", correct: false},
            {text: "Assuming something is true because it is popular.", correct: false}
        ],
        explanation: "This is a common logical error where one tries to discredit an idea by insulting the person who said it, rather than proving the idea wrong."
    }
    // KEEP ADDING MORE HERE...





    
];