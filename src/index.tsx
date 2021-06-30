import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
// import './index.css'
import * as crypto from "crypto-js"
class App extends Component {

  componentDidMount = () => {
    this.DecryptToken()
  }
  public DecryptToken = () => {
    var str = '_kJ7dZpycQVgtF6cLs5gKPEy1l5-0AQhfhKmLZl8mteZ8nou1UMBCc7IN4W86ZVhl-ll8WwATDSxLIVDhR7s6MXhxQNK-bp7PsGBl9U6gEwdF6W7-xIaglsHmIERCaO-GKM2YuO5EN1UXgOoaS5uOl4m2O03OSDnDBILqoEMeU6VkdweqEI9MdI1V1PRNBbiFaXQJj_J28gQc8_ElX0LDTTybVrSd78bWoPzU_IkOLReseiLBxtI22nu50KlWe8k2ZWDVDscV7Yszt0ISsvVOwhe5BeOhgAIRj5ND-R3q4r-b8lEGJJsCjrMEJeH7mobgc1jdtEideuHOqZTxRckwQ'
  var key = crypto.enc.Utf8.parse('$CL1ENT%K3Y&5IGN')
  var iv = crypto.enc.Utf8.parse('K$20201008083012')

  var base64Value = str.toString();
  // base64Value is U2FsdGVkX19s42BDpx8A9I265vm+zGKSk8nEbQwNjfw=
  var encryptedText = crypto.enc.Base64.parse(base64Value)
  var encrypted2 = encryptedText.toString(crypto.enc.Base64);
  var decrypt2 = crypto.AES.decrypt(encrypted2, key, {
    mode: crypto.mode.CBC,
    iv: iv,
    padding: crypto.pad.Pkcs7,
    keySize: 128 / 32

  });
  console.log(decrypt2.toString())
  console.log(decrypt2.toString(crypto.enc.Utf8));// TEST_TEXT

  // var decryptedText = crypto.AES.decrypt(str, key, {                             // 4. Use decrypt instead of encrypt
  //   iv: iv,
  // });
  // console.log(decryptedText)
  // var data = JSON.parse(decryptedText.toString(crypto.enc.Utf8));                             // 3. Remove line
  // console.log(data)
  }
  render() {
    return (<h1>Hello World!</h1>)
  }
}

render(<App />, document.getElementById('root'))