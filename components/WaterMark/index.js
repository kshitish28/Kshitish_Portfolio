import React, { useEffect } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By kshitih28.vercel.app
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAA_AAAAAAAAAAAAAAA_____________AAAAAA
  AAAAAAAAAAA___AAAAAAAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAAAAAAA_____AAAAAAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAAAAAA___A___AAAAAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAAAAA_________AAAAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAAAA____AAA____AAAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAAA____AAAAA____AAAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAAA____AAAAAAA____AAAAAAAAAAAAA__AAAAAAAAAAAA
  AAAA____AAAAAAAAA____AAAAAAA_____________AAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  `)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
