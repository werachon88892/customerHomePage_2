import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import PageHeader from '../UI/PageHeader/PageHeader';
import PageWrapper from '../UI/PageWrapper';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Link from 'next/link';
import Sidebar from '../UI/Sidebar';
import SidebarItem from '../UI/Sidebar/SidebarItem';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import RecentNews from '../UI/RecentNews';

export default function NewsDetails({ news }) {
  const router = useRouter();
  const { t } = useTranslation('news');
  const half = Math.floor(news[`detail_${router.locale}`].length / 2)
  const firstHalf = news[`detail_${router.locale}`].slice(0, half)
  const secondHalf = news[`detail_${router.locale}`].slice(half, news[`detail_${router.locale}`].length)
  // const contentLength = news[`detail_${router.locale}`].length;
  // const contentHalfArr = news[`detail_${router.locale}`].match(
  //   new RegExp('.{1,' + Math.round(contentLength / 2) + '}', 'g')
  // );
  moment.locale(router.locale == 'cn' ? 'zh-cn' : 'en');
  const { latestNews: latestNewsData } = useSelector((state) => state);

  useEffect(() => {
    let isMount = true
    if(isMount && typeof window !== 'undefined'){
      const firstHalfDiv =document.getElementById('firstHalf');
      const secondHalfDiv = document.getElementById('secondHalf');
      firstHalfDiv.innerHTML = firstHalf
      secondHalfDiv.innerHTML = secondHalf
    }
    return () => {
      isMount =false
    };
  }, [firstHalf, secondHalf]);

  return (
    <Fragment>
      <PageHeader
        bgImg={`/images/news/header.jpg`}
        title={news[`title_${router.locale}`]}
      />
      <PageWrapper classes='blog_container single_blog_page'>
        <div className='col-md-8 col-sm-12 blog-area'>
          <div className='blog-warp-1 blog_warp_lay_1'>
            <div className='blog_imgg'>
              <img src={news.picture} alt={news[`title_${router.locale}`]} />
            </div>
            <div className='blog_content_warp'>
              <a href='/' className='blog_datee'>
                <i className='fa fa-calendar'></i>
                &nbsp;{moment(news.date).format('ll')}
              </a>
              <br />
              {news[`tag_${router.locale}`] !== null &&
                news[`tag_${router.locale}`].map((tag, index) => {
                  return (
                    <Fragment key={tag.id}>
                      <Link
                        href={`/news/${news.id}`}
                        className='subtext'
                        scroll={false}>
                        <a className='fa fa-tag'>
                          &nbsp;{tag.tags}&nbsp;&nbsp;
                        </a>
                      </Link>
                    </Fragment>
                  );
                })}
              <h5>
                <Link
                  href={`/news/${news.id}`}
                  className='subtext'
                  scroll={false}>
                  <a>{news[`title_${router.locale}`]}</a>
                </Link>
              </h5>
              {/* <p> {contentHalfArr[0].replace(/<\/?[^>]+(>|$)/g, '')} </p> */}
              {/* <p>{firstHalf.replace(/<[^>]*(>|$)|&nbsp;|&#34;|&#39;|&zwnj;|&raquo;|&laquo;|&gt;/g, '')}</p> */}
                <div id="firstHalf"></div>
              <div className='sing_blog_middle_box'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='sing_blog_img'>
                      <img
                        src={news.picture}
                        alt={news[`title_${router.locale}`]}
                      />
                    </div>
                    <div className='sing_blog_text'>
                      <p> {news[`title_${router.locale}`]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sing_blog_bottom_box'>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* <p>{secondHalf.replace(/<[^>]*(>|$)|&nbsp;|&#34;|&#39;|&zwnj;|&raquo;|&laquo;|&gt;/g, '')}</p> */}
                    {/* <p> {contentHalfArr[1].replace(/<\/?[^>]+(>|$)/g, '')}</p> */}
                    <div id="secondHalf"></div>
                    {/* {
                      contentHalfArr.map((text, i)=>{
                        if(i>0){
                          return(
                            <p key={i.toString()}>{text.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                          )
                        }
                      })
                    } */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar classes='col-md-4 col-sm-12 widget-area'>
          <SidebarItem
            title={t('recentPosts')}
            classes={'widget wiget-recent-post'}>
            {latestNewsData.data.map((news, i) => {
              return (
                <RecentNews
                  key={news.id}
                  _id={news.id}
                  title={t(news[`title_${router.locale}`])}
                  publishDate={moment(news.date).format('ll')}
                  thumb={news.picture}
                />
              );
            })}
          </SidebarItem>
        </Sidebar>
      </PageWrapper>
    </Fragment>
  );
}

NewsDetails.propTypes = {
  news: PropTypes.object.isRequired,
};
