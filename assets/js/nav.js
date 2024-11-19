document.addEventListener('DOMContentLoaded', () => {
    const navIcon = document.getElementById("nav-icon")
    const navItems = document.getElementById("nav-items")
    const indexProjectBtn = document.getElementById("btn-index-project")
    const indexContactBtn = document.getElementById("btn-index-contact")
    const aboutResumeBtn = document.getElementById("btn-about-resume")
    const resumeProjectsBtn = document.getElementById("btn-resume-projects")
    const projectsSampleProjectBtn = document.getElementById("btn-projects-sample-project")

    console.log(navIcon, navItems, indexProjectBtn, indexContactBtn, aboutResumeBtn, resumeProjectsBtn, projectsSampleProjectBtn);

    navIcon.addEventListener("click", (e) => {
        navItems.classList.toggle("hidden");
    })

    if (indexProjectBtn) {
        indexProjectBtn.addEventListener("click", (e) => {
            location.href="projects.html"
        })
    }

    if (indexContactBtn) {
        indexContactBtn.addEventListener("click", (e) => {
            location.href="contact.html"
        })

    }

    if (aboutResumeBtn) {
        aboutResumeBtn.addEventListener("click", (e) => {
            location.href="resume.html"
        })
    }

    if (resumeProjectsBtn) {
        resumeProjectsBtn.addEventListener("click", (e) => {
            location.href="projects.html"
        })
    }

    if (projectsSampleProjectBtn) {
        projectsSampleProjectBtn.addEventListener("click", (e) => {
            location.href="my-work.html"
        })
    }
})
