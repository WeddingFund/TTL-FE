import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSearchContext } from "../context/SearchContext";
import Icon from "../components/Icon";
import Tag from "../components/Tag";
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

const Feed = () => {
  const { searchParams } = useSearchContext();

  const [posts, setPosts] = useState<Post[]>([]);

  /** @todo 게시글 조회 api 추가 */
  const search = useCallback(() => {
    setPosts([]);

    console.log("검색: ", searchParams);
    setTimeout(
      () =>
        setPosts([
          {
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
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 2,
            content: "어쩌구 저쩌구",
            categories: [
              {
                id: 1,
                type: "GENRE",
                code: "OLD_SCHOOL",
              },
            ],
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 3,
            content: "어쩌구 저쩌구",
            categories: [
              {
                id: 1,
                type: "GENRE",
                code: "OLD_SCHOOL",
              },
            ],
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 4,
            content: "어쩌구 저쩌구",
            categories: [
              {
                id: 1,
                type: "GENRE",
                code: "OLD_SCHOOL",
              },
            ],
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 5,
            content: "어쩌구 저쩌구",
            categories: [
              {
                id: 1,
                type: "GENRE",
                code: "OLD_SCHOOL",
              },
            ],
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
          {
            id: 6,
            content: "어쩌구 저쩌구",
            categories: [
              {
                id: 1,
                type: "GENRE",
                code: "OLD_SCHOOL",
              },
            ],
            images: [EXImg],
            isLiked: false,
            likeCount: 131,
            viewCount: 1300,
            isOwner: true,
            updatedAt: "2025-10-08T14:00:00Z",
            createdAt: "2025-10-08T14:00:00Z",
          },
        ]),
      1000
    );
  }, [searchParams]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <Wrapper>
      {posts.length > 0 &&
        posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <Post>
              <div className="img-container">
                <img src={post.images[0]} alt={post.content} />
              </div>
              <div className="contents">
                <div className="content">{post.content}</div>
                <div className="tags">
                  {post.categories.map((tag) => (
                    <Tag key={tag.id} name={tag.code} />
                  ))}
                </div>
                <div className="counts">
                  <div className="info">
                    <Icon name="Heart" size={20} />
                    {post.likeCount}
                  </div>
                  <div className="info">
                    <Icon name="Eye" size={20} />
                    {post.viewCount}
                  </div>
                </div>
              </div>
            </Post>
          </Link>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  gap: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 0;
    a {
      width: calc(50% - 10px);
    }
  }
`;

const Post = styled.div`
  width: 254px;
  height: 368px;
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  .img-container {
    width: 222px;
    height: 243px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .content {
      font-size: 14px;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .tags {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }
    .counts {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      font-size: 16px;
    }
    .info {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: auto;
    .img-container {
      width: 100%;
      height: 120px;
    }
    .tags {
      height: 40px;
      overflow: hidden;
    }
  }
`;

export default Feed;
