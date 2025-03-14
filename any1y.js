document.addEventListener("DOMContentLoaded", function () {
    // ซ่อนข้อความเมื่อโหลดหน้าเว็บ
    // document.getElementById('vdo1y').style.display = 'none';

    // เมื่อคลิกปุ่ม "#more"
    // document.getElementById('more').addEventListener('click', function () {
    //   var vdo1y = document.getElementById('vdo1y');
    //   if (vdo1y.style.display === 'none') {
    //     vdo1y.style.display = 'block'; // แสดงข้อความ
    //   } else {
    //     vdo1y.style.display = 'none'; // ซ่อนข้อความ
    //   }
    // });
    
    document.getElementById("submitbtn").addEventListener("click", function() {
        let textInput = document.getElementById("textinput").value.trim(); // รับค่าจาก input
        if (textInput === "01/04/2567") {
            document.getElementById("all").style.display = "block"; // แสดงเนื้อหา
            document.getElementById('letgo').style.display = 'none';
            document.getElementById('back2').style.display = 'none';
            
           
        } else {
            alert("💢ลืมวันที่คบกันหรอโกรธแล้วน้า💢"); // แจ้งเตือนถ้าพิมพ์ผิด
        }
    });
    
    // document.getElementById("textInput").addEventListener("keypress", function(event) {
    //     if (event.key === "Enter") { // ตรวจสอบเมื่อกด Enter
    //         if (this.value.trim() === "รัก") { // ตรวจสอบว่าพิมพ์ "รัก" จริงไหม
    //             document.getElementById("all").style.display = "block"; // แสดงเนื้อหา
    //             document.getElementById('letgo').style.display = 'none'
    //             document.getElementById('back2').style.display = 'none'
    //         } else {
    //             alert("พิมพ์คำว่า 'รัก' ให้ถูกต้องนะ ❤️"); // แจ้งเตือนถ้าพิมพ์ผิด
    //         }
    //     }
    // });
   
    // document.getElementById('ph1y').style.display = 'none';

    // document.getElementById('bibishow').addEventListener('click', function () {
    //   var ph1y = document.getElementById('ph1y');
    //   if (ph1y.style.display === 'none') {
    //     ph1y.style.display = 'block'; // แสดงข้อความ
    //   } else {
    //     ph1y.style.display = 'none'; // ซ่อนข้อความ
    //   }
    // });

    document.getElementById('all').style.display = 'none';

    // document.getElementById('showall').addEventListener('click', function () {
    //   var all = document.getElementById('all');
    //   var letgo = document.getElementById('letgo');
    //   var back2 = document.getElementById('back2');
    //   if (all.style.display === 'none') {
    //     all.style.display = 'block';
    //     letgo.style.display = 'none'; // ซ่อนปุ่ม "แสดงทั้งหมด"
    //     back2.style.display = 'none';
    //   } else {
    //     all.style.display = 'none';
    //   }
    // });

document.getElementById('cont2').style.display = 'none'

    document.getElementById('menu1').addEventListener('click', function () {
      var cont2 = document.getElementById('cont2');
      var cont1 = document.getElementById('cont1');
      var back3 = document.getElementById('back3');
      var back1 = document.getElementById('back1');
      if (cont2.style.display === 'none') {
        cont3.style.display = 'block';
        cont1.style.display = 'none';
        back2.style.display = 'block';
        back1.style.display = 'none';

      } else {
        cont2.style.display = 'none';
      }
    });


    document.getElementById('back1').addEventListener('click', function () {
      document.getElementById('all').style.display = 'none';
      document.getElementById('letgo').style.display = 'block'; // แสดงหน้าแรก

    });




    document.getElementById('back2').addEventListener('click', function () {
      document.getElementById('cont1').style.display = 'block';
      document.getElementById('letgo').style.display = 'none';
      document.getElementById('cont3').style.display = 'none';
      document.getElementById('back2').style.display = 'none';
      document.getElementById('back1').style.display = 'block';
      document.getElementById('cont2').style.display = 'none';
      document.getElementById('cont4').style.display = 'none';


    });
  });


  document.getElementById('cont3').style.display = 'none';

  document.getElementById('menu2').addEventListener('click', function () {
    document.getElementById('cont2').style.display = 'block';
    document.getElementById('cont1').style.display = 'none';
    document.getElementById('back1').style.display = 'none';
    document.getElementById('back2').style.display = 'block';
  });

  document.getElementById('cont4').style.display = 'none';

  document.getElementById('menu3').addEventListener('click', function(){
    document.getElementById('cont4').style.display = 'block';
    document.getElementById('cont1').style.display = 'none';
    document.getElementById('back1').style.display = 'none';
    document.getElementById('back2').style.display = 'block';
  

  });


    document.addEventListener("DOMContentLoaded", function () {
        let audio = document.getElementById("bg-music");
        audio.play().catch(error => console.log("Autoplay ถูกบล็อก", error));
    });
