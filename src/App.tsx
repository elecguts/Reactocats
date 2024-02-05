import React from 'react'
import { Octocat } from './Octocat'

export function App() {
  return (
    <body>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a className="bold" href="#">
                Octodex
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
            <li>
              <a href="https://octodex.github.com/atom.xml">RSS</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a className="rightNav" href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a className="rightNav" href="https://github.com/">
                Back to GitHub.com
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <Octocat
            catLink="https://octodex.github.com//terracottocat/"
            imgSrc="https://octodex.github.com//images/Terracottocat_Single.png"
            name="Terracottocat"
            catNumber={149}
            contributorLink="https://github.com/chubbmo"
            contributorImg="https://github.com/chubbmo.png"
            contributorAltImg="chubbmo"
          />
          <Octocat
            catLink="https://octodex.github.com//octogatos/"
            imgSrc="https://octodex.github.com//images/Octogatos.png"
            name="Octogatos"
            catNumber={148}
            contributorLink="https://github.com/cameronfoxly"
            contributorImg="https://github.com/cameronfoxly.png"
            contributorAltImg="cameronfoxly"
          />
          <Octocat
            catLink="https://octodex.github.com//sentrytocat/"
            imgSrc="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            name="Sentrytocat"
            catNumber={143}
            contributorLink="https://github.com/cameronmcefee"
            contributorImg="https://github.com/cameronmcefee.png"
            contributorAltImg="cameronfoxly"
          />
          <Octocat
            catLink="https://octodex.github.com//boxertocat/"
            imgSrc="https://octodex.github.com//images/boxertocat_octodex.jpg"
            name="Boxertocat"
            catNumber={141}
            contributorLink="https://github.com/rubyjazzy"
            contributorImg="https://github.com/rubyjazzy.png"
            contributorAltImg="rubyjazzy"
          />
          <Octocat
            catLink="https://octodex.github.com//suftocat/"
            imgSrc="https://octodex.github.com//images/surftocat.png"
            name="Surftocat"
            catNumber={140}
            contributorLink="https://github.com/jeejkang"
            contributorImg="https://github.com/jeejkang.png"
            contributorAltImg="jeejkang"
          />
          <Octocat
            catLink="https://octodex.github.com//scubatocat/"
            imgSrc="https://octodex.github.com//images/scubatocat.png"
            name="Scubatocat"
            catNumber={138}
            contributorLink="https://github.com/cameronfoxly"
            contributorImg="https://github.com/cameronfoxly.png"
            contributorAltImg="cameronfoxly"
          />
          <Octocat
            catLink="https://octodex.github.com//dinotocat/"
            imgSrc="https://octodex.github.com//images/dinotocat.png"
            name="Dinotocat"
            catNumber={130}
            contributorLink="https://github.com/heyhayhay"
            contributorImg="https://github.com/heyhayhay.png"
            contributorAltImg="heyhayhay"
          />
          <Octocat
            catLink="https://octodex.github.com//spidertocat/"
            imgSrc="https://octodex.github.com//images/spidertocat.png"
            name="Spidertocat"
            catNumber={88}
            contributorLink="https://github.com/jeejkang"
            contributorImg="https://github.com/jeejkang.png"
            contributorAltImg="jeejkang"
          />
        </section>
      </main>
      <footer>
        <div>
          <p>© 2013 – 2023 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
      <script type="module" src="/src/main.ts"></script>
    </body>
  )
}
