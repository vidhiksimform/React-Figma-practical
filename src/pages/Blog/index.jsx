import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { blogInfo, categories, recentPost } from "../../utils";

const Blog = () => {
  return (
    <>
      <Header />
      <section className="blog-section">
        <div className="blog-hero">
          <div className="blog-heading">Our blog</div>
          <p className="blog-text">
            Leverage agile frameworks to provide a robust synopsis
            <br /> for high level overviews. Iterative approaches
          </p>
        </div>
        <div className="blog-main">
          <div className="blog-container">
            {blogInfo.map(({ imgName, heading, text }, index) => (
              <BlogCard
                imgUrl={imgName}
                heading={heading}
                text={text}
                key={index}
              />
            ))}
            <div className="blog-pagination">
              <Pagination pageNo={"1"} activePage={"activePage"} />
              <Pagination pageNo={"2"} />
              <a href="#" className="page-number pagination-arrow">&#8594;</a>
            </div>
          </div>
          <div className="recent-post">
            <input
              type="text"
              className="search"
              placeholder="Type to search"
            />
            <p className="recent-post-heading">Recent Posts</p>
            {recentPost.map(({ imgName, text, date }, index) => (
              <div className="recent-post-container" key={index}>
                <img
                  src={`../../src/assets/${imgName}.svg`}
                  alt={text}
                  className="recent-post-img"
                />
                <div>
                  <p className="recent-post-text">{text}</p>
                  <p className="recent-post-date">{date}</p>
                </div>
              </div>
            ))}
            <div className="categories-container">
              <p className="recent-post-heading">Categories</p>
              {categories.map((item, index) => (
                <p key={index} className="blog-categories">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
