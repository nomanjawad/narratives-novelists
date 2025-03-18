"use client";
import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Authentication failed: ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication failed: ${error.message}`);
  }
};

const ImageUpload = () => {
  const ikUploadRef = useRef(null);
  const [field, setField] = useState<{ filepath: string }>(null);

    const onError = ()={}
    const onSuccess = ()={}

  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload className="hidden" ref={ikUploadRef} onError={onError} onSuccess={onSuccess} fileName="Test-Upload.png"/>
      <button className="upload-btn">
            <FaFileUpload fontSize={20}/>
            <p className="text-base text-light-100">Upload A File</p>
            {File && <p className="upload-filename">{File.filePath}</p>}
      </button>
      {file && 
        <IKImage alt={File.filepath} path={filePath}/>
        <IKImage alt={File.filepath} path={filePath}/>
      }
    </ImageKitProvider>
  );
};

export default ImageUpload;
