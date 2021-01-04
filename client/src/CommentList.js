import React from 'react';

export default function CommentList({ comments }) {
  const renderedComments = comments.map(comment => {
    const { status } = comment;
    const content =
      status === 'approved'
        ? comment.content
        : status === 'pending'
        ? 'This comment is pending approval'
        : 'Comment rejected';

    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
