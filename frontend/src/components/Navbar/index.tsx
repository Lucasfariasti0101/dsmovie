import { ReactComponent as GithubIcon } from 'assets/img/GithubIcon.svg';
import './style.css';
function Navbar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
        <a href='https://github.com/Lucasfariasti0101' target="_blank" rel="noreferrer">
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/Lucasfariasti0101</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
