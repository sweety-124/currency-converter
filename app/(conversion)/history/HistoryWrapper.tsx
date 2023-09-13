"use client";
import ReduxProvider from "@/app/store/ReduxProvider";
import React from "react";
import HistoryList from "./HistoryList";

type Props = {};

const HistoryWrapper = (props: Props) => {
  return (
    <ReduxProvider>
      <HistoryList />
    </ReduxProvider>
  );
};

export default HistoryWrapper;
