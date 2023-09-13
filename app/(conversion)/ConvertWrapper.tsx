"use client";
import React from "react";
import ResultCard from "../components/ResultCard";
import ReduxProvider from "../store/ReduxProvider";
import ConvertForm from "./ConvertForm";
import { useAppSelector } from "../store";
import { ToastContainer, toast } from "react-toastify";
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
