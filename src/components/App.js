import video from "../data/video.js";
import Header from "./Header"

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Header 
        title={video.title} 
        views= {video.views} 
        created={video.createdAt} 
        upvote={video.upvotes} 
        downvotes={video.downvotes} 
        comments={video.comments}
        />
    </div>
  );
}

export default App;
