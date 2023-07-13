import React from "react";
import * as Toast from "@radix-ui/react-toast";
import "./Toast.css";

const ToastProp = ({ success }) => {
  const [open, setOpen] = React.useState(success);
  const timerRef = React.useRef(0);
  console.log(timerRef);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      {/* <button
        className="Button large violet"
        onClick={() => {
          setOpen(false);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button> */}

      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
        <Toast.Description asChild>
          <time className="ToastDescription">"HELLOO!"</time>
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="Button small green">Undo button</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastProp;
