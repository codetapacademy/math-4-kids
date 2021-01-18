import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { doOperation } from "../../util";
import * as OS from "./operation.style";
import { Close as CloseIcon } from '@material-ui/icons'
import { updateChildCashOrTimeAction } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const Total = ({ total, reset, nod, nio, operation }) => {
  const [inputValueList, setInputValueList] = useState({});
  const [open, setOpen] = useState(false);
  const smartRef = useRef([]);
  const points = nod * (nio - 1) * 10
  const dispatch = useDispatch()
  const firstCharacter = String(total)[0]

  const handleChange = (e, cheitaMea) => {
    const { value, keyCode } = e.target;
    if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
      // move focus to the right
      if (smartRef.current[cheitaMea - 1]) {
        smartRef.current[cheitaMea - 1].focus()
      }
    }
    if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
      // move focus to the left
      if (smartRef.current[cheitaMea + 1]) {
        smartRef.current[cheitaMea + 1].focus()
      }
    }

    if (e.keyCode < 58 && e.keyCode > 47) {
      setInputValueList({
        ...inputValueList,
        [cheitaMea]: e.keyCode - 48,
      });

      if (smartRef.current[cheitaMea + 1]) {
        smartRef.current[cheitaMea + 1].focus();
      }
    }
    if (e.key === 'Enter') {
      checkResult(e)
    }
  };
  const scris = (firstCharacter === '-' ? -1 : 1) * doOperation(
    Object.keys(inputValueList)
      .map((ol) => +ol)
      .sort((a, b) => b - a)
      .map((oat) => Math.pow(10, oat) * inputValueList[oat]),
    '+',
  );

  const checkResult = (e) => {
    setOpen(true)
    e.preventDefault();
  };

  const selectPrize = (type, amount) => {
    // talk to redux store to update time or cash
    console.log(`You choose: ${type}`)
    dispatch(updateChildCashOrTimeAction(type))
    handleClose()
  };

  const handleClose = () => {
    reset(operation);
    setInputValueList(
      Object.keys(inputValueList).reduce((a, c) => ({ ...a, [c]: 0 }), {})
    );
    setOpen(false);
    setTimeout(() => {
      smartRef.current[0].focus();
    }, 250)
  };

  return (
    <form onSubmit={checkResult}>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle disableTypography id="customized-dialog-title" onClose={handleClose}>
          <Typography>{total === scris ? `You're amazing` : `Wrong answer`}</Typography>
          <OS.StyledOperationCloseButton onClick={handleClose}>
            <CloseIcon />
          </OS.StyledOperationCloseButton>
        </DialogTitle>
        {total === scris && (
          <>
            <DialogContent dividers>
              <p>You've earned {points} points.</p>
              <p>Pick your prize:</p>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => selectPrize('time', 2.5 * points)}
                autoFocus
              >
                Get {2.5 * points} seconds
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => selectPrize('cash', points / 10)}
              >
                Get {points / 10} penny
              </Button>
            </DialogActions>
          </>
        )}
        {total !== scris && (
          <>
            <DialogContent dividers>
              <p>Unfortunately the correct answer is <b>{total}</b> and you input <b>{scris}</b>.</p>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                autoFocus
              >
                Try again to win your prize
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <OS.StyledOperationNumber>
        {String(total)
          .split("")
          .reverse()
          .map((x, cheita, arr) => (
            <OS.StyledOperationSpan key={cheita}>
              <OS.StyledOperationInput
                autoFocus={cheita === 0}
                onKeyDown={(e) => handleChange(e, cheita)}
                onChange={() => {}}
                type="text"
                ref={(el) => (smartRef.current[cheita] = el)}
                value={cheita + 1 === arr.length && firstCharacter === '-' ? '-': (inputValueList[cheita] || 0)}
              />
            </OS.StyledOperationSpan>
          ))}
      </OS.StyledOperationNumber>
      <OS.StyledOperationCheckScoreButton
        onClick={checkResult}
        variant="contained"
      >
        Check result
      </OS.StyledOperationCheckScoreButton>
    </form>
  );
};

export { Total };
