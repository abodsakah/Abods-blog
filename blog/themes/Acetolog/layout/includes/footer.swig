<div class="al_index_footer dis_flex_center">
    <div class="al_index_footer_item al_index_footer_title">
        {{ config.author }}
    </div>

    {# ICPLicense #}
    {% if theme.ICPLicense.enable === true %}
        <div class="al_index_footer_item" onclick="window.open('http://www.beian.miit.gov.cn')")>
            {{ theme.ICPLicense.content }}
        </div>
    {% endif %}

    <div class="al_index_footer_item al_index_footer_extra">
        Created with ❤️ By 
        <a href="http://abodsakka.xyz">Abdulrahman Sakah</a>
         on 
        <a href="https://www.wikiwand.com/en/Earth">Earth</a>
    </div>

    <div class="al_index_footer_item al_index_footer_extra_right">
        All Right Reserved
    </div>
</div>
