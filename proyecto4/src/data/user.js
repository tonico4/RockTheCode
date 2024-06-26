const data = {
  name: "John Doe",
  address: "123 Main Street, New York, NY",
  email: "john.doe@email.com",
  job: "Web Developer Student",
  avatar:
    "https://i.pinimg.com/736x/8f/c2/ad/8fc2adfb17b261162bbd9a4af5239c64.jpg",
  aboutMe:
    "I'm a web developer student at ThePowerMBA Bootcamp. My passion is videogames and programming my own apps. Football is my other love.",
  education: {
    degree: "DAW high degree",
    university: "Salamanca, Spain",
    graduationYear: 2015,
    courses: [
      "UI/UX Design",
      "Web Design",
      "Programming",
      "Javascript",
      "Java",
      "React JS",
      "Backend",
      "MongoDB",
    ],
  },
  workExperience: [
    {
      position: "Web Developer",
      company: "Tech Solutions Inc.",
      startDate: "2013",
      endDate: "Present",
      description:
        "As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance.",
    },
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      startDate: "2012",
      endDate: "2013",
      description:
        "During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals.",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful API",
    "Git",
    "Frontend",
    "Backend"
  ],
  projects: [
    {
      title: "E-commerce Website",
      description:
        "Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.",
      link: "http://github.com/#",
      preview:
        "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&w=500",
    },
    {
      title: "Blog Platform",
      description:
        "Created a customizable blog platform with dynamic content creation, user authentication, comment functionality, and social media integration, leading to a 50% growth in user engagement.",
      link: "http://github.com/#",
      preview:
        "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
    },
    {
      title: "Portfolio Website",
      description:
        "Built a professional portfolio website to showcase my web development skills and projects. The site features a clean, responsive design and highlights my work as a developer.",
      link: "https://github.com/#",
      preview:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071",
    },
  ],
  socialmedia: [
    {
      web: "Facebook",
      srcIcon:
        "https://p7.hiclipart.com/preview/1012/613/260/computer-icons-facebook-clip-art-facebook.jpg",
      url: "https://facebook.com/#",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
  </svg>`,
    },
    {
      web: "Github",
      srcIcon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgmSmKO6ULwmVEqb6e4N4MgkleWMwPleREA&s",
      url: "https://github.com/#",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
  </svg>`,
    },
    {
      web: "LinkedIn",
      srcIcon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY5Kcim9uxG2pNOtr6N8mTXI6-CEqsResnA&s",
      url: "https://linkedin.com/#",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
  </svg>`,
    },
  ],
};

export default data;
