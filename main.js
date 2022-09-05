let header = document.getElementById('headerCon')
let sideBar = document.getElementById('sideBarCon')
let mainContent = document.getElementById('mainContentCon')
let container = document.getElementById('con')

let search = document.getElementById('search')
let messages = document.getElementById('headerMessage')
let notification = document.getElementById('headerNotification')

let logoName = document.getElementById('logoText')

let activeHover = document.getElementById('active')
let sideBarHover01 = document.getElementById('sideBarEnterMouse01')
let sideBarHover02 = document.getElementById('sideBarEnterMouse02')
let sideBarHover03 = document.getElementById('sideBarEnterMouse03')
let sideBarHover04 = document.getElementById('sideBarEnterMouse04')
let sideBarHover05 = document.getElementById('sideBarEnterMouse05')
let sideBarHover06 = document.getElementById('sideBarEnterMouse06')
let sideBarHover07 = document.getElementById('sideBarEnterMouse07')

let dropUl = document.getElementById('dronUlCon')
let dropMenuHover01 = document.getElementById('dropMenu01')
let dropMenuHover02 = document.getElementById('dropMenu02')
let dropMenuHover03 = document.getElementById('dropMenu03')
let dropMenuHover04 = document.getElementById('dropMenu04')


let lightTheme = document.getElementById('lightMode')
let darkTheme = document.getElementById('darkMode')
let btnModeBg = document.getElementById('themeWrap')

let profileNav = document.getElementById('profileNavMenuCon')
let vProfile = document.getElementById('viewProfile')
let lOut = document.getElementById('logOut')

let hoverPnavMenu01 = document.getElementById('hoverProgfileMenu01')
let hoverPnavMenu02 = document.getElementById('hoverProgfileMenu02')
let hoverPnavMenu03 = document.getElementById('hoverProgfileMenu03')


let navTooltip01 = document.getElementById('tooltipHoverEffectDash')
let navTooltip02 = document.getElementById('tooltipHoverEffectOver')
let navTooltip03 = document.getElementById('tooltipHoverEffectPost')
let navTooltip04 = document.getElementById('tooltipHoverEffectSched')
let navTooltip05 = document.getElementById('tooltipHoverEffectIncome')
let navTooltip06 = document.getElementById('tooltipHoverEffectPromote')
let navTooltip07 = document.getElementById('tooltipHoverEffectDoc')
let navTooltip08 = document.getElementById('tooltipHoverEffectRep')





