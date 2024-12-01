import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faLinkSlash } from "@fortawesome/free-solid-svg-icons";

const UploadImage = ({ ongettingurl, cancel, attachment }) => {
  const cloud_name = "dujldfdhe";

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: cloud_name,
        uploadPreset: "jxls3wlm",
        sources: ["local"],
        multiple: false,
      },
      function (error, result) {
        if (result.event === "success") {
          ongettingurl(result.info.secure_url);
          alert("Image attached");
        }
      }
    );
  }, []);

  return (
    <div className="cursor-pointer inline-block">
      {!attachment ? (
        <button onClick={() => widgetRef.current.open()}>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
      ) : (
        <FontAwesomeIcon icon={faLinkSlash} onClick={() => cancel()} />
      )}
    </div>
  );
};

export default UploadImage;
