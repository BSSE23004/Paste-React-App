import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const ShareButtons = ({ onShare }) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const title = "Check out this awesome website!";

  const handleClick = () => {
    // Optional delay to let the share dialog open first
    setTimeout(() => {
      onShare(); // Call parent function to hide ShareButtons
    }, 300);
  };

  return (
    <div className="flex flex-row gap-4  w-full justify-end">
      <FacebookShareButton url={shareUrl} quote={title} onClick={handleClick}>
        <FacebookIcon
          size={32}
          round
          className="transition-transform duration-300 hover:-translate-y-1"
        />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title} onClick={handleClick}>
        <TwitterIcon
          size={32}
          round
          className="transition-transform duration-300 hover:-translate-y-1"
        />
      </TwitterShareButton>

      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        onClick={handleClick}>
        <WhatsappIcon
          size={32}
          round
          className="transition-transform duration-300 hover:-translate-y-1"
        />
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl} title={title} onClick={handleClick}>
        <LinkedinIcon
          size={32}
          round
          className="transition-transform duration-300 hover:-translate-y-1"
        />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
