import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				<div className='date'>{props.post.date}</div>
				<div className='content'>{props.post.content}</div>
				<div className='likes'>{props.post.likes} likes</div>
			</div>
		</div>
	)
}

export default Post;