function light() {
  header.style.backgroundColor = '#fff'
  header.style.borderBottom = '1px solid rgba(221, 218, 218, 0.7)'

  sideBar.style.backgroundColor = '#fff'
  sideBar.style.borderRight = '1px solid rgba(221, 218, 218, 0.7)'

  mainContent.style.backgroundColor = '#fff'
  container.style.backgroundColor = '#ededed'

  search.style.backgroundColor = '#fff'
  search.style.border = '1px solid rgba(221, 218, 218, 0.7)'
  search.style.color = '#222'

  messages.style.color = '#222'
  notification.style.color = '#222'
  logoName.style.color = '#222'





  activeHover.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
  activeHover.style.color = '#222'

  sideBarHover01.addEventListener('mouseenter', () => {
    sideBarHover01.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover01.style.color = '#222'
  })
  sideBarHover01.addEventListener('mouseleave', () => {
    sideBarHover01.style.background = 'none'
    sideBarHover01.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover02.addEventListener('mouseenter', () => {
    sideBarHover02.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover02.style.color = '#222'
  })
  sideBarHover02.addEventListener('mouseleave', () => {
    sideBarHover02.style.background = 'none'
    sideBarHover02.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover03.addEventListener('mouseenter', () => {
    sideBarHover03.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover03.style.color = '#222'
  })
  sideBarHover03.addEventListener('mouseleave', () => {
    sideBarHover03.style.background = 'none'
    sideBarHover03.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover04.addEventListener('mouseenter', () => {
    sideBarHover04.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover04.style.color = '#222'
  })
  sideBarHover04.addEventListener('mouseleave', () => {
    sideBarHover04.style.background = 'none'
    sideBarHover04.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover05.addEventListener('mouseenter', () => {
    sideBarHover05.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover05.style.color = '#222'
  })
  sideBarHover05.addEventListener('mouseleave', () => {
    sideBarHover05.style.background = 'none'
    sideBarHover05.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover06.addEventListener('mouseenter', () => {
    sideBarHover06.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover06.style.color = '#222'
  })
  sideBarHover06.addEventListener('mouseleave', () => {
    sideBarHover06.style.background = 'none'
    sideBarHover06.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover07.addEventListener('mouseenter', () => {
    sideBarHover07.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    sideBarHover07.style.color = '#222'
  })
  sideBarHover07.addEventListener('mouseleave', () => {
    sideBarHover07.style.background = 'none'
    sideBarHover07.style.color = 'rgb(150, 150, 150)'
  })




  dropMenuHover01.addEventListener('mouseenter', () => {
    dropMenuHover01.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    dropMenuHover01.style.color = '#222'
  })
  dropMenuHover01.addEventListener('mouseleave', () => {
    dropMenuHover01.style.background = 'none'
    dropMenuHover01.style.color = 'rgb(150, 150, 150)'
  })

  dropMenuHover02.addEventListener('mouseenter', () => {
    dropMenuHover02.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    dropMenuHover02.style.color = '#222'
  })
  dropMenuHover02.addEventListener('mouseleave', () => {
    dropMenuHover02.style.background = 'none'
    dropMenuHover02.style.color = 'rgb(150, 150, 150)'
  })

  dropMenuHover03.addEventListener('mouseenter', () => {
    dropMenuHover03.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    dropMenuHover03.style.color = '#222'
  })
  dropMenuHover03.addEventListener('mouseleave', () => {
    dropMenuHover03.style.background = 'none'
    dropMenuHover03.style.color = 'rgb(150, 150, 150)'
  })

  dropMenuHover04.addEventListener('mouseenter', () => {
    dropMenuHover04.style.backgroundColor = 'rgba(235, 235, 235, 0.7)'
    dropMenuHover04.style.color = '#222'
  })
  dropMenuHover04.addEventListener('mouseleave', () => {
    dropMenuHover04.style.background = 'none'
    dropMenuHover04.style.color = 'rgb(150, 150, 150)'
  })

  darkTheme.style.background = 'none'
  darkTheme.style.color = '#222'
  lightTheme.style.backgroundColor = '#fff'
  btnModeBg.style.backgroundColor = 'rgba(228, 224, 224, 0.7)'
  lightTheme.style.color = '#222'


  profileNav.style.backgroundColor = '#fff'
  profileNav.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  vProfile.style.color = '#222'
  lOut.style.color = '#222'

  hoverPnavMenu01.addEventListener('mouseenter', () => {
    hoverPnavMenu01.style.backgroundColor = 'rgba(241, 237, 237, 0.75)'
  })
  hoverPnavMenu01.addEventListener('mouseleave', () => {
    hoverPnavMenu01.style.background = 'none'
  })

  hoverPnavMenu02.addEventListener('mouseenter', () => {
    hoverPnavMenu02.style.backgroundColor = 'rgba(241, 237, 237, 0.75)'
  })
  hoverPnavMenu02.addEventListener('mouseleave', () => {
    hoverPnavMenu02.style.background = 'none'
  })

  hoverPnavMenu03.addEventListener('mouseenter', () => {
    hoverPnavMenu03.style.backgroundColor = 'rgba(241, 237, 237, 0.75)'
  })
  hoverPnavMenu03.addEventListener('mouseleave', () => {
    hoverPnavMenu03.style.background = 'none'
  })

  lightTheme.style.left = '40px'
  darkTheme.style.left = '0'

  navTooltip01.style.backgroundColor = '#fff'
  navTooltip01.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip01.style.setProperty('--beforeBack', '#fff')

  navTooltip02.style.backgroundColor = '#fff'
  navTooltip02.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip02.style.setProperty('--beforeBack', '#fff')

  navTooltip03.style.backgroundColor = '#fff'
  navTooltip03.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip03.style.setProperty('--beforeBack', '#fff')

  navTooltip04.style.backgroundColor = '#fff'
  navTooltip04.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip04.style.setProperty('--beforeBack', '#fff')

  navTooltip05.style.backgroundColor = '#fff'
  navTooltip05.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip05.style.setProperty('--beforeBack', '#fff')

  navTooltip06.style.backgroundColor = '#fff'
  navTooltip06.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip06.style.setProperty('--beforeBack', '#fff')

  navTooltip07.style.backgroundColor = '#fff'
  navTooltip07.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip07.style.setProperty('--beforeBack', '#fff')

  navTooltip08.style.backgroundColor = '#fff'
  navTooltip08.style.boxShadow = '0 3px 10px 3px rgba(209, 209, 209, 0.7)'
  navTooltip08.style.setProperty('--beforeBack', '#fff')

  dropUl.style.backgroundColor = '#fff'
  dropUl.style.boxShadow = ''
  dropUl.style.setProperty('--beforeBack', '#fff')
}
function dark() {
  header.style.backgroundColor = '#18191A'
  header.style.borderBottom = '1px solid #3A3B3C'
  sideBar.style.backgroundColor = '#18191A'
  sideBar.style.borderRight = '1px solid #3A3B3C'
  mainContent.style.backgroundColor = '#18191A'
  container.style.backgroundColor = '#242526'

  search.style.backgroundColor = '#242526'
  search.style.border = '1px solid #3A3B3C'
  search.style.color = '#fff'

  messages.style.color = 'rgb(150, 150, 150)'
  notification.style.color = 'rgb(150, 150, 150)'

  logoName.style.color = '#fff'


  activeHover.style.backgroundColor = '#282828'
  activeHover.style.color = '#fff'

  sideBarHover01.addEventListener('mouseenter', () => {
    sideBarHover01.style.backgroundColor = '#282828'
    sideBarHover01.style.color = '#fff'
  })
  sideBarHover01.addEventListener('mouseleave', () => {
    sideBarHover01.style.background = 'none'
    sideBarHover01.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover02.addEventListener('mouseenter', () => {
    sideBarHover02.style.backgroundColor = '#282828'
    sideBarHover02.style.color = '#fff'
  })
  sideBarHover02.addEventListener('mouseleave', () => {
    sideBarHover02.style.background = 'none'
    sideBarHover02.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover03.addEventListener('mouseenter', () => {
    sideBarHover03.style.backgroundColor = '#282828'
    sideBarHover03.style.color = '#fff'
  })
  sideBarHover03.addEventListener('mouseleave', () => {
    sideBarHover03.style.background = 'none'
    sideBarHover03.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover04.addEventListener('mouseenter', () => {
    sideBarHover04.style.backgroundColor = '#282828'
    sideBarHover04.style.color = '#fff'
  })
  sideBarHover04.addEventListener('mouseleave', () => {
    sideBarHover04.style.background = 'none'
    sideBarHover04.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover05.addEventListener('mouseenter', () => {
    sideBarHover05.style.backgroundColor = '#282828'
    sideBarHover05.style.color = '#fff'
  })
  sideBarHover05.addEventListener('mouseleave', () => {
    sideBarHover05.style.background = 'none'
    sideBarHover05.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover06.addEventListener('mouseenter', () => {
    sideBarHover06.style.backgroundColor = '#282828'
    sideBarHover06.style.color = '#fff'
  })
  sideBarHover06.addEventListener('mouseleave', () => {
    sideBarHover06.style.background = 'none'
    sideBarHover06.style.color = 'rgb(150, 150, 150)'
  })

  sideBarHover07.addEventListener('mouseenter', () => {
    sideBarHover07.style.backgroundColor = '#282828'
    sideBarHover07.style.color = '#fff'
  })
  sideBarHover07.addEventListener('mouseleave', () => {
    sideBarHover07.style.background = 'none'
    sideBarHover07.style.color = 'rgb(150, 150, 150)'
  })






  dropMenuHover01.addEventListener('mouseenter', () => {
    dropMenuHover01.style.backgroundColor = '#282828'
    dropMenuHover01.style.color = '#fff'
  })
  dropMenuHover01.addEventListener('mouseleave', () => {
    dropMenuHover01.style.background = 'none'
    dropMenuHover01.style.color = 'rgb(150, 150, 150)'
  })
  dropMenuHover02.addEventListener('mouseenter', () => {
    dropMenuHover02.style.backgroundColor = '#282828'
    dropMenuHover02.style.color = '#fff'
  })
  dropMenuHover02.addEventListener('mouseleave', () => {
    dropMenuHover02.style.background = 'none'
    dropMenuHover02.style.color = 'rgb(150, 150, 150)'
  })
  dropMenuHover03.addEventListener('mouseenter', () => {
    dropMenuHover03.style.backgroundColor = '#282828'
    dropMenuHover03.style.color = '#fff'
  })
  dropMenuHover03.addEventListener('mouseleave', () => {
    dropMenuHover03.style.background = 'none'
    dropMenuHover03.style.color = 'rgb(150, 150, 150)'
  })
  dropMenuHover04.addEventListener('mouseenter', () => {
    dropMenuHover04.style.backgroundColor = '#282828'
    dropMenuHover04.style.color = '#fff'
  })
  dropMenuHover04.addEventListener('mouseleave', () => {
    dropMenuHover04.style.background = 'none'
    dropMenuHover04.style.color = 'rgb(150, 150, 150)'
  })

  darkTheme.style.backgroundColor = '#282828'
  darkTheme.style.color = '#fff'
  lightTheme.style.background = 'none'
  btnModeBg.style.backgroundColor = '#3A3B3C'
  lightTheme.style.color = '#fff'


  profileNav.style.backgroundColor = '#18191A'
  profileNav.style.boxShadow = '0 1px 10px 1px rgba(45, 45, 45, 0.7)'
  vProfile.style.color = '#fff'
  lOut.style.color = '#fff'

  hoverPnavMenu01.addEventListener('mouseenter', () => {
    hoverPnavMenu01.style.backgroundColor = '#282828'
  })
  hoverPnavMenu01.addEventListener('mouseleave', () => {
    hoverPnavMenu01.style.background = 'none'
  })

  hoverPnavMenu02.addEventListener('mouseenter', () => {
    hoverPnavMenu02.style.backgroundColor = '#282828'
  })
  hoverPnavMenu02.addEventListener('mouseleave', () => {
    hoverPnavMenu02.style.background = 'none'
  })

  hoverPnavMenu03.addEventListener('mouseenter', () => {
    hoverPnavMenu03.style.backgroundColor = '#282828'
  })
  hoverPnavMenu03.addEventListener('mouseleave', () => {
    hoverPnavMenu03.style.background = 'none'
  })

  lightTheme.style.left = '0'
  darkTheme.style.left = '-45px'

  navTooltip01.style.backgroundColor = '#18191A'
  navTooltip01.style.color = '#fff'
  navTooltip01.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip01.style.setProperty('--beforeBack', '#18191A')

  navTooltip02.style.backgroundColor = '#18191A'
  navTooltip02.style.color = '#fff'
  navTooltip02.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip02.style.setProperty('--beforeBack', '#18191A')

  navTooltip03.style.backgroundColor = '#18191A'
  navTooltip03.style.color = '#fff'
  navTooltip03.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip03.style.setProperty('--beforeBack', '#18191A')

  navTooltip04.style.backgroundColor = '#18191A'
  navTooltip04.style.color = '#fff'
  navTooltip04.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip04.style.setProperty('--beforeBack', '#18191A')

  navTooltip05.style.backgroundColor = '#18191A'
  navTooltip05.style.color = '#fff'
  navTooltip05.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip05.style.setProperty('--beforeBack', '#18191A')

  navTooltip06.style.backgroundColor = '#18191A'
  navTooltip06.style.color = '#fff'
  navTooltip06.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip06.style.setProperty('--beforeBack', '#18191A')

  navTooltip07.style.backgroundColor = '#18191A'
  navTooltip07.style.color = '#fff'
  navTooltip07.style.boxShadow = '0 1px 10px 2px rgba(45, 45, 45, 0.7)'
  navTooltip07.style.setProperty('--beforeBack', '#18191A')

  navTooltip08.style.backgroundColor = '#18191A'
  navTooltip08.style.color = '#fff'
  navTooltip08.style.boxShadow = '0 3px 10px 3px rgba(45, 45, 45, 0.7)'
  navTooltip08.style.setProperty('--beforeBack', '#18191A')

  dropUl.style.backgroundColor = '#18191A'
  dropUl.style.boxShadow = '0 3px 10px 3px rgba(45, 45, 45, 0.7)'
  dropUl.style.setProperty('--beforeBack', '#18191A')
}
