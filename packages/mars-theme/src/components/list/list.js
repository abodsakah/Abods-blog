import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import TRUNK from 'vanta/dist/vanta.trunk.min.js';
const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Main>
    <Heading>
      <h1 style={{fontSize: '2rem', margin: 0, textAlign: 'center'}}>Welcome to my brain 🧠</h1>
      <h2 style={{fontWeight: 'lighter', fontSize: '1.5rem', textAlign: 'center'}}>This is where the magic happens 🪄</h2>
    </Heading>
    <Container>
      
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      <Items>
        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
      </Items>
      <Pagination />
      </Container>
      </Main>
  );
};

export default connect(List);
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container = styled.section`
  width: 100%;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Heading = styled.section`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 30vh;
  min-width 100vw;
  max-width: 100vw;
`

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const Items = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`;