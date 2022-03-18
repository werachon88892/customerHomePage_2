import brand from "../../../public/data/brand"

const TopHeaderbar = () => {
    const phone = brand.data[`company_phone_${process.env.NEXT_PUBLIC_STATIC_TYPE}`]
    const email = brand.data[`company_email_${process.env.NEXT_PUBLIC_STATIC_TYPE}`]

  return (
    <div className="header_top_area">
        <div className="container">
            <div className="row">
                {/* Address / Phone / Email*/}
                <div className="colm">
                    <div className="header_wrapper_1">
                        <ul>
                            <li><i className="icon_phone"></i>{phone} </li>
                            <li> <i className="icon_mail_alt"></i>{email}</li>
                        </ul>
                    </div>
                </div>

                {/* SOCIAL ICON */}
                <div className="colm">
                    <div className="header_social"> 
                        <a rel="noopener noreferrer" href="//facebook.com" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a> 
                        <a rel="noopener noreferrer" href="//twitter.com"  target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a> 
                        <a rel="noopener noreferrer" href="//instagram.com" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a> 
                        <a rel="noopener noreferrer" href="//pinterest.com" target="_blank">
                            <i className="fa fa-pinterest"></i>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopHeaderbar;
