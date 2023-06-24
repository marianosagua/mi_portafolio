import React from 'react'
import { arrowUpIcon } from '../assets/Icons'

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/mariano-sagua-49785923b/"
        target="_blanck"
      >
        LINKEDIN
      </a>

      <a href="https://github.com/MarianoSagua" target="_blanck">
        GIT HUB
      </a>

      <p>@2023</p>

      <button onClick={() => window.scrollTo(0, 0)} className="footer__btn">
        {arrowUpIcon}
      </button>
    </div>
  )
}

export default Footer