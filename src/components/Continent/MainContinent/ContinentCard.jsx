import React from 'react';

const ContinentCard = (props) => {
  const { continentInfo } = props;

  let continent_html = (
    <div dangerouslySetInnerHTML={{__html: continentInfo}}></div>
  );

  return (
    <React.Fragment>
      {continent_html}
    </React.Fragment>
  );
};

export default ContinentCard;
