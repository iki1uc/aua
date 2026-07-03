export const AUA = (measure) => {
  if (measure > 0) {
    return {
      hit: true,
      block: true,
      save: true,
      tmp: "0xA1",
      msg: "AUA: Maß überschritten (1x)"
    };
  }

  return {
    hit: false,
    block: false,
    save: false,
    tmp: "0x00",
    msg: "AUA: sauber"
  };
};
