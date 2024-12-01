import { languageMockData } from "../mock/constants";
import { LanguageItem } from "../types";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialAuthState: LanguageItem = languageMockData[0];

export const langSlice = createSlice({
  name: "lang",
  initialState: initialAuthState as LanguageItem,

  reducers: {
    setLangDataInStorage: (
      _: LanguageItem,
      action: PayloadAction<LanguageItem>
    ) => {
      return {
        id: action.payload.id,
        label: action.payload.label,
      } as LanguageItem;
    },
  },
});
