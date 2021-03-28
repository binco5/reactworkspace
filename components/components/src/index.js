import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './commentDetail';
import ApprovalCard from "./approvalCard";

const App = () => {
    return (
      <div className="ui container comments">

          <ApprovalCard>
          <CommentDetail
              author="Sam"
              date="Today at 6:04 PM"
              comment="Hello, I'm Sam!"
              avatar={faker.image.image()}
          />
          </ApprovalCard>

          <ApprovalCard>
          <CommentDetail
              author="Alex"
              date="Today at 8:04 AM"
              comment="It worked! Hahah first try!"
              avatar={faker.image.image()}
          />
          </ApprovalCard>

          <ApprovalCard>
          <CommentDetail
              author="Max"
              date="Yesterday at 3:21 AM"
              comment="Easy peasy!"
              avatar={faker.image.image()}
          />
          </ApprovalCard>

      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));