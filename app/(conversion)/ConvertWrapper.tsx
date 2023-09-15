"use client";
import React from "react";
import ReduxProvider from "../store/ReduxProvider";
import ConvertForm from "./ConvertForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  currencies: any;
};

const ConvertWrapper = (props: Props) => {
  return (
    <ReduxProvider>
      <ConvertForm currencies={props.currencies} />
      <ToastContainer />
    </ReduxProvider>
  );
};

export default ConvertWrapper;
