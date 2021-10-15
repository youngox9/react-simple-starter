import React, { useEffect, useState } from "react";
import { useStore, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "@/utils/axios";
import { setUserInfo } from "@/reducers/global";

const useAuth = props => {
  const dispatch = useDispatch();
  let history = useHistory();
  const store = useStore();
  const { global } = store.getState();

  const uid = global?.auth?.uid;

  useEffect(() => {
    if (uid) {
      getUserInfo();
    }
  }, [uid]);

  if (!uid) {
    console.log("kick off !!");
    history.push("login");
  }

  async function getUserInfo() {
    try {
      const { data } = await axios({
        url: `/back/users/${uid}`,
        method: "GET"
      });
      dispatch(setUserInfo(data));
    } catch (e) {
      console.log(">>>>>", e);
    }
  }
  return {};
};

export default useAuth;
