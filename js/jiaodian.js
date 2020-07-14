var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {/*超时函数*/
  $cont.classList.remove('s--inactive')/*删除指定样式类*/
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {/*多个事件按顺序实现*/
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();/*停止事件的传播*/
    $cont.classList.remove('s--el-active');/*删除元素的class类样式集合中的指定样式类*/
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});