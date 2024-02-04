import React from 'react'

type OctocatProps = {
  catLink: string
  imgSrc: string
  imgAlt: string
  catNumber: number
  name: string
  contributorLink: string
  contributorImg: string
  contributorAltImg: string
}

export function Octocat(props: OctocatProps) {
  return (
    <article>
      <a href={props.catLink}>
        <img src={props.imgSrc} width="400" height="400" alt={props.imgAlt} />
      </a>
      <ul>
        <li>
          #{props.catNumber}:
          <a href={props.catLink}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.contributorLink}>
            <img
              src={props.contributorImg}
              width="24px"
              height="24px"
              alt={props.contributorAltImg}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
