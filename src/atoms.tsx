import { atom, selector } from "recoil";

// export const minuteState = atom({
//     key: "minutes",
//     default: 0,
// });

// //   export const hourSelector = selector({
// export const hourSelector = selector<number>({
//     key: "hours",
//     get: ({ get }) => {
//         const minutes = get(minuteState);
//         return minutes / 60;
//     },

//     // set
//     set: ({ set }, newValue) => {
//         console.log("new value : ", newValue);

//         const minutes = Number(newValue) * 60;
//         set(minuteState, minutes);
//     },
// });
