const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const projectsContent = document.querySelector('#projects-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '325px',
    height: '360px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 30,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#5B5B5B')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

projects.addEventListener('click', () => {
  const projects = new WinBox({
    title: 'Projects',
    width: '325px',
    height: '360px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 30,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground('#5B5B5B')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})