import { Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { sum } from "../../util";
import * as OS from "./operation.style";
import { Close as CloseIcon } from '@material-ui/icons'

const Total = ({ total, reset }) => {
  const [inputValueList, setInputValueList] = useState({});
  const [open, setOpen] = useState(false);
  const smartRef = useRef([]);

  const handleChange = (e, cheitaMea) => {
    const { value, keyCode } = e.target;
    console.log(
      value,
      cheitaMea,
      keyCode,
      e,
      e.keyCode < 58 && e.keyCode > 47 ? e.keyCode : "-0-"
    );
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
  };
  const scris = sum(
    Object.keys(inputValueList)
      .map((ol) => +ol)
      .sort((a, b) => b - a)
      .map((oat) => Math.pow(10, oat) * inputValueList[oat])
  );

  const checkResult = (e) => {
    e.preventDefault();
    console.log(total === scris);
    // total === scris
    //   ? toast.success(`Correct, you got points!`)
    //   : toast.error(`Wrong answer, try again!`);
    console.log("We have access to the value of total: ", total, scris);
    console.log("I will return true or false at some point in the near future");
    setOpen(true)
  };

  const selectPrize = type => {
    // talk to redux store to update time or cash
    console.log(`You choose: ${type}`)
    handleClose()
  };

  const handleClose = () => {
    reset();
    setInputValueList(
      Object.keys(inputValueList).reduce((a, c) => ({ ...a, [c]: 0 }), {})
    );
    smartRef.current[0].focus();
    setOpen(false);
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
        <DialogContent dividers>
          {total === scris && (
            <>
              <p>The correct answer is:</p>
              <h1>{total}</h1>
              <p>Pick your prize:</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => selectPrize('time')}
              >
                Get 1min 20 seconds
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => selectPrize('cash')}
              >
                Get 2 penny
              </Button>
            </>
          )}
          {total !== scris && (
            <>
              <p>Unfortunately the correct answer is <b>{total}</b> and you input <b>{scris}</b>.</p>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Try again to win your prize
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <OS.StyledOperationNumber>
        {String(total)
          .split("")
          .reverse()
          .map((x, cheita) => (
            <OS.StyledOperationSpan key={cheita}>
              <OS.StyledOperationInput
                autoFocus={cheita === 0}
                onKeyDown={(e) => handleChange(e, cheita)}
                type="text"
                ref={(el) => (smartRef.current[cheita] = el)}
                value={inputValueList[cheita] || 0}
              />
            </OS.StyledOperationSpan>
          ))}
      </OS.StyledOperationNumber>
      <button onClick={checkResult}>Check result</button>
    </form>
  );
};

export { Total };
