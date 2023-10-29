function hitungKnowledge(){
    $('.knowledge').show()
  }
  function hasilKnowledge(){
    let training = $('#nTraining').val()
    let qc = $('#nQC').val()

    var regex = /^[0-9%]+$/; // Ekspresi reguler untuk memeriksa angka atau simbol '%'

    if(!regex.test(training)) {
      toastr.warning('Tidak Boleh Selain Dalam Bentuk Nominal atau Persen!');
    }
    else if(!regex.test(qc)) {
      toastr.warning('Tidak Boleh Selain Dalam Bentuk Nominal atau Persen!');
    }
    else {
      let x1 = training.replace('%', '')
      let x2 = qc.replace('%', '')
      x1 = parseInt(x1)
      x2 = parseInt(x2)
      $('#hasilKnowledge').show()
      $('#nHasil').val(x1+x2+'%')
      $('#nHasil1').val(x1+x2+'%')
    }
  }
  function selesaiKnowledge(){
    $('.knowledge').hide()
  }

  function hitungsc(){
    $('.sc').show()
    $(document).ready(function(){
      $('#nPRM').on('blur', function() {
        var inputVal = $(this).val();
        if (!isNaN(inputVal)) {
          var currencyVal = parseFloat(inputVal).toLocaleString('id-ID', { 
              style: 'currency', 
              currency: 'IDR', 
              minimumFractionDigits: 0 
          });
          $(this).val(currencyVal);
        }
      });
      $('#nMMH').on('blur', function() {
        var inputVal = $(this).val();
        if (!isNaN(inputVal)) {
          var currencyVal = parseFloat(inputVal).toLocaleString('id-ID', { 
              style: 'currency', 
              currency: 'IDR', 
              minimumFractionDigits: 0 
          });
          $(this).val(currencyVal);
        }
      });
      $('#nTotalHP').on('blur', function() {
        var inputVal = $(this).val();
        if (!isNaN(inputVal)) {
          var currencyVal = parseFloat(inputVal).toLocaleString('id-ID', { 
              style: 'currency', 
              currency: 'IDR', 
              minimumFractionDigits: 0 
          });
          $(this).val(currencyVal);
        }
      });
    });
  }
  function selesaisc(){
    $('.sc').hide()
  }
  function hasilsc(){
    let x1 = $('#nPRM').val()
    let x2 = $('#nMMH').val()
    let x3 = $('#nTotalHP').val()
    x1 = x1.replace(/[^\d]/g, '');
    x2 = x2.replace(/[^\d]/g, '');
    x3 = x3.replace(/[^\d]/g, '');
    x1 = parseInt(x1); x2 = parseInt(x2); x3 = parseInt(x3);
    let hasil = (((((x1 + x2) / x3)/50)*20)*100).toFixed(2)
    $('#hasilsc').show()
    $('#nHasilsc').val(hasil+'%')
    $('#nHasilsc1').val(hasil+'%')
  }

  function hitungprd(){
    $('.prd').show()
  }
  function selesaiprd(){
    $('.prd').hide()
  }
  function hasilprd(){
    let terjual = $('#nTerjual').val()
    let target = $('#nTarget').val()
    let hasil = ((terjual / target)*40).toFixed(2)
    $('#hasilprd').show()
    $('#nHasilprd').val(hasil+'%')
    $('#nHasilprd1').val(hasil+'%')
  }

  function hitungue(){
    $('.ue').show()
    $('#nJumlahUE').on('blur', function() {
        var inputVal = $(this).val();
        if (!isNaN(inputVal)) {
          var currencyVal = parseFloat(inputVal).toLocaleString('id-ID', { 
              style: 'currency', 
              currency: 'IDR', 
              minimumFractionDigits: 0 
          });
          $(this).val(currencyVal);
        }
    });
  }
  function selesaiue(){
    $('.ue').hide()
  }
  function hasilue(){
    let jumlahue = $('#nJumlahUE').val()
    let qtyUE = $('#nqtyUE').val()
    jumlahue = jumlahue.replace(/[^\d]/g, '');
    jumlahue = parseInt(jumlahue)
    let hasilUE = (((jumlahue/qtyUE)/2200000)*10).toFixed(2)
    $('#hasilue').show()
    $('#nHasilue').val((hasilUE+'%'))
    $('#nHasilue1').val((hasilUE+'%'))
  }

  function hitungmmh(){
    $('.mmh').show()
    $('#nJumlahMMH').on('blur', function() {
        var inputVal = $(this).val();
        if (!isNaN(inputVal)) {
          var currencyVal = parseFloat(inputVal).toLocaleString('id-ID', { 
              style: 'currency', 
              currency: 'IDR', 
              minimumFractionDigits: 0 
          });
          $(this).val(currencyVal);
        }
    });
  }
  function selesaimmh(){
    $('.mmh').hide()
  }
  function hasilmmh(){
    let jumlahmmh = $('#nJumlahMMH').val()
    let qtyMMH = $('#nqtyMMH').val()
    jumlahmmh = jumlahmmh.replace(/[^\d]/g, '');
    jumlahmmh = parseInt(jumlahmmh)
    let hasilmmh = (((jumlahmmh/qtyMMH)/5500000)*10).toFixed(2)
    $('#hasilmmh').show()
    $('#nHasilmmh').val((hasilmmh)+'%')
    $('#nHasilmmh1').val((hasilmmh)+'%')
  }
  
  function hasilTotal(){
    let y1 = $('#nHasil1').val()
    let y2 = $('#nHasilsc1').val()
    let y3 = $('#nHasilprd1').val()
    let y4 = $('#nHasilue1').val()
    let y5 = $('#nHasilmmh1').val()
    y1 = y1.replace('%', '')
    y2 = y2.replace('%', '')
    y3 = y3.replace('%', '')
    y4 = y4.replace('%', '')
    y5 = y5.replace('%', '')
    y1 = parseFloat(y1)
    y2 = parseFloat(y2)
    y3 = parseFloat(y3)
    y4 = parseFloat(y4)
    y5 = parseFloat(y5)
    let hasilTotal = (y1+y2+y3+y4+y5).toFixed(2)
    console.log(hasilTotal)
    $('#hasilAll').show()
    $('#nHasilTotal').val(hasilTotal+'%')
  }