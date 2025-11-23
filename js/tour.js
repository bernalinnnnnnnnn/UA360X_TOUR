const viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'main gate',
    sceneFadeDuration: 1000
  },
  scenes: {
    main: {
      title: "Main Lobby",
      type: "equirectangular",
      panorama: ""
    },
    library: {
      title: "University Library",
      type: "equirectangular",
      panorama: "assets/images/library.jpg"
      
    },
    lab: {
      title: "FADC",
      type: "equirectangular",
      panorama: "assets/images/lab.jpg"
    },
    admin: {
      title: "Administration Building",
      type: "equirectangular",
      panorama: "assets/images/admin.jpg"
    },
    registrar: {
      title: "Registrar’s Office",
      type: "equirectangular",
      panorama: "assets/images/registrar.jpg"
    },
    ict: {
      title: "CMCS Building",
      type: "equirectangular",
      panorama: "assets/images/ict.jpg"
    },
    covered_court: {
      title: "Covered Court",
      type: "equirectangular",
      panorama: "assets/images/covered_court.jpg"
    },
    guidance: {
      title: "Guidance Office",
      type: "equirectangular",
      panorama: "assets/images/guidance.jpg"
    },
    elementary: {
      title: "Elementary Department",
      type: "equirectangular",
      panorama: "assets/images/elementary.jpg"
    },
    highschool: {
      title: "High School Department",
      type: "equirectangular",
      panorama: "assets/images/highschool.jpg"
    },
    cte: {
      title: "College of Teacher Education",
      type: "equirectangular",
      panorama: "assets/images/cte.jpg"
    },
    cafc: {
      title: "College of Agriculture and Forestry (CAFC)",
      type: "equirectangular",
      panorama: "assets/images/cafc.jpg"
    },
    student_center: {
      title: "Student Center",
      type: "equirectangular",
      panorama: "assets/images/student_center.jpg"
    }
  }
});

function loadScene(sceneName) {
  viewer.loadScene(sceneName);
}
