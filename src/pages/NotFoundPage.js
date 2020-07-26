import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div className="ui container">
      <h3>Page Not Found!!!</h3>
      <p>Please try again!</p>
    </div>
  );
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any),
}

NotFoundPage.defaultProps = {
  staticContext: {},
}

export default {
  component: NotFoundPage,
}
