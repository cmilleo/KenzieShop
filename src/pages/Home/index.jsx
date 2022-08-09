import React, { useEffect } from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { Products } from "../../components/Products";
import { Container } from "./styles";
import { useState } from "react";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { addDays } from "date-fns/esm";
import { differenceInDays } from "date-fns";

export const Home = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [disabledDays, setDisabledDays] = useState([]);
  function checkDates() {
    const dates = [
      {
        startDate: new Date("2022/7/10"),
        endDate: new Date("2022/7/15"),
      },
      {
        startDate: new Date("2022/7/20"),
        endDate: new Date("2022/7/25"),
      },
    ];
    let normal = [];
    for (let j = 0; j < dates.length; j++) {
      let disabled = [dates[j].startDate];
      let diference = differenceInDays(dates[j].endDate, dates[j].startDate);
      console.log(diference);
      for (let i = 0; i < diference; i++) {
        disabled.push(addDays(new Date(disabled[disabled.length - 1]), 1));
        // console.log(disabled);
      }
      // console.log(disabled);
      normal = [...normal, ...disabled];
      // console.log(disabledDays);
    }
    setDisabledDays(normal);
  }
  console.log(disabledDays);
  useEffect(() => {
    // console.log(state);
    // console.log((state[0].endDate - state[0].startDate) / 100 / 60 / 60);
    checkDates();
  }, []);
  return (
    <Container>
      <HeaderHome />
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        disabledDates={disabledDays}
        ranges={state}
        locale={locales.pt}
      />
      <Products />
    </Container>
  );
};
