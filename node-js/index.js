function getMiddle(s) {
  const cv = s.split("")
  const hasilBagi = cv.length / 2
  const isGenap = cv.length % 2
  if (isGenap === 0) {
    return [cv[hasilBagi - 1], cv[hasilBagi]].join("")
  } else {
    return cv[hasilBagi - 0.5]
  }
}
console.log(getMiddle("ayamnaka"))