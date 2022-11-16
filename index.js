function validate() {
  var soValue = document.getElementById('sodium').value;
  var poValue = document.getElementById('potassium').value;
  var inr = document.getElementById('inr').value;
  var coValue = document.getElementById('co2').value;
  var urValue = document.getElementById('urea').value;
  var creValue = document.getElementById('creat').value;
  var hbValue = document.getElementById('hb').value;
  if (
    (soValue == null || soValue == '',
    poValue == null || poValue == '',
    inr == null || inr == '',
    coValue == null || coValue == '',
    urValue == null || urValue == '',
    creValue == null || creValue == '',
    hbValue == null || hbValue == '')
  ) {
    alert('Please Fill All Required Fields');
    return false;
  }

  if (soValue <= 121 || soValue >= 160) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (poValue <= 3.0 || poValue >= 5.5) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (inr > 1) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (coValue <= 15 || coValue >= 35) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (urValue <= 2.0 || urValue >= 7.5) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (creValue <= 40 || creValue > 106) {
    swal({
      title: 'Patient X Report!',
      text: 'Dr, Emergency!',
      icon: 'warning',
    });
  } else if (hbValue < 11) {
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

  //document.getElementById('rep-form').reset();
}
