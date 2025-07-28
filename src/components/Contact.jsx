import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, { opacity: 0, yPercent: -100, stagger: 0.02 })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })

      .to("#f-left-leaf", {
        y: 50,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-right-leaf",
        {
          y: -50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>Mojito Bar, 123 Cocktail Lane, Drink City, DC 12345</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(123) 456-7890</p>
          <p>hello@mojito.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a href={social.url} key={social.name} target="_blank">
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
