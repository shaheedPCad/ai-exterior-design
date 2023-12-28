"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7a0061dc-92ff-4f00-b873-3413abed4416");
  }, []);

  return null;
};
