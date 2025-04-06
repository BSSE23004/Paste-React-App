import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";

const ShareButtons = ({ onShare }) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const title = "Check out this awesome website!";

  const handleClick = () => {
    setTimeout(() => {
      onShare();
    }, 300);
  };

  const handleEmailClick = () => {
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent("Take a look at this: " + shareUrl)}`;
    window.location.href = mailtoLink;
    handleClick();
  };

  return (
    <div className="flex gap-3">
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
      <EmailShareButton url={shareUrl} title={title} onClick={handleEmailClick}>
        <EmailIcon
          size={32}
          round
          className="transition-transform duration-300 hover:-translate-y-1"
        />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
