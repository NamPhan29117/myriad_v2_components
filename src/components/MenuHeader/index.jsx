import React from "react";
import "./style.scss";
import { Popover } from "antd";
import { useMsal } from "@azure/msal-react";

export default function MenuHeader() {
  const { instance, accounts } = useMsal();

  function handleLogout(instance) {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
    localStorage.removeItem("accessToken_MS");
  }

  const RenderTilte = () => {
    return (
      <div className="render-tile">
        <span className="company main-text-s2ix">CTY CP Eastgate Software</span>
        <span
          onClick={() => handleLogout(instance)}
          className="sign-out-text main-text-s2ix"
        >
          Sign out
        </span>
      </div>
    );
  };

  const RenderContent = () => {
    return (
      <div className="render-content">
        <div className="img-avatar"></div>
        <div className="info-account">
          <div className="heading-s2ix name">{accounts[0].name}</div>
          <div className="caption-s2ix username">{accounts[0].username}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="header-menu">
      <div className="header-menu__logo-right">
        <img src="images/S2IX-logo.png" alt="" />
      </div>
      <div className="header-menu__search-center">
        <form>
          <input placeholder="Search" />
          <img src="images/search-icon.svg" alt="" />
        </form>
      </div>
      <div className="header-menu__left">
        <div className="item-left">
          <img src="images/email.svg" alt="" />
        </div>
        <div className="item-left">
          <img src="images/pth-14.svg" alt="" />
        </div>
        <div className="item-left">
          <img src="images/big-data.svg" alt="" />
        </div>
        <Popover
          placement="bottomRight"
          title={<RenderTilte />}
          content={<RenderContent />}
          trigger="click"
        >
          <div className="item-avatar">
            <img src="images/avatar-test.png" alt="" />
          </div>
        </Popover>
      </div>
    </div>
  );
}
