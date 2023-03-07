// For Generate Random OTP
const generateOTP = (otpLength) => {
  const length = otpLength;
  let Otp = "";
  for (i = 0; i < length; i++) {
    Otp += Math.floor(Math.random() * 10);
  }
  return Otp;
};
console.log("generateOTP>", generateOTP(6));

// For Array   [..,..,..,..,..]
const RemoveDuplicateValue = (arry) => {
  const toFindDuplicates = (arry) =>
    arry.filter((item, index) => arry.indexOf(item) === index);
  const duplicateElementa = toFindDuplicates(arry);
  return duplicateElementa;
};
console.log(
  "RemoveDuplicateValue",
  RemoveDuplicateValue([1, 2, 1, 3, 4, 3, 5]),
);

// For Array of Object  [{...},{...},{...},...]
const RemoveDuplicateArray = (data) => {
  let concatArray = data.map((eachValue) => {
    return Object.values(eachValue).join("");
  });
  let filterValuesData = data.filter((value, index) => {
    return concatArray.indexOf(concatArray[index]) === index;
  });
  return filterValuesData;
};

// For Count In 1k,1m formate
const LikeCountMethod = (num) => {
  const digits = 1;
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};
console.log(LikeCountMethod(1200)); // 1.2k
