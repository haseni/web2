var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {/*��ʱ����*/
  $cont.classList.remove('s--inactive')/*ɾ��ָ����ʽ��*/
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {/*����¼���˳��ʵ��*/
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();/*ֹͣ�¼��Ĵ���*/
    $cont.classList.remove('s--el-active');/*ɾ��Ԫ�ص�class����ʽ�����е�ָ����ʽ��*/
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});