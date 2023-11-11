function boxSeq(step) {
  if (step === 0) {
    console.log(step);
    return step;
  } else if (step % 2 !== 0) {
    console.log(step);
    return step + 2;
  } else {
    console.log(step);
    return step;
  }
}
boxSeq(1)