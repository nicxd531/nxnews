
# Project Title
Title: Nx news

Description:
Our news website is designed to provide users with an immersive and seamless news reading experience. With features similar to those found on standard news websites, our platform offers a range of functionalities for both creators and readers. Our goal is to make the news consumption process efficient and enjoyable for all users.

Features:

User-Friendly Interface: Our platform boasts a clean and intuitive interface, making it easy for users to navigate and find the news they're interested in.
Responsive Design: The website is optimized for all devices, ensuring a consistent experience across desktops, tablets, and mobile phones.

Comprehensive News Coverage: We provide a wide range of news categories, including politics, business, sports, entertainment, and more, to cater to diverse interests.

Customizable News Feeds: Users can customize their news feeds based on their preferences, ensuring that they receive the most relevant news updates.

Advanced Search Functionality: Our platform offers a powerful search feature that allows users to quickly find news articles based on keywords, topics, or authors.

Interactive Features: Readers can engage with news articles through comments, likes, and shares, fostering a sense of community and interaction.

Multi-Media Support: We support a variety of media types, including images, videos, and audio, to provide users with a rich and engaging news experience.

Easy Content Creation: For creators, our platform offers a user-friendly content management system (CMS) that allows them to easily create, edit, and publish news articles.

Seamless Integration: Our platform integrates seamlessly with social media platforms, allowing users to share news articles with their friends and followers.

Real-Time Updates: Readers can stay updated with the latest news developments through our real-time news updates feature.

Usage:
Users can access our news website by visiting our platform's URL. Once on the website, they can browse through the various news categories, customize their news feeds, and engage with news articles through comments and shares. Creators can use the CMS to create and publish news articles, while readers can enjoy a seamless news reading experience.

In conclusion, our news website offers a comprehensive and user-friendly platform for both creators and readers, providing a seamless news consumption experience.


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
run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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
jsconfig.json        # js configuration file
package-lock.json     # manifest for Node.js projects
package.json          # lock file that keeps track of the exact versions of dependencies that were installed 
next.config.mjs        # next.js configuration file
tailwind.config.js       # tailwind configuration file

### Features
List key features of the application.

Our news platform offers a user-friendly interface that allows easy navigation and access to news content. The website is responsive, ensuring a consistent experience across different devices. We provide comprehensive news coverage across various categories to cater to diverse interests. Users can customize their news feeds and benefit from advanced search functionality to find articles quickly. Interactive features such as comments, likes, and shares promote community engagement. The platform supports multimedia content and offers an easy content creation process for creators. Seamless integration with social media platforms allows easy sharing of news articles. Real-time updates keep readers informed about the latest news developments.

# Deployment

To deploy a Next.js application to Vercel, start by ensuring your project is configured correctly and all dependencies are installed. Run the build command, typically npm run build, to generate the production-ready files. Next, install the Vercel CLI globally with npm install -g vercel if you haven't already. Then, navigate to your project directory and run vercel login to authenticate your account.

After logging in, run vercel --prod to deploy your application to Vercel's production environment. Vercel will provide you with a unique URL for your deployed application. You can also set up custom domains and environment variables in the Vercel dashboard for further configuration.

Ensure that your Next.js application is configured correctly for production settings, such as setting the NODE_ENV environment variable to production. Test your application thoroughly in the production environment to ensure it functions correctly before making it publicly accessible. Vercel will handle the deployment process and provide you with insights and logs to monitor the deployment progress.


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
