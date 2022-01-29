import {Global, css, connect, styled, Head} from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Style from "./Style";
import CookieConsent from "react-cookie-consent";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <style>
          {Style}
        </style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.trunk.min.js" integrity="sha512-WKGZ4lwjo3ZSZk9MppTAgaSeUz5+dF6SjTrMulCI3WBdEmIXBu+A4eVyTiCOmXCM0KU/sGJbMWfx35Fea/7x8w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            {`VANTA.TRUNK({
              el: "#heading",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00
            })`}
        </script>
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <CookieConsent
          location="bottom"
          buttonText="Got it!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B"}}
          buttonStyle={{ color: "#fff", backgroundColor: "#1f38c5", fontSize: "24px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>


    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
  
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

