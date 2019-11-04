import { Link } from "gatsby";
import React from "react";
import logo from '../../../src/images/logo.png';
import closeIcon from '../../images/Icons/close.png';
import disableScroll from 'disable-scroll';
import Styles from './Nav.module.scss';


class Navigation extends React.Component {
  constructor() {
    super();
    // this.navElement = document.querySelector(".nav");
    this.state = {
      navigationOpen: false,
    }
  }

  componentDidMount() {
    this.DetermineNavState()
    // event listener for when screen changes size
    window.addEventListener('resize', () => { this.DetermineNavState() });
  }

  componentDidUpdate() {
    // if nav is in the dom run add the event listeners
    if (this.state.navigationOpen) { this.HandleNavAction() }
  }

  // function to determine whether to show nav based on desktop show nav or hide on mobile.
  DetermineNavState() {
    // this.setState({ navigationOpen: false })
    if (window.innerWidth < 599) {
      this.setState({ navigationOpen: false })
    }
    else {
      console.log()
      this.setState({ navigationOpen: true })
    }
  }

  // Handles whether to open or close depending on if nav is open in state
  ShowOrHideNav() { (!this.state.navigationOpen ? this.OpenNav() : this.CloseNav()) }

  // brings Nav Onto Screen and disabled scrolling
  OpenNav() { disableScroll.on(); this.setState({ navigationOpen: true }) }

  // move the navigation off screen and enabled scrolling
  CloseNav() { disableScroll.off(); this.setState({ navigationOpen: false }) }

  // Handles the Clicks
  HandleNavAction(event) {


    // const navElement = document.querySelector(`.${Styles.nav}`);
    const navLink = document.querySelectorAll(`.${Styles.navItem}`);

    // const outsideClickListener = (event) => {
    //   if (!navElement.contains(event.target)) {
    //     removeEventListener()
    //     this.CloseNav();
    //   }
    // }

    // if the Nav-Links are clicked the follow function runs

    const navClickListener = (event) => {
      navLink.forEach(element => {
        if (element.contains(event.target)) {
          // if(window.innerWidth < 768) {}
          removeEventListener()
          this.CloseNav()
        }
      });
    }

    const removeEventListener = () => {
      if (window.innerWidth < 599) {
        // document.removeEventListener('click', outsideClickListener)
        document.removeEventListener("click", navClickListener)
      }
    }

    if (window.innerWidth < 599 && this.state.navigationOpen) {
      // document.addEventListener('click', outsideClickListener)
      document.addEventListener("click", navClickListener)
    }

  }

  render() {
    // List of the Nav items and their paths
    // this will be loaded dynamically in the future
    let links = [
      { label: 'HOME', link: "/" },
      { label: 'ABOUT', link: "/about" },
      { label: 'BLOG', link: "/blog" },
      { label: 'PORTFOLIO', link: "/portfolio" },
      { label: 'INSTAGRAM', link: "/instagram" }
    ];

    return (

      <div className={Styles.navContainer} >

        {/* Brand Logo */}
        <div className={Styles.navIcon}>
          <Link to="/">
            <img className={Styles.logo} src={logo} alt="Journal Of Z Logo" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className={Styles.hamburgerContainer} >
          {!this.state.navigationOpen ?
            <div className={Styles.hamburger} onClick={() => { this.ShowOrHideNav() }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            :
            <div className={Styles.closeNavBtn} onClick={() => { this.ShowOrHideNav() }}>
              <img src={closeIcon} alt="Close Nav" />
            </div>
          }
        </div>



        {/* Nav Links if Nav Opened */}
        {this.state.navigationOpen ?

          <div className={Styles.nav} >
            <ul className={Styles.navMenu} >
              {links.map((link, index) => {
                return (
                  <Link className={Styles.navItemLink} key={link.label} to={link.link} exact="true" activeClassName={Styles.activePage} >
                    <li className={Styles.navItem}>
                      {link.label}
                    </li>
                  </Link>
                );
              })}
            </ul>

          </div>
          :
          null}

      </div>
    )
  }

}

export default Navigation;

