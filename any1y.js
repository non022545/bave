
document.addEventListener("DOMContentLoaded", function () {
  // ซ่อนข้อความเมื่อโหลดหน้าเว็บ
  document.getElementById('pi').style.display = 'none';

  // เมื่อคลิกปุ่ม "#more"
  document.getElementById('more').addEventListener('click', function () {
    var pi = document.getElementById('pi');
    if (pi.style.display === 'none') {
      pi.style.display = 'block'; // แสดงข้อความ
    } else {
      pi.style.display = 'none'; // ซ่อนข้อความ
    }
  });

  document.getElementById('bibi').style.display = 'none';

  document.getElementById('bibishow').addEventListener('click', function () {
    var bibi = document.getElementById('bibi');
    if (bibi.style.display === 'none') {
      bibi.style.display = 'block'; // แสดงข้อความ
    } else {
      bibi.style.display = 'none'; // ซ่อนข้อความ
    }
  });

  document.getElementById('all').style.display = 'none';

  document.getElementById('showall').addEventListener('click', function () {
    var all = document.getElementById('all');
    var letgo = document.getElementById('letgo');
    if (all.style.display === 'none') {
      all.style.display = 'block';
      letgo.style.display = 'none'; // ซ่อนปุ่ม "แสดงทั้งหมด"
    } else {
      all.style.display = 'none';
    }
  });



  document.getElementById('back').addEventListener('click', function () {
    document.getElementById('all').style.display = 'none';
    document.getElementById('letgo').style.display = 'block'; // แสดงหน้าแรก
  });


});


