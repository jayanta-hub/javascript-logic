const generateOTP = () => {
  const length = 6;
  let Otp = "";
  for (i = 0; i < length; i++) {
    Otp += Math.floor(Math.random() * 10);
  }
  return Otp;
};
console.log("generateOTP>", generateOTP());
