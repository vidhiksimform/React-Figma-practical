const BlogCard = ({ imgUrl, heading, text }) => {
  return (
    <div className="blog-card">
      <img
        src={`../../src/assets/${imgUrl}`}
        alt={heading}
        className="blog-card-img"
      />
      <p className="blog-card-heading">{heading}</p>
      <p className="blog-card-text text-tertiary">{text}</p>
      <div className="blog-card-continue">
        <a href="#" className="blog-card-reading">Continue Reading</a>
        <div className="blog-card-comments">
          <img src="../../src/assets/chat.svg" alt="chat" />
          <span className="text-tertiary">5 comments</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
