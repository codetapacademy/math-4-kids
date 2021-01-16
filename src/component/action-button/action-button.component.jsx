import React from "react";
import {
  PersonAdd as PersonAddIcon,
  Person as PersonIcon,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";

import * as ABS from "./action-button.style";

const ActionButtonList = ({ setModal }) => {
  const children = useSelector(({ user }) => user.children)
  return (
    <ABS.StyledActionButtonWrapper>
      <IconButton
        color="primary"
        onClick={() => setModal('parent')}
      >
        <PersonAddIcon />
      </IconButton>
      {children.map(child => (
        <IconButton
          color="secondary"
          onClick={() => setModal('child')}
        >
          {child.firstName}
          <PersonIcon />
        </IconButton>
      ))}
    </ABS.StyledActionButtonWrapper>
  );
};

export { ActionButtonList }
