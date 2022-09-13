export const convertFromASN = (asn: any) => {
  const issuer = asn.sub[0].sub[3]
  const time = asn.sub[0].sub[4]
  const person  = asn.sub[0].sub[5]
  const getName = (item: any) => {
    return item.find((obj: any) => obj?.sub[0]?.sub[0].content().split('\n')[1] === 'commonName')
  }
  const commonName = getName(person.sub).sub[0].sub[1].content();
  const issuerCn = getName(issuer.sub).sub[0].sub[1].content();
  const validFrom = time.sub[0].content();
  const validTill = time.sub[1].content();
  return {commonName, issuerCn, validFrom, validTill}
}