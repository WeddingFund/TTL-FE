import { useState, useCallback, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "../components/Icon";
import Tag from "../components/Tag";
import Input from "../components/Input";
import Loading from "../components/Loading";
import EXImg from "../assets/tatto-example.jpeg";

type Category = {
  id: number;
  type: string;
  code: string;
};

interface Post {
  id: number;
  content: string;
  categories: Category[];
  images: string[];
  isLiked: boolean;
  likeCount: number;
  viewCount: number;
  isOwner: boolean;
  updatedAt: string;
  createdAt: string;
}

interface Studio {
  id: number;
  name: string;
  content: string;
  contact: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  isFollowed: boolean;
  isOwner: boolean;
  updatedAt: string;
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  replyCount: number;
  commentId: number;
  postId: number;
  isLiked: boolean;
  isOwner: boolean;
  updatedAt: string;
  createdAt: string;
}

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState<Post>();
  const [studio, setStudio] = useState<Studio>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [myComment, setMyComment] = useState<string>("");

  const updatePost = useCallback(() => {
    console.log("post 업데이트: ", params.postId);
    setTimeout(
      () =>
        setPost({
          id: 1,
          content:
            "어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 v 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구",
          categories: [
            {
              id: 1,
              type: "GENRE",
              code: "OLD_SCHOOL",
            },
            {
              id: 2,
              type: "GENRE",
              code: "GENRE_EX",
            },
          ],
          images: [EXImg, EXImg, EXImg],
          isLiked: false,
          likeCount: 131,
          viewCount: 1300,
          isOwner: true,
          updatedAt: "2025-10-08T14:00:00Z",
          createdAt: "2025-10-08T14:00:00Z",
        }),
      1000
    );
  }, [params]);

  const getStudio = useCallback(() => {
    console.log("스튜디오 조회");
    if (!post) return;
    setTimeout(
      () =>
        setStudio({
          id: 1,
          name: "1번 스튜디오",
          content: "어쩌구 저쩌구",
          contact: "010-1111-1111",
          latitude: 37.5665,
          longitude: 126.978,
          isActive: true,
          isFollowed: false,
          isOwner: true,
          updatedAt: "2025-10-08T14:00:00Z",
          createdAt: "2025-10-08T14:00:00Z",
        }),
      1000
    );
  }, [post]);

  const getComments = useCallback(() => {
    console.log("댓글 조회");
    if (!post) return;
    setTimeout(
      () =>
        setComments([
          {
            id: 1,
            content: "좋은 글이네요!",
            replyCount: 1,
            commentId: 0,
            postId: 0,
            isLiked: false,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 2,
            content: "좋은 글이네요!zz",
            replyCount: 0,
            commentId: 0,
            postId: 0,
            isLiked: false,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 3,
            content: "좋은 글이네요!",
            replyCount: 1,
            commentId: 0,
            postId: 0,
            isLiked: false,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 4,
            content: "좋은 글이네요!",
            replyCount: 1,
            commentId: 0,
            postId: 0,
            isLiked: false,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
        ]),
      1000
    );
  }, [post]);

  const submitComment = useCallback(() => {
    console.log("submit comment: ", myComment);
    setMyComment("");
    getComments();
  }, [myComment, getComments]);

  useEffect(() => {
    updatePost();
  }, [updatePost]);

  useEffect(() => {
    getStudio();
  }, [getStudio]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <Wrapper>
      {!post || !studio ? (
        <Loading />
      ) : (
        <>
          <div className="img-wrapper">
            {post?.images.map((img, i) => (
              <img src={img} alt={img} key={i} />
            ))}
          </div>
          <div className="contents">
            <div className="post">
              <NavLink to={`/studio/${studio?.id}`}>
                <div className="studio">
                  <img src={EXImg} alt="exex" />
                  {studio?.name}
                </div>
              </NavLink>
              <div className="counts">
                <div className="info">
                  <Icon name="Heart" size={20} />
                  {post?.likeCount}
                </div>
                <div className="info">
                  <Icon name="Eye" size={20} />
                  {post?.viewCount}
                </div>
              </div>
              <div className="content">
                <div className="desc">{post?.content}</div>
                <div className="tags">
                  {post?.categories.map((tag) => (
                    <Tag key={tag.id} name={tag.code} />
                  ))}
                </div>
              </div>
            </div>
            <div className="comments">
              <div className="comment-header">{`Comments ${comments.length}`}</div>
              {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                  {comment.content}
                </div>
              ))}
              <Input
                placeholder="Add comment"
                value={myComment}
                onChange={(e) => setMyComment(e.target.value)}
                onEnter={submitComment}
              />
              {/* 내 게시글일 때 수정 버튼 추가 */}
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  gap: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  .img-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
    img {
      width: 100%;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      flex-shrink: 0;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    width: 50%;
    .post {
      height: 60%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .studio {
        height: 96px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        padding: 13px 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid #d9d9d9;
        }
      }
      .counts {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .desc {
          font-size: 16px;
        }
        .tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }
      }
    }
    .comments {
      height: 40%;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .comment {
        min-height: 30px;
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    padding: 0;
    gap: 10px;
    overflow: auto;
    .img-wrapper {
      width: 100%;
      /* height: auto; */
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      overflow-y: visible;
      /* flex-shrink: 0; */
      img {
        width: calc(50% - 10px);
        /* aspect-ratio: 1; */
      }
    }
    .contents {
      width: 100%;
      height: auto;
      gap: 20px;
      .post {
        height: auto;
      }
      .comments {
        height: auto;
        input {
          position: sticky;
          bottom: 0;
        }
      }
    }
  }
`;

export default Post;
