function bam()
{
    console.log('đã bấm');
    alert('Hù Hù Hù Hù Hù Hù Hù Hù ');
    var name=document.getElementById('name').value;
    var tuoi=document.getElementById('tuoi').value;
   // var gender=document.getElementById('gender').value;
     var ketqua=document.getElementById('ketqua');
     ketqua.innerHTML=
     '<p>Chào Bạn '+name+'</p>' + '<p>'+tuoi+' Tuổi</p>';

}