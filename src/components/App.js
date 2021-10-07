//import { Route } from 'react-router-dom';
import { CommentBox } from 'components/CommentBox'
import { CommentList } from 'components/CommentList'

function App() {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
}

{/* <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} /> */}

export default App;
