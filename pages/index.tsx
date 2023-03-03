import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
    & img {
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      box-shadow: 0 -0.25rem 0.5rem rgba(var(--dark-color), 0.25);
      @media screen and (max-width: 40rem) {
        width: 100%;
        height: 100%;
      }
    }
    & h1 {
      color: rgb(var(--dark-color));
      text-shadow: 0 0.1rem 0.25rem rgba(var(--dark-color), 0.25);
      @media screen and (max-width: 40rem) {
        text-align: center;
      }
    }
    & h2 {
      color: rgb(var(--primary-color));
      font-weight: 600;
      font-size: 1.5rem;
      text-shadow: 0 0.1rem 0.25rem rgba(var(--primary-color), 0.25);
      @media screen and (max-width: 40rem) {
        text-align: center;
      }
    }
    & p {
      color: rgb(var(--dark-color), 0.75);
      @media screen and (max-width: 40rem) {
        text-align: justify;
      }
    }
  }
  & .body-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    @media screen and (max-width: 40rem) {
      flex-direction: column;
    }
    & aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20rem;
      gap: 0.5rem;
      @media screen and (max-width: 40rem) {
        flex-grow: 1;
        width: 100%;
        margin-inline: auto;
      }
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 0.25rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        & span {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -0.25rem;
            left: 0;
            width: 2rem;
            height: 0.25rem;
            background-color: rgb(var(--secondary-color));
            border-radius: 0.5rem;
          }
        }
      }
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease-in-out;
          &:hover {
            background-color: rgb(var(--primary-color), 0.1);
          }
          & a {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            & svg {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
    & > .others {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
      }
      & h2 {
        position: relative;
        color: rgb(var(--secondary-color));
        text-shadow: 0 0.1rem 0.25rem rgba(var(--secondary-color), 0.25);
        font-weight: 600;
        font-size: 1.25rem;
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.1);
        }
        @media screen and (max-width: 40rem) {
          margin-bottom: 0.25rem;
        }
        & span {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -0.25rem;
            left: 0;
            width: 2rem;
            height: 0.25rem;
            background-color: rgb(var(--secondary-color));
            border-radius: 0.5rem;
          }
        }
      }
      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        & li {
          list-style: none;
          cursor: pointer;
          font-weight: 500;
          color: rgb(var(--dark-color), 0.75);
          & a {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            @media screen and (max-width: 40rem) {
            }
            & h3 {
              padding: 0.5rem;
              border-radius: 0.5rem;
              transition: all 0.2s ease-in-out;
              &:hover {
                background-color: rgb(var(--primary-color), 0.1);
              }
            }
            & span {
              padding: 0.5rem;
              @media screen and (max-width: 40rem) {
              }
            }
          }
          & .description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem;
            cursor: auto;
            & p {
              @media screen and (max-width: 40rem) {
                text-align: justify;
              }
            }
            & .skills-used {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              @media screen and (max-width: 40rem) {
                justify-content: center;
                align-items: center;
              }
              & span {
                color: rgb(var(--dark-color), 0.75);
                font-size: 0.75rem;
                font-weight: bold;
                padding: 0.5rem 1rem;
                border: 1px solid rgb(var(--primary-color));
                border-radius: 2rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                &:hover {
                  background: rgb(var(--primary-color));
                }
              }
            }
          }
        }
      }
    }
  }
