import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
