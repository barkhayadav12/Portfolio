import React from "react";
import chat from "../photos/chat.jpeg";
import codeHelp from "../photos/codeHelp.png";
import crypto from "../photos/crypto.jpeg";
import furrymate from "../photos/furrymate.jpg";
import jobtrace from "../photos/jobtrace.jpg";
import joke from "../photos/joke.jpeg";
import plannar from "../photos/plannar.jpeg";
import soloWhisper from "../photos/soloWhisper.png";
const Project = () => {
  return (
    <div className="projects_p">
      <div className="p_content">
        <div class="projectContainer ">
          <h1 style={{ textAlign: "center", color: "white" }}>
            My Recent <span style={{ color: "violet" }}>Works</span>
          </h1>
          <p style={{ textAlign: "center", color: "white" }}>
            Here are few projects I've worked on recently.
          </p>
          <div className="majorProjects">
            <div className="projects">
              <div className="imgProjects">
                <img src={codeHelp} />
              </div>
              <h3>CodeHelp</h3>
              <p>
                Developed an application where the users can write, read
                articles on programming and ask their doubts when they run into
                an error.
              </p>
              <div className="techStack">
                <button>Ejs</button>
                <button>Node.js</button>
                <button>Express.js</button>
                <button>MongoDB</button>
                <button>Bootstrap</button>
              </div>
              <div className="btnProjects">
                <button className="btnP">
                  <a href="https://github.com/barkhayadav12/CodeHelp">
                    <i class="bi bi-github"></i> GitHub
                  </a>
                </button>
              </div>
            </div>
            <div className="projects">
              <div className="imgProjects">
                <img src={furrymate} />
              </div>
              <h3>FurryMate</h3>
              <p>
                "Developed an app where the users can adopt a pet or donate a
                pet.
              </p>
              <div className="techStack">
                <button>React.js</button>
                <button>Node.js</button>
                <button>Express.js</button>
                <button>MongoDB</button>
                <button>Bootstrap</button>
              </div>
              <div className="btnProjects">
                <button className="btnP">
                  <a href="https://github.com/barkhayadav12/FurryMate">
                    <i class="bi bi-github"></i> GitHub
                  </a>
                </button>
              </div>
            </div>
            <div className="projects">
              <div className="imgProjects">
                <img src={jobtrace} />
              </div>
              <h3>JobTrace</h3>
              <p>
                JobTrace is a platform designed to help job seekers efficiently
                manage their job applications.
              </p>
              <div className="techStack">
                <button>Nextjs</button>
                <button>MongoDB</button>
                <button>TailwindCss</button>
              </div>
              <div className="btnProjects">
                <button className="btnP">
                  <a href="https://github.com/barkhayadav12/JobTrace">
                    <i class="bi bi-github"></i> GitHub
                  </a>
                </button>
              </div>
            </div>
          <div className="projects">
            <div className="imgProjects">
              <img src={chat} />
            </div>
            <h3>Chat-Room</h3>
            <p>Developed a realtime chatting application.</p>
            <div className="techStack">
              <button>React.js</button>
              <button>Node.js</button>
              <button>Bootstrap</button>
            </div>
            <div className="btnProjects">
              <button className="btnP">
                <a href="https://github.com/barkhayadav12/ChatRoom">
                  <i class="bi bi-github"></i> GitHub
                </a>
              </button>
            </div>
          </div>
          </div>
          <div>
            <h1
              style={{ padding: "10px", marginLeft: "12px" }}
              className="mini"
            >
              <span>Mini Projects</span>
            </h1>
            <div className="majorProjects">
              <div className="projects">
                <div className="imgProjects">
                  <img src={soloWhisper} />
                </div>
                <h3>SoloWhisper</h3>
                <p>
                  Developed an application where the users can write about their
                  adventures and post their daily happenings.
                </p>
                <div className="techStack">
                  <button>React.js</button>
                  <button>Node.js</button>
                  <button>Express.js</button>
                  <button>MongoDB</button>
                  <button>Bootstrap</button>
                </div>
                <div className="btnProjects">
                  <button className="btnP">
                    <a href='https://github.com/barkhayadav12/SoloWhisper'>
                      <i class="bi bi-github"></i> GitHub
                    </a>
                  </button>
                </div>
              </div>
              <div className="projects">
                <div className="imgProjects">
                  <img src={plannar} />
                </div>
                <h3>StudyPlannar</h3>
                <p>
                  The users can plan their study timeTable and can also make
                  notes.
                </p>
                <div className="techStack">
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>JavaScript</button>
                </div>
                <div className="btnProjects">
                  <button className="btnP">
                    <a href="https://github.com/barkhayadav12/StudyPlannar">
                      <i class="bi bi-github"></i> GitHub
                    </a>
                  </button>
                </div>
              </div>
              <div className="projects">
                <div className="imgProjects">
                  <img src={crypto} />
                </div>
                <h3>CryptoTracker</h3>
                <p>Developed an app that tracks cryptos.</p>
                <div className="techStack">
                  <button>React.js</button>
                  <button>Bootstrap</button>
                </div>
                <div className="btnProjects">
                  <button className="btnP">
                    <a href="https://github.com/barkhayadav12/CryptoTracker">
                      <i class="bi bi-github"></i> GitHub
                    </a>
                  </button>
                </div>
              </div>
              <div className="projects">
                <div className="imgProjects">
                  <img src={joke} />
                </div>
                <h3>Random Jokes</h3>
                <p>Shows random jokes.</p>
                <div className="techStack">
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>JavaScript</button>
                </div>
                <div className="btnProjects">
                  <button className="btnP">
                    <a href="https://github.com/barkhayadav12/RandomJokes">
                      <i class="bi bi-github"></i> GitHub
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
