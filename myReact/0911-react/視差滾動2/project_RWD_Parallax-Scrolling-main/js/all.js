$(document).ready(function () {
    let showSkill = false;
    /*偵測scrollTop(滾動導覽列選單)，被點擊時執行任務*/
    $(".scrollTop").click(function (e) {
        /*避免效能差的裝置，會出現跳轉效果，使用e.preventDefault來取消默認行為*/
        e.preventDefault();
        /*點擊到this本身時，讓attr去讀取標籤裡面的屬性值*/
        let target = $(this).attr("href");

        /*★targetPos 變數的意思是取出頁首連結 target 的 href 屬性值，放入 Jquery 選擇器計算出 三大重點、技能熟練度以及 自我簡介區塊相對於 documet 的座標。
        /* 假設 target 取到字串 "#three-point" ，那麼就會以 $("#three-point") 選取到 三大重點區塊。*/
        let targetPos = $(target).offset().top;
        /*當點選到html或是body，卷軸往targetPos(即當下點選元素的位置)滾動*/
        $("html, body").animate({ scrollTop: targetPos }, 1000);
    });

    /*選取window視窗，讓卷軸在滾動時去讀取值*/
    $(window).scroll(function () {
        /*scrollPos 取出右側卷軸從頁首往下滾動多少 px。*/
        let scrollPos = $(window).scrollTop();
        /*將畫面高度讀出來 */
        let windowHeight = $(window).height();

        /*每次卷軸滾動都把3個值抓出來*/
        $(".scrollTop").each(function () {
            /*每次卷軸"滾動"，都會將目標讀出來(#three-point和#skills和#profiles)*/
            let target = $(this).attr("href");
            /*每次卷軸"滾動"，都會將目標當前元素的位置偏移值讀出來*/
            let targetPos = $(target).offset().top;
            /*每次卷軸"滾動"，都會將目標高度讀出來。★outerHeight會包含目標元素的paddping範圍 */
            let targetHeight = $(target).outerHeight();
            // console.log(targetPos, targetHeight, scrollPos);

            /*if判斷 指的是，滾動到三大重點、技能熟練度、自我簡介的區塊，才會開始執行後續目標任務。*/
            /*假如『視窗滾動範圍(scrollPos)超出目標元素(targetPos)的範圍，以及目標元素(targetPos)的範圍+高度，超過視窗滾動(scrollPos)範圍』*/
            if (targetPos - 1 <= scrollPos && targetPos + targetHeight > scrollPos) {
                $(".scrollTop").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });


        // progress bar 進度條
        // 需將『let showSkill = false;』移到外層，才不會因先被定義false，導致條件式永遠不成立
        /*取得技能熟練度區域高度*/
        let skillTop = $('#skills').position().top;
        console.log('skillTop_position',skillTop );

        /*讓進度條提前顯示(不要等到scrollTop導覽列顯示active才出現)*/
        /*if判斷式可避免 進度條事件重複觸發。全域有宣告let showSkill = false;  因此原先的 !showSkill (= true) 跑完一次 if 內的內容後，就會被判斷成不等於 true（= false）*/
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            /*選擇技能熟練度，並使用each將裡面的進度條都執行一次*/
            $('#skills .progress-bar').each(function () {
                /*thisValue變數取出進度條的值，再將thisValue動態效果填入css*/
                let thisValue = $(this).data('progress');
                // console.log('thisValue', thisValue);
                $(this).css('width', thisValue + '%');
            });
        }
        
        // animated
        $(".animated").each(function () {
            /*選擇.animated加上使用each，所以滾動時都會將3個元素的位置偏移值讀出來*/
            let thisPos = $(this).offset().top;
            /*畫面高度+視窗滾動範為(右側卷軸從頁首往下滾動多少px)>=3個元素的位置偏移值 */
            if (windowHeight + scrollPos >= thisPos) {
                $(this).addClass("fadeIn");
            }
        });
        //bg scroll
        /*讓自我簡介背景圖位移*/
        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px');

        /*讓六角學院視差滾動範例與人物做位移。*/
        /*background-position-y依照背景圖y軸做位移，scrollPos/2可讓動畫移動變慢，加上負數則可讓移動方向與視窗滾動方向相反*/
        $('#header-ele').css('transform', 'translateY( ' + scrollPos/2 + 'px )');
    
    });


});


