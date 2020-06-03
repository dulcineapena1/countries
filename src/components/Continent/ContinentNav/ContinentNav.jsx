import React from 'react';

const ContinentNav = (props) => {
  const { activeTab, onChangeTab } = props;

  let nav = (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a
          className={activeTab === 'Africa' ? 'nav-link active' : 'nav-link'}
          onClick={() => onChangeTab('Africa')}
          href='#'>
          Africa
        </a>
      </li>
      <li className='nav-item'>
        <a
          className={activeTab === 'Americas' ? 'nav-link active' : 'nav-link'}
          onClick={() => onChangeTab('Americas')}
          href='#'>
          Americas
        </a>
      </li>
      <li className='nav-item'>
        <a
          className={activeTab === 'Asia' ? 'nav-link active' : 'nav-link'}
          onClick={() => onChangeTab('Asia')}
          href='#'>
          Asia
        </a>
      </li>
      <li className='nav-item'>
        <a
          className={activeTab === 'Europe' ? 'nav-link active' : 'nav-link'}
          onClick={() => onChangeTab('Europe')}
          href='#'>
          Europe
        </a>
      </li>
      <li className='nav-item'>
        <a
          className={activeTab === 'Oceania' ? 'nav-link active' : 'nav-link'}
          onClick={() => onChangeTab('Oceania')}
          href='#'>
          Oceania
        </a>
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
