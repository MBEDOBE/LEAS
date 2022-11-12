function validate() {
  var soValue = document.getElementById('sodium').value;
  var poValue = document.getElementById('potassium').value;
  var chloValue = document.getElementById('chloride').value;
  var coValue = document.getElementById('co2').value;
  var urValue = document.getElementById('urea').value;
  var creValue = document.getElementById('creat').value;
  var hbValue = document.getElementById('hb').value;
  if (
    (soValue == null || soValue == '',
    poValue == null || poValue == '',
    chloValue == null || chloValue == '',
    coValue == null || coValue == '',
    urValue == null || urValue == '',
    creValue == null || creValue == '',
    hbValue == null || hbValue == '')
  ) {
    alert('Please Fill All Required Fields');
    return false;
  }

  if (soValue <= '121' || soValue >= '160') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (poValue <= '3.5' || poValue >= '5.5') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (chloValue <= '94' || chloValue >= '115') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (coValue <= '15' || coValue >= '35') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (urValue <= '1.0' || urValue >= '7.5') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (creValue <= '50' || creValue >= '351') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (hbValue <= '9') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (test <= '9') {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else {
    swal({
      title: 'Good job!',
      text: 'Report Submitted!',
      icon: 'success',
    });
  }

  document.getElementById('rep-form').reset();
}
