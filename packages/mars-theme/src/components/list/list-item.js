import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import { useReadingTime } from "react-hook-reading-time";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const tags = [];
  const date = new Date(item.date);
  const {text} = useReadingTime(item.content.rendered);
  for (let tag of item.tags) {
    tags.push(state.source.tag[tag]);
  }
  return (
    <article style={{
      border: "1px solid #eaeaea",
      borderRadius: "1rem",
      padding: "2rem 1rem",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      margin: "1rem",
      maxWidth: "20rem",
      height: "auto",

    }}>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b> | {text}
        </PublishDate>
      </div>


      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      {/* Shwo tags */}
      <Tags>
        {tags.length > 0 && tags.map((tag) => {
          return (
            <Tag>
              <a href={tag.link}>{tag.name}</a>
            </Tag>
          )
        })}
      </Tags>

      {/* Read more link */}
      <Link link={item.link} style={{
        textDecoration: "underline",
      }}> Read more</Link>
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

const Tag = styled.span`
  background-color: #eaeaea;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;