import React from "react";



const About = () => {
  return (
    <div className="min-h-screen bg-red-950 text-white p-10 flex flex-col bg-blend-lighten shadow-lg items-center justify-center gap-12 backdrop-blur-md shadow-red-500/30 mt-20">
       {/* About Me - Center */}
        <div className="flex-1 flex justify-center">
          <div className="max-w-full text-center space-y-6 bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur-md">
            <h1 className="text-2xl font-bold underline decoration-red-500 underline-offset-4">About Me</h1>
            <p className="text-md text-gray-300 leading-relaxed">
              I am a passionate, self-learnt front-end developer with a keen interest in creating beautiful and functional web applications.
            </p>
            <p className="text-md text-gray-300 leading-relaxed">
              I specialize in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my skills.
            </p>
            <p className="text-md text-gray-400 italic">
              When I'm not coding, you'll find me exploring tech blogs, working on side projects, or contributing to open source.
            </p>
          </div>
        </div>

      <div className="flex flex-col lg:flex-row justify-center w-full gap-12">
        {/* Education Timeline - Left */}
        <div className="flex-1 flex justify-end">
          <section className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-left">Education</h2>
            <div className="relative flex flex-col items-start pl-8 border-l-4 border-red-500 space-y-10">
              {[
                {
                  degree: "Self-Taught Web Development",
                  place: "Online / Projects",
                  date: "2024 – Present",
                  desc: "Built several web apps, learned modern front-end tech via documentation and real projects."
                },
                {
                  degree: "Master of Information Technology",
                  place: "Central Queensland University",
                  date: "2011 – 2013",
                  desc: " Developed a website using c# in ASP.net where HTML and CSS is used on the front-end and Acess database on the back-end. Learned advanced programming concepts and software development methodologies."
                },
                {
                  degree: "Bachelor of Civil Engineering",
                  place: "Osmania University, Hyderabad, India",
                  date: "2006 - 2010",
                  desc: "Gained a solid foundation in engineering principles, project management, and problem-solving skills."
                },
                
              ].map((item, idx) => (
                <div key={idx} className="relative group transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
                  <div className="absolute -left-4 top-1  bg-red-500 w-4 h-4 rounded-full border-2 border-white shadow-md "></div>
                  <h3 className="text-lg font-bold ml-2">{item.degree}</h3>
                  <p className="text-sm text-gray-400 ml-2">{item.place} | {item.date}</p>
                  <p className="text-sm mt-1 text-gray-300 ml-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

       
        {/* Work Experience - Right */}
        <div className="flex-1 flex justify-start">
          <section className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-left">Work Experience</h2>
            <div className="relative flex flex-col items-start pl-8 border-l-4 border-red-500 space-y-10 max-h-[400px] overflow-y-auto pr-2">
              {[
                {                 
                  title: "Customer Service Representative",
                  company: "EG Group",
                  date: "2024 – Present",
                  desc: "Provided exceptional customer service, handled transactions, and resolved customer inquiries efficiently."
                },
                {                  
                  title: "Self-employed ",
                  company: "SNS",
                  date: "2019-2023",
                  desc: "Managed a small business, overseeing operations, customer relations, and financial management. Developed strong problem-solving and organizational skills."
                },
                {                 
                  title: "customer service representative",
                  company: "coles",
                  date: "2018 – 2019",
                  desc: "Assisted customers with inquiries, processed transactions, and maintained a clean and organized store environment. Developed strong communication and teamwork skills."
                },
                {                 
                  title: "IT Support",
                  company: "Vensys",
                  date: "2014 – 2017",
                  desc: "Provided technical support for software and hardware issues, assisted with system installations, and trained users on new technologies. Developed strong troubleshooting and customer service skills."
                },
                {                 
                  title: "7-Eleven",
                  company: "Store Manager",
                  date: "2011 – 2014",
                  desc: "Managed daily operations of the store, supervised staff, handled inventory management, and ensured excellent customer service. Developed leadership and management skills.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
                  <div className="absolute -left-4 top-1 bg-red-500 w-4 h-4 rounded-full border-2 border-white shadow-md"></div>
                  <h3 className="text-lg font-bold ml-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 ml-3">{item.company} | {item.date}</p>
                  <p className="text-sm mt-1 text-gray-300 ml-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};




export default About;

