import './styles/sass.scss'
import {
  fetchData,
  getCookie,
  setCookie,
  cssChanges,
  changeScroll,
} from './helpers'
import { CustomInput } from './CustomInput'

const NAME_OF_COOKIE = 'vendorsCookie'

window.addEventListener('DOMContentLoaded', async event => {
  // check did cookies is present
  if (!getCookie(NAME_OF_COOKIE)) {
    // get list of Vendors
    const partnersList = await fetchData()
    if (partnersList) {
      // set DOM element with CSS changes
      const cont = document.getElementById('container')
      const body = document.getElementById('blur')
      cssChanges(cont, body)
      changeScroll('remove')

      // Set form in the DOM with list of vendors
      cont &&
        (cont.innerHTML = `
      <form id='form-cookies'>
        <h1>GDPR consent</h1>
        <div>
          ${partnersList?.map(ven => CustomInput(ven)).join(' ')}
        </div>
        <div class='buttons'>
        <button class='btn' id='btn-reject' >Reject</button>
        <button type='submit' class='btn' id='btn-accept' >Accept</button>
        </div>
      </form>
      `)

      // register buton and form
      const rejectBtn = document.getElementById('btn-reject')
      const form = document.forms.namedItem('form-cookies')

      // set submit function with setCookies settings and CSS settings after click
      form &&
        (form.onsubmit = e => {
          e.preventDefault()
          let vendorsList: string[] = []
          for (let id of new FormData(form).keys()) {
            vendorsList.push(id)
          }
          setCookie(NAME_OF_COOKIE, vendorsList.join(','), 1)
          changeScroll('add')
          cssChanges(cont, body, 'remove')
        })

      // Set CSS settings when button will be clicked
      rejectBtn &&
        rejectBtn.addEventListener('click', e => {
          e.preventDefault()
          cssChanges(cont, body, 'remove')
          changeScroll('add')
        })
    }
  }
})