`;

const og = {
  title: "PAMPA DAS",
  describedTitle: "RESUME of PAMPA DAS",
  description:
    "Resume-2023 is a visually stunning resume website built using Next.js, TypeScript, and Styled-Components.",
  image: profile.src,
  url: "",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{og.title}</title>
        <meta
          name="google-site-verification"
          content="aUOx7BZBGMEAbtDsLf9bN1BvycMZwahF4zDqu0EtQCw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="description" content={og.description} />

        <link rel="canonical" href={og.url} />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Full-Stack Developer",
            "@id": ${og.url},
            "name": ${og.describedTitle},
            "url": ${og.url},
            "sameAs": [
              "https://www.instagram.com/itsme_PAMPA/",
              "https://twitter.com/ItsmePAMPA"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": ${og.url},
              "inLanguage": "en-US",
              "url": ${og.image},
              "contentUrl": ${og.image},
              "width": 1000,
              "height": 1000,
              "caption": "itsme-PAMPA"
            },
            "image": { "@id": ${og.url} }
          },
          {
            "@type": "WebPage",
            "@id": ${og.url},
            "url": ${og.url},
            "name": ${og.describedTitle},
            "isPartOf": {
              "@id": ${og.url}
            },
            "about": { "@id": ${og.url} },
            "description": ${og.description},
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <meta name="twitter:site" content="@itsme-PAMPA" />
        <meta name="twitter:creator" content="@itsme-PAMPA" />
        <meta name="theme-color" content="#fff" />
        <meta name="next-head-count" content="26" />
      </Head>
      <Main>
        <div className="top container">
          <Image
            src={profile}
            width={200}
            height={200}
            draggable="false"
            alt=""
          />
          <div className="dev">
            <h1>PAMPA DAS</h1>
            <h2>SANSKRIT TEACHER</h2>
            <p>
              Dedicated and passionate Sanskrit tutor with experience in
              teaching students of all levels. Known for making the subject
              matter accessible and engaging for students, with a focus on
              building their confidence and interest in Sanskrit. Skilled in
              creating lesson plans, implementing teaching strategies, and
              evaluating student progress. Committed to providing a positive and
              enriching learning experience for all students.
            </p>
          </div>
        </div>
        <div className="body-content container">
          <aside>
            <div className="contact">
              <h2>
                <span>Contact</span>
              </h2>
              <ul>
                <li>
                  <a
                    href="mailto:pampad525@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdMail />
                    <span>pampad525@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a href="tele:+97044341986" target="_blank" rel="noreferrer">
                    <BsFillPhoneFill />
                    <span>+91 7044341986</span>
                  </a>
                </li>

                <li>
                  <a>
                    <MdLocationOn />
                    <span>Kolkata, West Bengal, India</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pampadas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                    <span>linkedin.com/in/pampadas</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="skills">
              <h2>
                <span>Skills</span>
              </h2>
              <ul>
                <li>Strong proficiency in Sanskrit language and literature.</li>
                <li>
                  Effective communication skills in Bengali, Hindi, and English.
                </li>
                <li>
                  Ability to inspire and motivate students to learn and succeed.
                </li>
                <li>
                  Adaptable and flexible teaching style to cater to diverse
                  student needs.
                </li>
                <li>Strong organizational and planning skills.</li>
                <li>HTML</li>
                <li>Nationl JUDO player.</li>
              </ul>
            </div>
            <div className="languages">
              <h2>
                <span>Languages</span>
              </h2>
              <ul>
                <li>Sanskrit</li>
                <li>Bengali</li>
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>
          </aside>
          <div className="others">
            <div className="education">
              <h2>
                <span>Experience</span>
              </h2>
              <ul className="education-list">
                <li>
                  <a>
                    <h3>Private Tutor</h3> <span>Sanskrit</span>{" "}
                    <span>(2017 - Present)</span>
                  </a>
                  <div className="description">
                    <p>
                      Develop and implement customized lesson plans for students
                      of all levels.
                    </p>
                    <p>
                      Foster a positive and engaging learning environment. Track
                      and evaluate student progress.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="education">
              <h2>
                <span>Education</span>
              </h2>
              <ul className="education-list">
                <li>
                  <a>
                    <h3>The Sanskrit College and University, Kolkata</h3>{" "}
                    <span>Master of Arts in Sanskrit</span>{" "}
                    <span>2022 (Percentage: 80)</span>
                  </a>
                </li>

                <li>
                  <a>
                    <h3>University of Burdwan, West Bengal</h3>{" "}
                    <span>Bachelor of Arts in Sanskrit Honours</span>{" "}
                    <span>2020 (Percentage: 61)</span>
                  </a>
                </li>

                <li>
                  <a>
                    <h3>West Bengal Council of Higher Secondary Education</h3>{" "}
                    <span>Higher Secondary Examination (XII)</span>{" "}
                    <span>2017 (Percentage: 72)</span>
                  </a>
                </li>

                <li>
                  <a>
                    <h3>West Bengal Board of Secondary Education 2015</h3>{" "}
                    <span>Madhyamik Pariksha (X)</span>{" "}
                    <span>(Percentage: 50.42)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
