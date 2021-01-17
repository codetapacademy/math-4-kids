import React from "react";
import {
  PersonAdd as PersonAddIcon,
  Person as PersonIcon,
  EmojiEvents as EmojiEventsIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import * as Action from '../../store/user/user.action'
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, ButtonGroup, IconButton, Toolbar, Typography } from "@material-ui/core";

import * as ABS from "./action-button.style";

const ActionButtonList = ({ setModal }) => {
  const [
    children,
    selectedChild
  ] = useSelector(({ user }) => ([
    user.children,
    user.selected
  ]))

  const dispatch = useDispatch()

  const handleChildSelection = child => {
    dispatch(Action.setSelectedChildAction(child))
    setModal('child')
  }
  return (
    <ABS.StyledActionAppBar position="fixed" color="default">
      <Toolbar>
        <Box margin={1}>
          <ABS.StyledActionButtonIconButton
            color="primary"
            onClick={() => setModal('parent')}
          >
            <PersonAddIcon />
          </ABS.StyledActionButtonIconButton>
          <Typography align="center">Parent</Typography>
        </Box>

        <Box margin={1}>
          <ButtonGroup>
            {children.map((child, cheie) => (
              <ABS.StyledActionButtonIconButton
                color={selectedChild === cheie ? 'secondary' : 'default'}
                onClick={() => handleChildSelection(cheie)}
                variant="contained"
              >
                <span>{children[cheie].profile.firstName}</span>
                <PersonIcon />
              </ABS.StyledActionButtonIconButton>
            ))}
          </ButtonGroup>
        </Box>

        <Box margin={1}>
          <ABS.StyledActionButtonIconButton
            onClick={() => setModal('level')}
          >
            <SettingsIcon />
          </ABS.StyledActionButtonIconButton>
          <Typography align="center">Level</Typography>
        </Box>

        <Box margin={1}>
          <ABS.StyledActionButtonIconButton
            onClick={() => setModal('bonus')}
          >
            <EmojiEventsIcon />
          </ABS.StyledActionButtonIconButton>
          <Typography align="center">Bonus</Typography>
        </Box>
      </Toolbar>
    </ABS.StyledActionAppBar>
  );
};

export { ActionButtonList }
