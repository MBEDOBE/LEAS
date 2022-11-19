function validate() {
  var inr = document.getElementById('inr').value;
  var creValue = document.getElementById('creat').value;
  var hbValue = document.getElementById('hb').value;
  if (
    (
    inr == null || inr == '',
    creValue == null || creValue == '',
    hbValue == null || hbValue == '')
  ) {
    alert('Please Fill All Required Fields');
    return false;
  }

  if (inr > 1) {
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
