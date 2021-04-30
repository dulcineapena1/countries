import React from 'react';
import './ContinentNav.css';

const ContinentNav = (props) => {
  const { activeTab, onChangeTab } = props;

  let nav = (
    <ul className='nav nav-tabs'>
      <li className='nav-item' onClick={() => onChangeTab('Africa')}>
        <a
          className={activeTab === 'Africa' ? 'nav-link active' : 'nav-link'}
          href='.' onClick={(e) => e.preventDefault()}>
          <span>Africa</span>
        </a>
        <p className='tabText'>Africa</p>
      </li>
      <li className='nav-item' onClick={() => onChangeTab('Americas')}>
        <a
          className={activeTab === 'Americas' ? 'nav-link active' : 'nav-link'}
          href='.' onClick={(e) => e.preventDefault()}>
          <span>Americas</span>
        </a>
        <p className='tabText'>Americas</p>
      </li>
      <li className='nav-item' onClick={() => onChangeTab('Asia')}>
        <a
          className={activeTab === 'Asia' ? 'nav-link active' : 'nav-link'}
          href='.' onClick={(e) => e.preventDefault()}>
          <span>Asia</span>
        </a>
        <p className='tabText'>Asia</p>
      </li>
      <li className='nav-item' onClick={() => onChangeTab('Europe')}>
        <a
          className={activeTab === 'Europe' ? 'nav-link active' : 'nav-link'}
          href='.' onClick={(e) => e.preventDefault()}>
          <span>Europe</span>
        </a>
        <p className='tabText'>Europe</p>
      </li>
      <li className='nav-item' onClick={() => onChangeTab('Oceania')}>
        <a
          className={activeTab === 'Oceania' ? 'nav-link active' : 'nav-link'}
          href='.' onClick={(e) => e.preventDefault()}>
          <span>Oceania</span>
        </a>
        <p className='tabText'>Oceania</p>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      {nav}
    </React.Fragment>
  );
};

export default ContinentNav;
