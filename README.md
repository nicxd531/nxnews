
# Project Title
Title: Nx news

Description:
a news website with features just like a standard regulart news website site with amazing functionalties and features to help both  creators and readers seemless use the features without hassels 

Details:
Ola Olasunkanmi's web portfolio is a meticulously curated platform aimed at providing an in-depth insight into his professional capabilities and achievements. Through carefully selected content and design elements, the portfolio offers a comprehensive overview of Ola's skills, experience, and accomplishments.

Usage:
This web portfolio serves as a powerful tool for job applications and career advancement. Potential employers, recruiters, and industry professionals can explore Ola's profile to assess his suitability for roles and opportunities. Job seekers can leverage the portfolio to showcase their capabilities, expertise, and unique value proposition, thereby enhancing their prospects in the competitive job market.

Conclusion:
Ola Olasunkanmi's professional web portfolio stands as a testament to his dedication, expertise, and commitment to excellence. Designed with precision and clarity, the portfolio encapsulates Ola's professional journey, making it an invaluable resource for career growth and advancement. Whether seeking employment opportunities or seeking collaboration, Ola's web portfolio serves as a compelling platform to showcase his talents and connect with the professional community.


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Deployment](#deployment)
- [Developed Using](#Developed-Using)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started
Within this section, you will find guidelines detailing the steps to utilize and acquire the application for personal use.


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Prerequisites
List any software or tools that need to be installed before running the project.

LIST
Node.js (v14 or later)
npm (v6 or later)
"@emotion/cache": "^11.11.0",
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"@fontsource/roboto": "^5.0.8",
"@mui/icons-material": "^5.15.10",
"@mui/lab": "^5.0.0-alpha.165",
"@mui/material": "^5.15.10",
"@mui/material-nextjs": "^5.15.11",
"@reduxjs/toolkit": "^2.2.1",
"@uploadthing/react": "^6.3.4",
"aos": "^2.3.4",
"axios": "^1.6.7",
"bcryptjs": "^2.4.3",
"bootstrap": "^5.3.3",
"framer-motion": "^11.0.17",
"mongoose": "^8.2.0",
"multer": "^1.4.5-lts.1",
"next": "14.1.0",
"next-auth": "^4.24.6",
"next-connect": "^1.0.0-next.4",
"react": "^18",
"react-bootstrap": "^2.10.1",
"react-dom": "^18",
"react-redux": "^9.1.0",
"slugify": "^1.6.6",
"swiper": "^11.0.7",
"uploadthing": "^6.5.2"


### Installation

Step-by-step guide on how to install project dependencies and run the project locally.

# Clone the repository
git clone https://github.com/nicxd531/main-portfolio.git

# Change directory
cd nxnews (change directory in to the location of the folder in your pc )

# Install dependencies
npm install (installs all dependencies used in the project)

# Usage
the project and application is mainly for job application purpose and also an oppurtunity to showcase my skills as a software developer.

# Folder Structure
this contains an explainantion of the main folder structure in the project
.next/               # Public assets
client/               # client side component folder
|-- context/           # use context folder
data/               # json data folder
lib/               # libries folder
models/               # mongoose models folder
node modules/               # node modules folder
public/               # Public assets
|-- image/           # image folder
src/                  # Source code
|-- app/           # main app folder
|--- (auth)/            # auth route folder
|---- login/            # login folder
|---- register/            # register folder
|--- api/            # api route root folder
|---- auth/            # auth api folder
|----- [...nextauth]/            # next auth api folder
|---- post/            # post api folder
|----- create/            # create api folder
|----- like/            # like api folder
|----- search/            # search api folder
|----- singlepost/            # singlepost api folder
|----- user/            # user api folder
|---- signup/            # signup api folder
|---- uploadthing/            # uploadthing api folder
|---- user/            # user api folder
|----- follow/            # follow api folder
|--- business/            # business page route folder
|--- entertainment/            # entertainment page route folder
|--- finance/            # finance page route folder
|--- health/            # health page route folder
|--- life/            # life page route folder
|--- political/            # political page route folder
|--- post/            # post page route folder
|---- [id]/            # id route folder
|---- [slug]/            # slug route folder
|--- profile/            # profile page route folder
|---- createNews/            # createNews page route folder
|---- EditProfile/            # EditProfile page route folder
|--- redux/            # redux folder
|--- sport/            # sport page route folder
|--- subscribe/            # sport page route folder
|-- components/       #  components folder
|--- app/       #  app components folder
|--- business/       #  business components folder
|--- entertainment/       #  entertainment components folder
|--- finance/       #  finance components folder
|--- health/       #  health components folder
|--- home/       #  home components folder
|--- Hooks/       #  Hooks components folder
|--- life/       #  life components folder
|--- political/       #  political components folder
|--- post/       #  post components folder
|--- profile/       #  profile components folder
|--- reuseable/       #  reuseable components folder
|--- skelentons/       #  skelentons components folder
|--- sports/       #  sports components folder
|--- subscribe/       #  subscribe components folder
|-- utils/       #  utils functions folder

App.jsx             # components for routing  
Index.css             # main css file 
main.jsx            # main component
index.html            # main index file
package-lock.json     # manifest for Node.js projects
package.json          # lock file that keeps track of the exact versions of dependencies that were installed 
next.config.mjs        # Vite configuration file
tailwind.config.js       # Vite configuration file

### Features
List key features of the application.

Skill Showcase: The portfolio highlights Ola's diverse skill set, ranging from technical proficiencies to soft skills and industry knowledge.
Experience Overview: Ola's professional journey is meticulously detailed, showcasing his roles, responsibilities, and notable achievements in various projects and positions.
Complete Profile: The portfolio provides a complete profile of Ola, including his educational background, certifications, and professional affiliations.
Contact Information: Ola's contact details are readily accessible, facilitating seamless communication for potential job opportunities, collaboration, or inquiries.

# Deployment
To deploy a React application built in an npm environment, begin by ensuring that your project is properly configured and dependencies are installed. Run the necessary build command, typically 'npm run build', to generate the production-ready files. Once the build is successful, you can use a hosting service like Netlify, Vercel, or deploy it manually to a server. Ensure that the server is set up to serve the static files generated in the 'build' folder. Update any necessary environment variables for production settings, and your React application should be ready for deployment. Don't forget to test thoroughly in the production environment to ensure a smooth and error-free deployment.


# Contributing
unfortunately contributing is currently unavailable

# License
This project is licensed under the OLA OLASUNKANMI - see the LICENSE.md file for details(if the file exist 😅).

# Acknowledgments
i just want to say a big thank you to myself finishing this project was a bit hectic due to how complicated it is ,i also wnt to say a big thank you to the react ,vite teams for making this framework possibele and also everyone that created the libraries that was used in this project God bless you all.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
