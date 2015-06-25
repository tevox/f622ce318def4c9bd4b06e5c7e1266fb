// TEVOX Notifire - Plugin - Works on Jquery
(function($){
    jQuery.fn.tvx_plg_notifire = function(tvx_plg_opt){
        
        var tvx_plg_opt = $.extend({
            
            tvx_plg_elm: 'body',
            tvx_plg_wdt: 'full',
            tvx_plg_hgt: 'full'
            
        }, tvx_plg_opt);
        
        var make = function(){
            
            $(window).ready(function(){
                tvx_plg_widsize_wdt = $(window).width();
                tvx_plg_widsize_hgt = $(window).height();
            });
            $(window).resize(function(){
                tvx_plg_widsize_wdt = $(window).width();
                tvx_plg_widsize_hgt = $(window).height();
            });
            
            if(tvx_plg_opt.tvx_plg_wdt == 'full' && tvx_plg_opt.tvx_plg_hgt == 'full'){
                $(window).ready(function(){
                    $(tvx_plg_opt.tvx_plg_elm).width(tvx_plg_widsize_wdt).height(tvx_plg_widsize_hgt);
                    tvx_plg_opt.tvx_plg_wdt = tvx_plg_widsize_wdt;
                    tvx_plg_opt.tvx_plg_hgt = tvx_plg_widsize_hgt;
                });
                $(window).resize(function(){
                    $(tvx_plg_opt.tvx_plg_elm).width(tvx_plg_widsize_wdt).height(tvx_plg_widsize_hgt);
                    tvx_plg_opt.tvx_plg_wdt = tvx_plg_widsize_wdt;
                    tvx_plg_opt.tvx_plg_hgt = tvx_plg_widsize_hgt;
                });
            }
            console.log('%c'+'TEVOX Notifire -> '+ tvx_plg_opt.tvx_plg_elm +' -> Set size '+ tvx_plg_opt.tvx_plg_wdt +'x'+ tvx_plg_opt.tvx_plg_hgt +'','padding:2px 8px;border-radius:2px;line-height:18px;font-size:11px;font-weight:bold;background:#0096FA;color:#ffffff;');
        };

        return this.each(make);
    };
})(jQuery);





$(document).ready(function(){
    $(document).tvx_plg_notifire({
        tvx_plg_elm: 'body',
        tvx_plg_wdt: 'full',
        tvx_plg_hgt: 'full'
    });
});