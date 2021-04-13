import { VendorsDataType } from './types'

export function setCookie(cName: string, cValue: string, exDays: number) {
  var d = new Date()
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cName + '=' + cValue + ';' + expires + ';path=/'
}

export function getCookie(cName: string) {
  var name = cName + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export async function fetchData(amount: number = 10) {
  try {
    const data: VendorsDataType = await fetch(
      'https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json'
    ).then(res => {
      return res.json()
    })
    // amount help you chose amount of vendors
    return Object.values(data.vendors).slice(0, amount)
  } catch (err) {
    console.error(err)
  }
}

export const changeScroll = (arg: 'add' | 'remove') => {
  if (arg === 'add') window.removeEventListener('scroll', noScroll)
  if (arg === 'remove') window.addEventListener('scroll', noScroll)
}

function noScroll(): void {
  window.scrollTo(0, 0)
}

export function cssChanges(
  cont: HTMLElement | null,
  body: HTMLElement | null,
  arg: 'remove' | '' = ''
) {
  cont && (cont.style.display = arg === 'remove' ? 'none' : 'flex')
  body && (body.style.filter = arg === 'remove' ? 'blur(0px)' : 'blur(10px)')
}
