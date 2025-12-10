import { useState, useRef, useCallback } from "react";
import styled from "styled-components";

// interface StudioInfo {
//   name: string;
//   content: string;
//   contact: string;
//   //   profileImageUrl: string;
//   latitude: number;
//   longitude: number;
// }

const CreateStudio = () => {
  // const [studioInfo, setStudioInfo] = useState<StudioInfo>();
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

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

  return (
    <InfoWrapper>
      <div className="title">Fill in profile details</div>
      <div className="form">
        <ImageInput onClick={handleClick}>
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
        </ImageInput>
      </div>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ImageInput = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #d9d9d9;

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
`;

export default CreateStudio;
