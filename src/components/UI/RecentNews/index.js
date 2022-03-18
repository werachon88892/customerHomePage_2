import React from 'react';
import Link from "next/link";


const RecentNews = ({title,thumb,publishDate,_id}) => {
    
    const newsURL = `/news/${_id}`;
    return (
        <div className="recent-post-box">
            <div className="recent_wid_pic">
                <img src={thumb} alt={title} />
            </div>
            <div className="recent-title">
                <Link href={newsURL} ><a>{title}</a></Link>
                <p>{publishDate}  </p>
            </div>
        </div>
    );
};

export default RecentNews;
