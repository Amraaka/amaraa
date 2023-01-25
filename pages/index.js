import Banner from "../components/banner";
import Quote from "../components/Quote";
import Projects from "../components/Projects";
import Card from "../components/Card";
import Skills from "../components/Skills";
import About from "../components/AboutMe";

function Home(){
  const cards = [
    {
      src: "/img/hhah.png",
    title: "HTML SCSS Python Flask",
    title1: "ChertNodes",
    title2: "Minecraft servers hosting ",
    title3: "Live <~>",
    title4: "Cached >"
    },
    {
      src: "/img/hhah1.png",
    title: "React Express Discord.js Node.js ",
    title1: "ProtectX",
    title2: "Discord anti-crash bot servers hosting ",
    title3: "Live <~>",

    },
    {
      src: "/img/hhah2.png",
    title: "CSS Express Node.js",
    title1: "Kahoot Answers Viewer",
    title2: "Minecraft Get answers to your kahoot quiz hosting ",
    title3: "Live <~>",

    },

  ]
  return(
   <section>
    <Banner />
    <Quote />
    <Projects />
    <section className="Card">
      {cards.map(card => <Card src={card.src} title={card.title} title1={card.title1} title2={card.title2} title3={card.title3} title4={card.title4} />)}
    </section>
    <Skills />
    <About />
   </section>
  )
}

export default Home;