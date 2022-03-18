const PageWrapper = ({classes,children}) => {
  return (
      <div className={`page-wrapper ${classes}`}>
          <div className="container">
              <div className="row">
                  {children}
              </div>
          </div>
      </div>
  );
};

export default PageWrapper;