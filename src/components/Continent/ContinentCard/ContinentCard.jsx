import React from 'react';

const ContinentCard = (props) => {
  const { continentSummary } = props;

  let continent_html = (
    <div dangerouslySetInnerHTML={{__html: continentSummary}}></div>
  );

  return (
    <React.Fragment>
      {continent_html}
    </React.Fragment>
  );
};

export default ContinentCard;
