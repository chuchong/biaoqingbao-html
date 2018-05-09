var inst = new mdui.Drawer('#drawer');

// method
inst.close();
//必须都是有用的！！
document.getElementById('mymenu').addEventListener('click', function () {
  inst.toggle();
});
