function dropdownfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function dropdownfunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function dropdownfunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  function dropdownfunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  function dropdownfunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }
  function dropdownfunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
  }


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
