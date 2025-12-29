import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { Button } from "../components/Button";
import Icon from "../components/Icon";
import Loading from "../components/Loading";

interface StudioInfo {
  name: string;
  content: string;
  contact: string;
  profileImageUrl: string;
  latitude: number;
  longitude: number;
}

const CreateStudio = () => {
  const [studioInfo, setStudioInfo] = useState<StudioInfo>({
    name: "",
    content: "",
    contact: "",
    profileImageUrl: "",
    latitude: 0,
    longitude: 0,
  });
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const handleClick = useCallback(() => {
    fileRef?.current?.click();
  }, []);
  const handleChangeImg = useCallback((e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files;
    if (targetFiles && targetFiles.length > 0)
      setProfileImageUrl(URL.createObjectURL(targetFiles[0]));
    // console.log(URL.createObjectURL(targetFiles[0]));
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStudioInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(studioInfo);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /** @todo 프로필 이미지 url 받아온 후 post */
    console.log(studioInfo);
    setSubmitting(true);
  };

  return (
    <Wrapper>
      {submitting ? (
        <Loading />
      ) : (
        <form onSubmit={onSubmit}>
          <div className="form-title">Fill in profile details</div>
          <div className="upper-form">
            <div className="input-image" onClick={handleClick}>
              {profileImageUrl ? (
                <img src={profileImageUrl}></img>
              ) : (
                <div className="input">
                  <div className="plus-icon">+</div>
                  <div className="text">Set a profile picture</div>
                </div>
              )}

              <input
                ref={fileRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChangeImg}
              />
            </div>
            <div className="input-text-group">
              <div className="input-text">
                <div className="title">Profile Name</div>
                <Input name="name" onChange={onChange} />
              </div>
              <div className="input-text">
                <div className="title">Studio Adress</div>
                <Input
                  name="latitude"
                  placeholder="latitude"
                  onChange={onChange}
                />
                <Input
                  name="longitude"
                  placeholder="longitude"
                  onChange={onChange}
                />
              </div>
              <div className="input-text">
                <div className="title">Contact</div>
                <Input name="contact" onChange={onChange} />
              </div>
              <div className="input-text">
                <div className="title">Profile Description</div>
                <Input
                  name="content"
                  rows={6}
                  placeholder="Describe your tattoo studio – style, vibe, artists, or specialties."
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="form-title">Link your Instagram</div>
          <div className="bottom-form">
            <div className="input-text">
              <div className="title">ID</div>
              <Input placeholder="Instagram 추가 예정입니당~" />
            </div>
          </div>
          <Button className="submit-btn" type="submit" shape="circle">
            <Icon name="SaveFill" size={24} />
          </Button>
        </form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .upper-form {
      width: 100%;
      display: flex;
      gap: 50px;
      justify-content: space-between;
      margin-bottom: 20px;
      .input-image {
        width: 300px;
        height: 300px;
        overflow: hidden;
        border-radius: 5px;
        border: 1px solid #d9d9d9;
        flex-shrink: 0;

        .input {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;
          .plus-icon {
            font-size: 48px;
            color: #8c8c8c;
          }
          .text {
            color: #8c8c8c;
            font-size: 16px;
          }
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        input {
          display: none;
        }
      }
      .input-text-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .input-text {
          display: flex;
          align-items: flex-start;
          .title {
            flex-shrink: 0;
            width: 175px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
      @media ${({ theme }) => theme.device.desktop} {
        flex-direction: column;
        gap: 40px;
        .input-image {
          margin: auto;
        }
      }
    }
    .bottom-form {
      .input-text {
        display: flex;
        align-items: flex-start;
        .title {
          flex-shrink: 0;
          width: 50px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .submit-btn {
      position: fixed;
      bottom: 60px;
      right: 60px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0;
    form {
      padding-bottom: 20px;
      .upper-form .input-text-group .input-text {
        flex-direction: column;
        .title {
          padding-left: 2px;
        }
      }
      .submit-btn {
        position: static;
        margin-left: auto;
        margin-top: 20px;
      }
    }
  }
`;

export default CreateStudio;
